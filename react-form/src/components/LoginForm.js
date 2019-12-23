import React from 'react';
import MaterialUIForm from 'react-material-ui-form';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import BasicNav from './BasicNav';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        width: 200,
        margin: '0 auto'
    },
    input: {
        marginTop: 30,
    },
    loginBtn: {
        marginTop: 25
    },
  }));

  const LoginForm = (props) => {

    const classes = useStyles();

    const toRegister = event => {
        event.preventDefault();
        props.history.push('/register');
    };
    
    // const [user, setUser] = useState({
    //     name: userName,
    //     password: pass
    // });
    
    return (
        <div className="form">
            <BasicNav/>
            <h1>Get Cooking!</h1>
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
                    Login
                </Button>
                <Button onClick={toRegister} variant="contained" color="primary" className={classes.loginBtn}>
                    Register
                </Button>
            </MaterialUIForm>
        </div>
    )
}

export default LoginForm;
