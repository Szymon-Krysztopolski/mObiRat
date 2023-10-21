import './Needs.css';
import './App.css'
import React from 'react';
import { Link } from 'react-router-dom';

export class Needs extends React.Component{
  constructor(props){
    super(props);
    this.state={
      cities: null,
      bloods: null
    }
    fetch('http://localhost:8080/api/rckik/all', {
      method: 'GET'
    })
      .then(response => response.json())
      .then(data => {
        data.sort((a, b) => a.fullName.localeCompare(b.fullName));
        this.setState({ cities: data });
      })
  }
  render(){
    var cities_in = this.state.cities;
    return (
      <div className="App">
        <div id='rectangle'>
          <img className='arrow-back' src='normal_u20_1.svg' onClick={() => window.history.back()}></img>
          <div className='header'>
            <div className='title'>
              mDawca
            </div>
          </div>
          <div className='title5'>Zapotrzebowanie na krew w Polsce</div>
          <div className='City'>
          {cities_in && cities_in.map(item => (
            <div key={item.id}>
              <div className='title-context'>{item.city}</div>
              <div className='blood-results'>
                <div className='row'>
                  <div className='blood'><img src={`krew_l${item.bloodDemands.zero_RH_UJEMNY}.png`} className='blood-img'></img> 0 Rh-</div>
                  <div className='blood'><img src={`krew_l${item.bloodDemands.zero_RH_DODATNI}.png`} className='blood-img'></img>0 Rh+</div>
                  <div className='blood'><img src={`krew_l${item.bloodDemands.a_RH_UJEMNY}.png`} className='blood-img'></img> A Rh-</div>
                  <div className='blood'><img src={`krew_l${item.bloodDemands.a_RH_DODATNI}.png`} className='blood-img'></img>A Rh+</div>
                </div>
                <div className='row'>
                <div className='blood'><img src={`krew_l${item.bloodDemands.b_RH_UJEMNY}.png`} className='blood-img'></img> B Rh-</div>
                  <div className='blood'><img src={`krew_l${item.bloodDemands.b_RH_DODATNI}.png`} className='blood-img'></img>B Rh+</div>
                  <div className='blood'><img src={`krew_l${item.bloodDemands.ab_RH_UJEMNY}.png`} className='blood-img'></img> AB Rh-</div>
                  <div className='blood'><img src={`krew_l${item.bloodDemands.ab_RH_DODATNI}.png`} className='blood-img'></img>AB Rh+</div>
                  </div>
              </div>
            </div>
          ))}
          

          </div>
          <div className='button-rows2'><Link to='/map' onClick={this.handleRegisterClick}>
            <div className='button-row'>
              <div className='text-in-button'>
                Znajdź najbliższe punkty pobrań
              </div>
            </div>
          </Link></div>
          
        </div>
      </div>
    );
  }
  
}

export default Needs;
