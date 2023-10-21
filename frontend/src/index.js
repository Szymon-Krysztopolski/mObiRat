import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Welcome from './Welcome';
import Info from './Info';
import Registration from './Registration';
import UserPanel from './UserPanel';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/info" element={<Info />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/user-panel" element={<UserPanel />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
