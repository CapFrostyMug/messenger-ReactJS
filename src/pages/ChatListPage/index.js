import React from "react";
import {Route} from 'react-router-dom';
import {ChatList} from "../../components/ChatList";
import {ChatPage} from "../ChatPage";
import {Grid} from '@material-ui/core';
import {Paper} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {CreateChatButton} from "../../components/CreateChatButton";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export const ChatListPage = () => {

    const classes = useStyles();

    return (
        <Grid container spacing={1}>
            <Grid item xs={4}>
                <Paper className={classes.paper}>
                    <CreateChatButton/>
                    <ChatList/>
                </Paper>
            </Grid>
            <Grid item xs={8}>
                <Route path='/chats/:chatId' component={ChatPage}/>
            </Grid>
        </Grid>
    );
}
