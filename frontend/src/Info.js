import './Info.css';
import './App.css'
import { Link } from 'react-router-dom';
import React from 'react';
import Collapsible from 'react-collapsible';


export class Info extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      needs: null
    };
    fetch('http://localhost:8080/api/city/test', {
      method: 'GET'
    })
      .then(response => response.json())
      .then(data => {
        this.setState({ needs: data });
      })
  }
  render() {
    var miasto =null;
    if(this.state.needs!==null){
       miasto=this.state.needs.name;
    }
    
    if (this.state.needs !== null) {
      var aRHP = "krew_l" + this.state.needs.bloodType.a_RH_DODATNI + ".png"
      var aRHM = "krew_l" + this.state.needs.bloodType.a_RH_UJEMNY + ".png"
      var bRHP = "krew_l" + this.state.needs.bloodType.b_RH_DODATNI + ".png"
      var bRHM = "krew_l" + this.state.needs.bloodType.b_RH_UJEMNY + ".png"
      var zRHP = "krew_l" + this.state.needs.bloodType.zero_RH_DODATNI + ".png"
      var zRHM = "krew_l" + this.state.needs.bloodType.zero_RH_UJEMNY + ".png"
      var abRHP = "krew_l" + this.state.needs.bloodType.ab_RH_DODATNI + ".png"
      var abRHM = "krew_l" + this.state.needs.bloodType.ab_RH_UJEMNY + ".png"
      console.log(aRHP)
    }

    return (
      <div className="App">
        <div id='rectangle'>
          <Link to='/'>
            <img className='arrow-back' src='normal_u20_1.svg'></img>
          </Link>
          <div className='header'>

            <div className='title'>
              mDawca
            </div>
          </div>
          <div className='title-context'>Aktualne zapotrzebowanie w Twoim<br></br>regionie - {miasto!==null ? miasto : null}</div>
          <div className='blood-results'>
            <div className='row'>
              <div className='blood'><img src={zRHM} className='blood-img'></img>0 Rh-</div>
              <div className='blood'><img src={zRHP} className='blood-img'></img>0 Rh+</div>
              <div className='blood'><img src={aRHM} className='blood-img'></img>A Rh-</div>
              <div className='blood'><img src={aRHP} className='blood-img'></img>A Rh+</div></div>
            <div className='row'>
              <div className='blood'><img src={bRHM} className='blood-img'></img>B Rh-</div>
              <div className='blood'><img src={bRHP} className='blood-img'></img>B Rh+</div>
              <div className='blood'><img src={abRHM} className='blood-img'></img>AB Rh-</div>
              <div className='blood'><img src={abRHP} className='blood-img'></img>AB Rh+</div>
            </div>

          </div>
          <div className='QA'>
            <Collapsible trigger="Section 1">
              <p>Lorem ipsum...</p>
            </Collapsible>
            <Collapsible trigger="Section 2">
              <p>Lorem ipsum...</p>
            </Collapsible>
            <Collapsible trigger="Section 3">
              <p>Lorem ipsum...</p>
            </Collapsible>

          </div>
          <div className='button-rows2'>
            <Link to='/needs'>
            <div className='button-row2'>
              <div className='text-in-button2'>
                Zobacz zapotrzebowanie w innych rejonach
              </div>
            </div>
            </Link>
            <Link to='/map'>
              <div className='button-row'>
                <div className='text-in-button'>
                  Znajdź najbliższe punkty poboru
                </div>
              </div>
            </Link>
          </div>

        </div>
      </div>
    );
  }

}

export default Info;
