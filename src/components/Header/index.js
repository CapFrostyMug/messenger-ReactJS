import React from "react";
import {Link as RouterLink} from 'react-router-dom';
import {makeStyles} from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';
import {nanoid} from "nanoid";

const useStyles = makeStyles((theme) => ({
    toolbarSecondary: {
        justifyContent: 'space-between',
        overflowX: 'auto',
    },
    toolbarLink: {
        padding: theme.spacing(2),
        flexShrink: 0,
        color: '#FFFFFF',
        fontSize: 14,
        marginRight: 50,
    },
}));

export const Header = () => {

    const classes = useStyles();

    return (
        <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
            <Link
                component={RouterLink}
                color="inherit"
                noWrap
                key={nanoid(3)}
                variant="body2"
                to="/"
                className={classes.toolbarLink}
            >
                HOME
            </Link>
            <Link
                component={RouterLink}
                color="inherit"
                noWrap
                key={nanoid(3)}
                variant="body2"
                to="/chats"
                className={classes.toolbarLink}
            >
                MESSENGER
            </Link>
            <Link
                component={RouterLink}
                color="inherit"
                noWrap
                key={nanoid(3)}
                variant="body2"
                to="/profile"
                className={classes.toolbarLink}
            >
                PROFILE
            </Link>
        </Toolbar>
    );
}
