import './App.css';
import React from 'react';

export class App extends React.Component{
  render(){
    return (
      <div className="App">
        <div id='rectangle'>
          <div id='jk'></div>
          <div id='dokumenty-wszystkie'>
            <div id='dokumenty'>Dokumenty</div>
            <div id='dodaj'>Dodaj</div>
            <div id='wszystkie'>Wszystkie</div>
          </div>
          <div id='dynamic-panel'>
            <img src="normal_u25.svg" id='image'></img>
          </div>
          <div id='usługi-wszystkie'>
            <div id='punkty karne'>
              <div id='group'>

              </div>
              <div id='punkty-karne2'>
                Punkty karne
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
}

export default App;
