import React from 'react';
import MaterialUIForm from 'react-material-ui-form';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        width: 200,
        margin: '0 auto'
    },
    input: {
        marginTop: 50,
    },
    loginBtn: {
        marginTop: 25
    },
  }));

  const RegisterForm = () => {

    const classes = useStyles();
    
    return (
        <div className="form">
            <h1>Register</h1>
            <MaterialUIForm className={classes.root}>
                <TextField
                    required
                    id="outlined-password-input"
                    label="User Name"
                    type="text"
                    variant="filled"
                    className={classes.input}
                />
                <TextField
                    required
                    id="outlined-password-input"
                    label="Password"
                    type="password"
                    variant="filled"
                    className={classes.input}
                />
                <Button variant="contained" color="primary" className={classes.loginBtn}>
                    Register
                </Button>
            </MaterialUIForm>
        </div>
    )
}

export default RegisterForm;