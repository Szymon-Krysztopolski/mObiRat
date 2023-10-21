import './Welcome.css';
import './App.css'
import React from 'react';

export class Welcome extends React.Component{
  render(){
    return (
      <div className="App">
        <div id='rectangle'>
        <img className='arrow-back' src='normal_u20_1.svg'></img>
          <div className='header'>
            <div className='title'>
              mDawca
            </div>
          </div>
          <div className='red-circle'>
            <img src='Ellipse1.svg'>
            </img>
            <img className='blood-in-circle' src='Logo-kafelek1.svg'></img>
          </div>
          <div className='title-context'>Twoje krwiodawstwo w jednym miejscu</div>
          <div className='subtitle-context'>Znajdziesz tu informacje o aktualnych <br></br>zapotrzebowaniach na krew w Twoim regionie</div>
          <div className='content'>
            <div className='content-row'>
              <img id='content-img' src='krew4.png'></img>
              <div className='picture-describe'>zapotrzebowaniu na krew w Twoim regionie</div>
            </div>
            <div className='content-row'>
              <img id='content-img' src='10931691.svg'></img>
              <div className='picture-describe'>lokalizacji najbliższych punktów poboru krwi</div>
            </div>
          </div>
          <div className='button-rows'>
            <div className='button-row'>
              <div className='text-in-button'>
                Dowiedz się więcej
              </div>
            </div>
            <div className='button-row'>
              <div className='text-in-button'>
                Jesteś już dawcą?<br></br>Dodaj swoje dane
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
}

export default Welcome;
