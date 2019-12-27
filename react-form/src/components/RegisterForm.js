import React from 'react';
import MaterialUIForm from 'react-material-ui-form';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import BasicNav from './BasicNav';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        width: 200,
        margin: '0 auto'
    },
    input: {
        marginTop: 15,
    },
    loginBtn: {
        marginTop: 35
    },
  }));

  const RegisterForm = (props) => {

    const classes = useStyles();

    const chefDirect = event => {
        event.preventDefault();
        props.history.push('/dashboard');
    };
    
    return (
        <div className="form">
            <BasicNav/>
            <h1>Register</h1>
            <MaterialUIForm className={classes.root}>
                <TextField
                    required
                    id="outlined-name-input"
                    label="First Name"
                    type="text"
                    variant="filled"
                    className={classes.input}
                />
                 <TextField
                    required
                    id="outlined-name-input"
                    label="Last Name"
                    type="text"
                    variant="filled"
                    className={classes.input}
                />
                <TextField
                    required
                    id="outlined-location-input"
                    label="Location"
                    type="text"
                    variant="filled"
                    className={classes.input}
                />
                <TextField
                    id="outlined-info-input"
                    label="Bio"
                    type="text"
                    variant="filled"
                    className={classes.input}
                />
                <Button onClick={chefDirect} variant="contained" color="primary" className={classes.loginBtn}>
                    Register
                </Button>
                <Typography>
                    <p>Already have an account? <Link to="/login">Login</Link></p>
                </Typography>
            </MaterialUIForm>
        </div>
    )
}

export default RegisterForm;