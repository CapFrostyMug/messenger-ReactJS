import React from "react";
import {Message} from "../Message";

export const MessageList = ({messagesArr}) => {
    return (
        <>
            {
                messagesArr.map(({text}) => <Message text={text}/>)
            }
        </>
    );
};