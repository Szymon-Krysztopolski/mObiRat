import './App.css';
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

export class App extends React.Component {
    componentDidMount() {
        const fetchData = () => {
            axios.get('http://127.0.0.1:8080/api/get-notification')
                .then(response => {
                    response.data && toast.success(response.data, {
                        position: toast.POSITION.TOP_CENTER
                    });
                })
                .catch(error => {
                    console.error('Error with GET', error);
                });
        }

        this.interval = setInterval(fetchData, 5000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <div className="App">
                <div id='rectangle'>
                    <div style={{position: "absolute"}}>
                        <ToastContainer style={{position: "relative", marginLeft:"25px"}} />
                    </div>
                    <img src="Landing_1.png" id='logo'></img>
                    <div id='object-container'>
                        <Link to='/welcome'>
                        <div id='object-tile'>
                            <img src="tile_krew.png" id='icon'></img>
                            <p id='object-text'>mDawca</p>
                        </div>
                        </Link>
                        <div id='object-tile'>
                            <img src="tile-bus.png" id='icon'></img>
                            <p id='object-text'>mPociąg</p>
                        </div>
                        <div id='object-tile'>
                            <img src="tile-srodowisko.png" id='icon'></img>
                            <p id='object-text'>mLas</p>
                        </div>
                    </div>
                    <img src="Landing_2.png" id='logo'></img>
                    
                </div>
            </div>
        );
    }
}

export default App;
