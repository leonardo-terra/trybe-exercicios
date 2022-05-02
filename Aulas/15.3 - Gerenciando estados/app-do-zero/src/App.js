import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';

import AppRoutes from './routes';

class App extends React.Component{
  render(){
    return(
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    )
  }
}

export default App;
x