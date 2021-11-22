import React from 'react';
import {ChatItem} from "../ChatItem";
import {makeStyles} from "@material-ui/core/styles";
import {Divider, List} from "@material-ui/core";
import {chatsConnect} from "../../connects/chatList";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
        padding: 0,
    },
}));

export const ChatListRender = ({chats, removeChat}) => {

    const classes = useStyles();

    return (
        <>
            <Divider/>
            <List className={classes.root}>
                {
                    chats.map(item => <ChatItem
                        title={item.title}
                        id={item.id}
                        key={item.id}
                        removeChat={removeChat}
                    />)
                }
            </List>
        </>
    );
}

export const ChatList = chatsConnect(ChatListRender);
