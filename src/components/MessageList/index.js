import React from "react";
import {Message} from "../Message";
import {makeStyles} from "@material-ui/core/styles";
import {messagesConnect} from "../../connects/messageList";

const useStyles = makeStyles(() => ({
    wrap: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        minHeight: '84vh',
    },
}));

export const MessageListRender = ({messages}) => {

    const classes = useStyles();

    return (
        <div className={classes.wrap}>
            {
                messages?.map(({message}) => <Message text={message.content} key={message.id}/>)
            }
        </div>
    );
};

export const MessageList = messagesConnect(MessageListRender);
