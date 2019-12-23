import React from 'react';
import './App.css';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { Route } from 'react-router-dom';
import Splash from './components/Splash';

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Kalam'
    ]
  }
});

function App() {
 
  return (
    <div className="App">
      <ThemeProvider theme={theme}>     
        <Route exact path="/" component={Splash}/>
        <Route path="/login" component={LoginForm} />
        <Route path="/register" component={RegisterForm} />
      </ThemeProvider>
    </div>
  );
}

export default App;
