import './UserPanel.css';
import './App.css'
import React from 'react';
import { Link } from 'react-router-dom';

export class UserPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      panel_info: null
    }
    fetch('http://localhost:8080/api/user/userPanel', {
      method: 'GET'
    })
      .then(response => response.json())
      .then(data => {
        this.setState({ panel_info: data });
      })
  }


  handleActualizationClick = (event) => {
    event.preventDefault();
      fetch('http://localhost:8080/api/user/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          bloodGroup: this.state.panel_info.bloodGroup,
          rckikCity: this.state.panel_info.rckikCity,
          donationDate: new Date(new Date(this.state.panel_info.donationDate).getTime() - (12*7*24*60*60*1000)),
          notificationPermission: false,
          notificationEmergencyDemand: this.state.panel_info.notificationEmergencyDemand,
          notificationAvailability: this.state.panel_info.notificationAvailability,
          notificationFrequency: this.state.period
        })
      })
        .then(data => {
          console.log(data)
          if (data.status === 200) {
            window.location.href = "/registration";
          }

        });
    
  }

  handleClick = () => {
    this.setState(prevState => ({
      hidden: !prevState.hidden
    }));
  }

  handleCheckboxChange = (event) => {
    this.setState({
      panel_info: {
        ...this.state.panel_info,
        [event.target.name]: event.target.checked
      }
    });
  }
  
  handleSelectChange = (event) => {
    this.setState({
      period: event.target.value
    });
  }
  
  render() {
    const period = [
      { id: 1, name: '1 dzień' },
      { id: 3, name: '3 dni' },
      { id: 7, name: '7 dni' },
      { id: 14, name: '14 dni' }
    ];
    let bloodGroups = [
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
          <Link to='/'><img className='arrow-back' src='normal_u20_1.svg'></img></Link>
          <div className='header'>

            <div className='title'>
              mDawca
            </div>
          </div>
          <div className='header2'>
            <div className='blood-container'>
              {this.state.panel_info===null ? null :(this.state.hidden ? 
              <img src={`krew_l${this.state.panel_info.personalBloodDemands}.png`} className='blood'></img> : 
              <img src={`krew_l${this.state.panel_info.personalBloodDemands}.png`} className='blood2'></img>)}
              <div className='blood-text'>
                {this.state.panel_info === null ? null : (bloodGroups.find(group => group.id === this.state.panel_info.bloodGroup)).name}
              </div>


            </div>
            <div className='text-area'>
              <div className='t1'>pilna potrzeba krwi</div>
              <Link to='/needs'><div className='t2'>Aktualne zapotrzebowanie w Twoim regionie</div></Link>
            </div>

          </div>

          {this.state.hidden ?
            <div className='notifications-area'>
              <img src='notification-bell.svg'></img>
              <div className='notification-text'>Moje powiadomienia</div>
              <img src='normal_u128.svg' onClick={this.handleClick}></img>
            </div>
            :
            <div className='notifications-area2'>
              <div className='not-head'>
                <img src='notification-bell.svg'></img>
                <div className='notification-text'>Moje powiadomienia</div>
                <img src='normal_u128.svg' id='arrow-rotate' onClick={this.handleClick} ></img>
              </div>
              <div className='notifications-details'>
               
                <div className='row-not2'>
                <input type='checkbox' name='notificationEmergencyDemand' onChange={this.handleCheckboxChange} checked={this.state.panel_info === null ? null : this.state.panel_info.notificationEmergencyDemand}></input><div className='row-not-text'>powiadomienie o nagłym zapotrzebowaniu w Twoim regionie</div>
                </div>
                <div className='row-not2'>
                <input type='checkbox' name='notificationAvailability' onChange={this.handleCheckboxChange} checked={this.state.panel_info === null ? null : this.state.panel_info.notificationAvailability}></input>
                  <div className='row-not-text'>powiadomienie o ponownej możliwości oddania krwi</div>
                </div>
                <div className='row-not3'>
                  <div className='row-not-text2'>otrzymuj powiadomienia nie częściej niż co</div>
                  <select id="select1" value={this.state.period} onChange={this.handleSelectChange}>
                    {period.map(item => (
                      <option key={item.id} value={item.id}>{item.name}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>}
          <div className='data-information'>
            <div className='data-information-title'>Twoje dane</div>
            <div className='Blood-group'>
              <div className='data-information-subtitle'>Grupa krwi</div>
              <div className='data-information-value'>{this.state.panel_info === null ? null : (bloodGroups.find(group => group.id === this.state.panel_info.bloodGroup)).name}</div>
              <hr></hr>
            </div>
            <div className='faculty'>
              <div className='data-information-subtitle'>Domyślna placówka RCK</div>
              <div className='data-information-value'>{this.state.panel_info===null ? null : this.state.panel_info.rckikFullName}</div>
              <hr></hr>
            </div>
            <div className='blood-date'>
              <div className='data-information-subtitle'>Data najbliższego możliwego oddania krwi pełnej</div>
              <div className='data-information-value'>{this.state.panel_info===null ? null : new Date(this.state.panel_info.donationDate).toLocaleDateString('en-GB')}</div>
            </div>

          </div>
          <div className='info-area'>
            <img src='info.svg' className='info-area-img'></img>
            <div className='info-area-text'>Twoje dane nie są pobierane automatycznie. <br></br>Pamiętaj, aby aktualizować je regularnie.<br></br>Data oddania krwi jest wyłącznie datą orientacyjną</div>
          </div>
          <div className='button-rows3'>
            <Link to='/map'>
              <div className='button-row'>
                <div className='text-in-button'>
                  Znajdź najbliższe punkty pobrań
                </div>
              </div>
            </Link>
            <Link to='/registration' onClick={this.handleActualizationClick}>
              <div className='button-row2'>
                <div className='text-in-button2'>
                  Zaktualizuj moje dane
                </div>
              </div>
            </Link>
          </div>
        </div>

      </div>
    );
  }

}

export default UserPanel;
