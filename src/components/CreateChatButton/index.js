import {Button} from "@material-ui/core";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {nanoid} from "nanoid";
import faker from "faker";
import {chatsConnect} from "../../connects/chatList";

const useStyles = makeStyles((theme) => ({
    buttonWrap: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginBottom: 12,
    }
}));

export const CreateChatButtonRender = ({addChat}) => {

    const classes = useStyles();

    const handleSubmit = (event) => {
        event.preventDefault();
        const chat = {
            id: nanoid(3),
            title: faker.name.firstName(),
        }
        addChat(chat);
    }

    return (
        <>
            <div className={classes.buttonWrap}>
                <Button
                    variant="contained"
                    color="primary"
                    size="medium"
                    onClick={handleSubmit}
                >
                    + Add Chat
                </Button>
            </div>
        </>
    );
}

export const CreateChatButton = chatsConnect(CreateChatButtonRender);
