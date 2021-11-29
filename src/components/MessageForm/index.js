import React, {useEffect, useRef, useState} from "react";
import {Fab, Input} from "@material-ui/core";
import {Send} from "@material-ui/icons";
import {makeStyles} from "@material-ui/core/styles";
import {nanoid} from "nanoid";
import {messagesConnect} from "../../connects/messageList";
import {useSimpleForm} from "../../hooks/useSimpleForm";
import {useDispatch, useSelector} from "react-redux";
import {addMessageWithThunk} from "../../store/messageList";

const useStyles = makeStyles(() => ({
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

export const MessageFormRender = ({chatId, addMessages}) => {

    const classes = useStyles();
    const {setFieldValue, getFieldValue, resetForm} = useSimpleForm({});
    const dispatch = useDispatch();

    const handleClick = (event) => {
        event.preventDefault();
        const message = {
            chatId,
            id: nanoid(3),
            content: getFieldValue('content'),
            author: 'User',
        };
        dispatch(addMessageWithThunk(chatId, message));
        resetForm();
    }

    const inputRef = useRef(null);
    useEffect(() => {
        inputRef.current?.focus();
    },);

    return (
        <div className={classes.wrap}>
            <Input className={classes.input}
                   placeholder="Текст..."
                   inputProps={ariaLabel}
                   type="text"
                   value={getFieldValue('content')}
                   inputRef={inputRef}
                   onChange={(event) => {
                       setFieldValue('content', event.target.value);
                   }}
            />
            <Fab className={classes.fab}
                 variant="circular"
                 color="primary"
                 size="small"
                 onClick={handleClick}
            >
                <Send/>
            </Fab>
        </div>
    );
};

export const MessageForm = messagesConnect(MessageFormRender);
