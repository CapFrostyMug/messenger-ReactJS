import React from "react";
import {Message} from "../Message";
import {makeStyles} from "@material-ui/core/styles";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
    wrap: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        minHeight: '90vh',
    },
}));

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
}