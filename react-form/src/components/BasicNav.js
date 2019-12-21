import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    title: {
        fontSize: 25
    }
}));

const BasicNav = () => {

    const classes = useStyles();
    
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography className={classes.title}>
                        <i class="fas fa-utensils"> Chef Portfolio</i>
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default BasicNav;
