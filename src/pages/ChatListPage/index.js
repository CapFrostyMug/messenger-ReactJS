import React, {useEffect, useState} from "react";
import {Link as RouterLink, Route} from 'react-router-dom';
import {ChatList} from "../../components/ChatList";
import {ChatPage} from "../ChatPage";
import {Button, Grid, ListItemText} from '@material-ui/core';
import {List, ListItem, Paper} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {nanoid} from "nanoid";
import faker from 'faker';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    buttonWrap: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginBottom: 12,
    }
}));

/*const createChat = () => ({
    id: nanoid(3),
    title: 'Some title',
    content: faker.lorem.words(),
})*/

export const ChatListPage = ({chats, addChat, removeChat}) => {

    const classes = useStyles();

    /*const [chats, setChats] = useState([]);

    useEffect(() => {
        const newChats = Array.from({length: 3}).map(createChat);
        setChats(newChats);
    }, []);*/

    return (
        <Grid container spacing={1}>
            <Grid item xs={4}>
                {/*<List>
                    {
                        chats.map(({title, id}) =>
                            <ListItem
                                to={`/chats/${id}`}
                                component={RouterLink}>
                                <ListItemText primary={title}/>
                            </ListItem>)
                    }
                </List>*/}
                <Paper className={classes.paper}>
                    <div className={classes.buttonWrap}>
                        <Button
                            variant="contained"
                            color="primary"
                            size="medium"
                            onClick={() => {
                                addChat({
                                    id: nanoid(3),
                                    title: faker.name.firstName(),
                                    content: faker.lorem.words(7)
                                });
                            }}>
                            + Add Chat
                        </Button>
                    </div>
                    <ChatList chats={chats} removeChat={removeChat}/>
                </Paper>
            </Grid>
            <Grid item xs={8}>
                <Route path='/chats/:chatId'>
                    <ChatPage chats={chats}/>
                    {/*<ChatPage chats={chats}/>*/}
                </Route>
            </Grid>
        </Grid>
    );
}
