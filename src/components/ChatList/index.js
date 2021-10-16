import React, {useState} from 'react';
import {ChatItem} from "../ChatItem";
import {makeStyles} from "@material-ui/core/styles";
import {Divider, List} from "@material-ui/core";
import {nanoid} from "nanoid";
import faker from 'faker';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
        padding: 0,
    },
}));

export const ChatList = ({chats, removeChat}) => {

    const classes = useStyles();
    /*const [chat, setChat] = useState([
        {id: nanoid(3), title: 'Steve', content: faker.lorem.words(),},
        {id: nanoid(3), title: 'Tim', content: faker.lorem.words(),},
        {id: nanoid(3), title: 'Craig', content: faker.lorem.words(),},
    ]);*/
    /*const [chat, setChat] = useState([
        {chatName: 'Steve', id: 1, date: 'Jan 9, 2014'},
        {chatName: 'Tim', id: 2, date: 'Jan 11, 2014'},
        {chatName: 'Craig', id: 3, date: 'Jan 15, 2014'},
    ]);*/

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
                    /*chat.map(item => <ChatItem chat={item.chatName} date={item.date} key={item.id}/>)*/
                }
            </List>
        </>
    );
}
