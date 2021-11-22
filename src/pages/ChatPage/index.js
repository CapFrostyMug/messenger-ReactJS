import React from "react";
import {Redirect, useParams} from "react-router-dom";
import {MessageList} from "../../components/MessageList";
import {MessageForm} from "../../components/MessageForm";
import {Paper} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {useSelector} from "react-redux";

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export const ChatPage = () => {

    const classes = useStyles();
    const {chatId} = useParams();

    const currentChat = useSelector(state => state.chatList.chats)?.find(({id}) => id === chatId);
    if (!currentChat) {
        return <Redirect to='/chats'/>
    }

    return (
        <>
            <Paper className={classes.paper}>
                <MessageList chatId={chatId}/>
                <MessageForm chatId={chatId}/>
            </Paper>
        </>
    );
}
