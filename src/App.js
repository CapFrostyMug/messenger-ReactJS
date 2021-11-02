import React, {useState} from 'react';
import {Route, Switch} from "react-router-dom";
import {MessageList} from "./components/MessageList";
import {MessageForm} from "./components/MessageForm";
import {ChatList} from "./components/ChatList";
import {Header} from "./components/Header";
import {useBotsAnswer} from "./hooks/useBotsAnswer";
import {ChatListPage} from "./pages/ChatListPage";
import {ProfilePage} from "./pages/ProfilePage";
import {HomePage} from "./pages/HomePage";
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {Divider, Paper} from "@material-ui/core";
import {nanoid} from "nanoid";
import faker from "faker";
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

    const [chats, setChats] = useState([
        {id: nanoid(3), title: 'Steve', content: faker.lorem.words(5),},
        {id: nanoid(3), title: 'Tim', content: faker.lorem.words(7),},
        {id: nanoid(3), title: 'Craig', content: faker.lorem.words(10),},
    ]);

    const handleAddChat = (...item) => {
        setChats((chats) => {
            return [
                ...chats,
                ...item,
            ]
        })
    };

    const handleRemoveChat = (id) => {
        const newList = chats.filter((item) => item.id !== id);
        setChats(newList);
    }

    /*const [state, setState] = useState([]);
    const handleClick = (...item) => {
        setState((state) => {
            return [
                ...state,
                ...item,
            ]
        })
    };*/

    /*useBotsAnswer(state, handleClick);*/

    return (
        <Provider store={store}>
            <div className={classes.root}>
                <Grid container spacing={1}>
                    <Grid item xs={12}>
                        <Paper className={classes.header}><Header/></Paper>
                    </Grid>
                </Grid>
                <Switch>
                    <Route path='/chats'>
                        <ChatListPage chats={chats}
                                      addChat={handleAddChat}
                                      removeChat={handleRemoveChat}
                        />
                    </Route>
                    <Route path='/profile'>
                        <ProfilePage/>
                    </Route>
                    <Route path='/'>
                        <HomePage/>
                    </Route>
                </Switch>
                {/*<Grid container spacing={1}>
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
            </Grid>*/}
            </div>
        </Provider>
    );
};

export default App;
