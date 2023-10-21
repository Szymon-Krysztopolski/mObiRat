import './Registration.css';
import './App.css'
import React from 'react';
import { Link } from 'react-router-dom';


export class Registration extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedBloodGroup: 'ZERO_RH_UJEMNY',
      selectedCity: 'RCKIK w Białymstoku',
      cities: ''
    };
    fetch('http://localhost:8080/api/rckik/all', {
      method: 'GET'
    })
      .then(response => response.json())
      .then(data => {
        this.setState({ cities: data });
      })

    this.setState(prevState => {
      return {
        cities: prevState.cities.sort((a, b) => a.fullName.localeCompare(b.fullName))
      };
    });
  }

  handleSelectChange = (event) => {
    this.setState({ selectedBloodGroup: event.target.value });
  }

  handleSelectChangeCity = (event) => {
    this.setState({ selectedCity: event.target.value});
  }

  handleRegisterClick = (event) => {
    event.preventDefault();
    console.log(this.state.selectedBloodGroup)
    const donationDate = document.querySelector('input[type="date"]').value;
    if (this.state.selectedBloodGroup !== '' && this.state.selectedCity !== '' && donationDate !== null) {
      fetch('http://localhost:8080/api/user/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          bloodGroup: this.state.selectedBloodGroup,
          rckikCity: this.state.selectedCity,
          donationDate: donationDate,
          notificationPermission: false,
          notificationEmergencyDemand: false,
          notificationAvailability: false,
          notificationFrequency: 0
        })
      })
        .then(data => {
          this.setState({ selectedBloodGroup: '' });
          this.setState({ selectedCity: '' });
          console.log(data)
          if (data.status === 200) {
            window.location.href = "/user-panel";
          }

        });
    }
  }
  render() {
    const bloodGroups = [
      { id: 'ZERO_RH_UJEMNY', name: '0 Rh-' },
      { id: 'ZERO_RH_DODATNI', name: '0 Rh+' },
      { id: 'A_RH_UJEMNY', name: 'A Rh-' },
      { id: 'A_RH_DODATNI', name: 'A Rh+' },
      { id: 'B_RH_UJEMNY', name: 'B Rh-' },
      { id: 'B_RH_DODATNI', name: 'B Rh+' },
      { id: 'AB_RH_UJEMNY', name: 'AB Rh-' },
      { id: 'AB_RH_DODATNI', name: 'AB Rh+' }
    ];

    return (
      <div className="App">
        <div id='rectangle'>
          <img className='arrow-back' onClick={() => window.history.back()} src='normal_u20_1.svg'></img>
          <div className='header'>

            <div className='title'>
              mDawca
            </div>
          </div>
          <div className='area'>
            <div className='form-area'>
              <div className='BloodInfo'>
                <div className='BloodInfo-text'>Wybierz swoją grupę krwi</div>
                <select value={this.state.selectedBloodGroup} onChange={this.handleSelectChange}>
                  {bloodGroups.map(item => (
                    <option key={item.id} value={item.id}>{item.name}</option>
                  ))}
                </select>
              </div>
              <div className='BloodInfo'>
                <div className='BloodInfo-text'>Wybierz swoją placówkę</div>
                <select value={this.state.selectedCity} onChange={this.handleSelectChangeCity}>
                  {Array.isArray(this.state.cities) && this.state.cities.map(item => (
                    <option key={item.id} value={item.fullName}>{item.fullName}</option>
                  ))}
                </select>
              </div>
              <div className='BloodInfo'>
                <div className='BloodInfo-text'>Ostatni termin oddania krwi</div>
                <input id='date-input' type='date'></input>
              </div>
            </div>
            <div><div className='button-rows2'>
              <Link to='/user-panel' onClick={this.handleRegisterClick}>
                <div className='button-row'>
                  <div className='text-in-button'>
                    Zapisz moje dane
                  </div>
                </div>
              </Link>
              <Link to='/registration'>
                <div className='button-row3'>
                  <div className='text-in-button'>
                    Pobieraj dane automatyczne<br></br>
                    (przewidywana data dostępności usług do końca roku)
                  </div>
                </div>
              </Link>
            </div></div>


          </div>
        </div>

      </div>
    );
  }

}

export default Registration;
