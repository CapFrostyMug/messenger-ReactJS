import './App.css';
import React, {useState} from 'react';
import {MessageList} from "./components/MessageList";
import {MessageForm} from "./components/MessageForm";
import {useBotsAnswer} from "./hooks/useBotsAnswer";
import {ChatList} from "./components/ChatList";
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {Divider, Paper} from "@material-ui/core";

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
}));

function App() {

    const classes = useStyles();
    const [state, setState] = useState([]);
    const handleClick = (...item) => {
        setState((state) => {
            return [
                ...state,
                ...item,
            ]
        })
    };

    useBotsAnswer(state, handleClick);

    return (
        <div className={classes.root}>
            <Grid container spacing={1}>
                <Grid item xs={4}>
                    <Paper className={classes.paper}><ChatList/></Paper>
                </Grid>
                <Grid item xs={8}>
                    <Paper className={classes.paper}>
                        <MessageList messagesArr={[...state]}/>
                        <Divider/>
                        <MessageForm onSubmit={handleClick}/>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
};

export default App;