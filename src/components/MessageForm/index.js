import React, {useEffect, useRef} from "react";
import {Fab, Input} from "@material-ui/core";
import {Send} from "@material-ui/icons";
import {makeStyles} from "@material-ui/core/styles";
import {nanoid} from "nanoid";
import {messagesConnect} from "../../connects/messageList";
import {useSimpleForm} from "../../hooks/useSimpleForm";
import {useSelector} from "react-redux";

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

    /*const state = useSelector(state => state.messageList.messages);*/

    const handleClick = (event) => {
        event.preventDefault();
        const message = {
            chatId,
            id: nanoid(3),
            content: getFieldValue('content'),
        }
        addMessages(message);
        resetForm();
    }

    /*useEffect(() => {
        if (
            state !== ''
        ) {
            setTimeout(() => {
                addMessages({
                    chatId,
                    id: nanoid(3),
                    content: 'Hi! I\'m Bot :)',
                    author: 'Bot',
                })
            }, 5000)
        }
    }, [state]);*/

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
