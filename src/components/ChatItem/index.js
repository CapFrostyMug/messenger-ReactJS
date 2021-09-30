import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {Avatar, Divider, ListItem, ListItemAvatar, ListItemText} from "@material-ui/core";
import ImageIcon from '@material-ui/icons/Image';
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({}));

export const ChatItem = ({chat, date}) => {

    const classes = useStyles();

    return (
        <>
            <ListItem button>
                <ListItemAvatar>
                    <Avatar>
                        <ImageIcon/>
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary={chat} secondary={date}/>
            </ListItem>
            <Divider/>
        </>
    );
}

ChatItem.propTypes = {
    chat: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
}