import React from "react";
import classes from './message.module.css';

export const Message = ({text}) => {
    return (
        <div>
            <p className={classes.messageText}>{text}</p>
        </div>
    );
};