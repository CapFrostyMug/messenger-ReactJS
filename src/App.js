import './App.css';
import React, {useState} from 'react';
import {MessageList} from "./components/MessageList";
import {MessageForm} from "./components/MessageForm";
import {useBotsAnswer} from "./hooks/useBotsAnswer";

function App() {

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
        <>
            <MessageList messagesArr={[...state]}/>
            <MessageForm onSubmit={handleClick}/>
        </>
    );
};

export default App;