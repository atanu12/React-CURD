import React from 'react';
import './App.css';
import SideMenu from '../components/SideMenu';
import Header from '../components/Header'
import { CssBaseline, makeStyles } from '@material-ui/core';
import Employees from '../pages/Employees/Employees';

// styles

const useStyles = makeStyles({
  appMain: {
    paddingLeft: '50px',
    width:'100%'
  }
})


function App() {

  const classes = useStyles();
  return (
    <>
      <SideMenu />
      <div className={classes.appMain}>
        <Header />
        <Employees/>
      
      </div>
    <CssBaseline/>
    </>
  );
}

export default App;
