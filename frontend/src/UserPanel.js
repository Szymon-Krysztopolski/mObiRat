import './UserPanel.css';
import './App.css'
import React from 'react';
import { Link } from 'react-router-dom';
import { Switch } from 'react-switch-input';

export class UserPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: true,
      period: '7 dni'
    }
  }

  handleClick = () => {
    this.setState(prevState => ({
      hidden: !prevState.hidden
    }));
  }

  render() {
    const bloodGroups = [
      { id: 1, name: '1 dzień' },
      { id: 3, name: '3 dni' },
      { id: 7, name: '7 dni' },
      { id: 14, name: '14 dni' }
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
            <div className='blood'><img src='krew_l1.png'></img>
              <div className='blood-text'>AB Rh+</div>

            </div>
            <div className='text-area'>
              <div className='t1'>pilna potrzeba krwi</div>
              <div className='t2'>Aktualne zapotrzebowanie w regionie Poznań</div>
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
              <div className='row-not1'>
                <Switch/>
                <div className='row-not-text'>zezwól na otrzymywanie powiadomień</div>
              </div>
              <div className='row-not2'>
                <input type='checkbox'></input>
                <div className='row-not-text'>powiadomienie o nagłym zapotrzebowaniu w Twoim regionie</div>
              </div>
              <div className='row-not2'>
                <input type='checkbox'></input>
                <div className='row-not-text'>powiadomienie o ponownej możliwości oddania krwi</div>
              </div>
              <div className='row-not3'>
                <div className='row-not-text2'>otrzymuj powiadomienia nie częściej niż co</div>
                <select id="select1" value={this.state.period} onChange={this.handleSelectChange}>
                    {bloodGroups.map(item => (
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
              <div className='data-information-value'>AB Rh+</div>
              <hr></hr>
            </div>
            <div className='faculty'>
              <div className='data-information-subtitle'>Domyślna placówka RCK</div>
              <div className='data-information-value'>RCK Poznań</div>
              <hr></hr>
            </div>
            <div className='blood-date'>
              <div className='data-information-subtitle'>Data najbliższego możliwego oddania krwi pełnej</div>
              <div className='data-information-value'>22.10.2023</div>
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
            <Link to='/registration'>
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
