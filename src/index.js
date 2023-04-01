import React from 'react';
import ReactDOM from 'react-dom/client';
import Login from './components/Login';
import Wrapper from './hooks/Wrapper';
import './index.css';
import 'antd/dist/reset.css';
import Navbar from './components/Navbar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Wrapper>
      {/* <Login/> */}
      <Navbar/>
    </Wrapper>
  </React.StrictMode>
);


