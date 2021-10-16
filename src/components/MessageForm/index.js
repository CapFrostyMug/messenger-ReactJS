import React, {useEffect, useRef, useState} from "react";
import {useParams} from "react-router-dom";
import {Fab, Input} from "@material-ui/core";
import {Send} from "@material-ui/icons";
import {makeStyles} from "@material-ui/core/styles";
import {nanoid} from "nanoid";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
    wrap: {
        display: 'flex',
        flexDirection: 'flex-start',
        alignItems: 'center',
        marginTop: 20,
    },
    input: {
        flexGrow: 1,
        marginLeft: 10,
        paddingLeft: 5,
    },
    fab: {
        margin: '0 10px 0 30px',
    },
}));

const ariaLabel = {'aria-label': 'description'};

export const MessageForm = ({onSubmit}) => {

    /*const {chatId} = useParams();*/

    const classes = useStyles();
    const [message, setMessage] = useState({
        text: '',
    });

    const inputRef = useRef(null);
    useEffect(() => {
        inputRef.current?.focus();
    }, [message]);

    const handleChange = (event) => {
        setMessage({
            text: event.target.value,
            author: 'user',
            id: nanoid(3),
            /*chatId: chatId,*/
        });
    };

    const handleClick = () => {
        if (message.text !== '') {
            onSubmit(message);
            setMessage({text: ''});
        }
    }

    return (
        <div className={classes.wrap}>
            <Input className={classes.input}
                   placeholder="Текст..."
                   inputProps={ariaLabel}
                   type="text"
                   value={message.text}
                   onChange={handleChange}
                   inputRef={inputRef}
            />
            <Fab className={classes.fab}
                 variant="circular"
                 color="primary"
                 size="small"
                /*onClick={handleClick}*/
            >
                <Send/>
            </Fab>
        </div>
    );
};

/*
MessageForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}*/
