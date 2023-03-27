import React from 'react';
import ReactDOM from 'react-dom/client';
import Wrapper from './hooks/Wrapper';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Wrapper>Hello world!</Wrapper>
  </React.StrictMode>
);


