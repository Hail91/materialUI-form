import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper'; 
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    root: {
      padding: theme.spacing(3, 2),
      width: 500, 
      height: 250,
      display: 'flex',
      flexDirection: 'column',  
      justifyContent: 'center'
    },
    containerStyle: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
  }));                    
                    


const Splash = () => {

    const classes = useStyles();
    
    return (
        <div>
            <React.Fragment>
                <CssBaseline />
                <Container className={classes.containerStyle} maxWidth="100%" style = {{backgroundColor:'rgba(0,0,0,.87)', height: '100vh', width: '100vw'}} >
                    <Paper className={classes.root}>
                        <Typography variant="h4" component="h3">
                        Welcome to Chef Portfolio!
                        </Typography>
                        <Typography component="p">
                        Are you a Chef or a Foodie?
                        </Typography>
                    </Paper>
                </Container>
            </React.Fragment>
        </div>
    );
};

export default Splash;
