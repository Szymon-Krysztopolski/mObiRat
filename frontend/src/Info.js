import './Info.css';
import './App.css'
import React from 'react';

export class Info extends React.Component {
  render() {
    var miasto = "Poznań";
    // TODO
    return (
      <div className="App">
        <div id='rectangle'>
          <img className='arrow-back' src='normal_u20_1.svg'></img>
          <div className='header'>

            <div className='title'>
              mDawca
            </div>
          </div>
          <div className='title-context'>Aktualne zapotrzebowanie w Twoim<br></br>regionie - {miasto}</div>
          <div className='blood-results'>
            <div className='row'>
              <div className='blood'><img src='normal_u20_1.svg'></img>0 Rh-</div>
              <div className='blood'><img src='normal_u20_1.svg'></img>0 Rh+</div>
              <div className='blood'><img src='normal_u20_1.svg'></img>A Rh-</div>
              <div className='blood'><img src='normal_u20_1.svg'></img>A Rh+</div></div>
            <div className='row'>
              <div className='blood'><img src='normal_u20_1.svg'></img>B Rh-</div>
              <div className='blood'><img src='normal_u20_1.svg'></img>B Rh+</div>
              <div className='blood'><img src='normal_u20_1.svg'></img>AB Rh-</div>
              <div className='blood'><img src='normal_u20_1.svg'></img>AB Rh+</div>
            </div>

          </div>
        </div>
      </div>
    );
  }

}

export default Info;
