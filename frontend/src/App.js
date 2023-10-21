import './App.css';
import React from 'react';
// import axios from 'axios';

export class App extends React.Component {
    // componentDidMount() {
    //     const fetchData = () => {
    //         axios.get('http://127.0.0.1:8080/get-notification')
    //             .then(response => {
    //                 console.log(response.data);
    //                 // alert(response.data)
    //             })
    //             .catch(error => {
    //                 console.error('Error with GET', error);
    //             });
    //     }

    //     this.interval = setInterval(fetchData, 5000);
    // }

    // componentWillUnmount() {
    //     clearInterval(this.interval);
    // }

    render() {
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
