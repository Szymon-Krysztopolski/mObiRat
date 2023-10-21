import './Welcome.css';
import './App.css'
import React from 'react';
import {Link } from 'react-router-dom';

export class Welcome extends React.Component{
  render(){
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
          <div className='red-circle'>
            <img src='Ellipse1.svg'>
            </img>
            <img className='blood-in-circle' src='Logo-kafelek1.svg'></img>
          </div>
          <div className='title-context'>Twoje krwiodawstwo w jednym miejscu</div>
          <div className='subtitle-context'>Znajdziesz tu informacje o:</div>
          <div className='content'>
            <div className='content-row'>
              <img id='content-img' src='krew4.png'></img>
              <div className='picture-describe'>zapotrzebowaniu na krew w Twoim regionie</div>
            </div>
            <div className='content-row'>
              <img id='content-img' src='10931691.svg'></img>
              <div className='picture-describe'>lokalizacji najbliższych punktów poboru krwi</div>
            </div>
            <div className='content-row'>
              <img id='content-img' src='notification-bell-red.svg'></img>
              <div className='picture-describe'>przypomnieniach o możliwości oddania krwi <br></br>
               nagłych zapotrzebowaniach na pomoc</div>
            </div>
          </div>
          <div className='button-rows'>
            <Link to='/info'>
            <div className='button-row'>
              <div className='text-in-button'>
                Dowiedz się więcej
              </div>
            </div>
            </Link>
            <Link to='/registration'>
              <div className='button-row'>
                <div className='text-in-button'>
                  Jesteś już dawcą?<br></br>Dodaj swoje dane
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    );
  }
  
}

export default Welcome;
