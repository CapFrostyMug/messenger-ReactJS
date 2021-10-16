import React from "react";
import {Redirect, useParams} from "react-router-dom";
import {Message} from "../Message";
import {makeStyles} from "@material-ui/core/styles";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
    wrap: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        minHeight: '84vh',
    },
}));

export const MessageList = ({chats}) => {

    const classes = useStyles();

    const {chatId} = useParams();
    const currentChat = chats?.find(({id}) => id === chatId);
    if (!currentChat) {
        return <Redirect to='/chats'/>
    }

    return (
        <div className={classes.wrap}>
            <Message text={currentChat.content} key={chats.id}/>
            {/*{
                chat.map(item => <Message text={currentChat.content} key={item.id}/>)
            }*/}
        </div>
    );
};

/*
export const MessageList = ({messagesArr}) => {

    const classes = useStyles();

    return (
        <div className={classes.wrap}>
            {
                messagesArr.map(({text, id}) => <Message text={text} key={id}/>)
            }
        </div>
    );
};

MessageList.propTypes = {
    messagesArr: PropTypes.array,
}*/
