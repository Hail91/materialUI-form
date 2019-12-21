import React from 'react';
import './App.css';
import BasicForm from './components/BasicForm';
import BasicNav from './components/BasicNav';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

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
        <BasicNav/>
        <BasicForm />
      </ThemeProvider>
    </div>
  );
}

export default App;
