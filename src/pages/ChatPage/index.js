import React from "react";
import {Redirect, useParams} from "react-router-dom";
import {MessageList} from "../../components/MessageList";
import {MessageForm} from "../../components/MessageForm";
import {Paper} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {nanoid} from "nanoid";
import faker from "faker";

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export const ChatPage = ({chats}) => {

    /*const {chatId} = useParams();

    const currentChat = chat?.find(({id}) => id === chatId);

    if (!currentChat) {
        return <Redirect to='/chats'/>
    }*/

    const classes = useStyles();

    return (
        <>
            <Paper className={classes.paper}>
                <MessageList chats={chats}/>
                <MessageForm/>
            </Paper>
            {/*<h1>{currentChat.title}</h1>
            <h2>{currentChat.content}</h2>*/}
        </>
    );
}
