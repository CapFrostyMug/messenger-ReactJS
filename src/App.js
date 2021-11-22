import React from 'react';
import {Route, Switch} from "react-router-dom";
import {Header} from "./components/Header";
import {ChatListPage} from "./pages/ChatListPage";
import {ProfilePage} from "./pages/ProfilePage";
import {HomePage} from "./pages/HomePage";
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {Paper} from "@material-ui/core";
import {Provider} from "react-redux";
import {store} from "./store";

const useStyles = makeStyles((theme) => ({
    '@global': {
        html: {
            margin: '0 auto',
            width: '99%',
        },
    },
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        display: 'flex',
        flexDirection: 'column',
    },
    header: {
        backgroundColor: '#333333',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
}));

function App() {

    const classes = useStyles();

    return (
        <Provider store={store}>
            <div className={classes.root}>
                <Grid container spacing={1}>
                    <Grid item xs={12}>
                        <Paper className={classes.header}>
                            <Header/>
                        </Paper>
                    </Grid>
                </Grid>
                <Switch>
                    <Route path='/chats'>
                        <ChatListPage/>
                    </Route>
                    <Route path='/profile'>
                        <ProfilePage/>
                    </Route>
                    <Route path='/'>
                        <HomePage/>
                    </Route>
                </Switch>
            </div>
        </Provider>
    );
};

export default App;
