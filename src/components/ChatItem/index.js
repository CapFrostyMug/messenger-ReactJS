import React from 'react';
import {Link as RouterLink, Route} from 'react-router-dom';
import {Avatar, Divider, ListItem, ListItemAvatar, ListItemText} from "@material-ui/core";
import ImageIcon from '@material-ui/icons/Image';
import {Button} from '@mui/material';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@mui/material/IconButton';
import PropTypes from "prop-types";

export const ChatItem = ({title, id, removeChat}) => {

    return (
        <>
            <ListItem button
                      to={`/chats/${id}`}
                      component={RouterLink}>
                <ListItemAvatar>
                    <Avatar>
                        <ImageIcon/>
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary={title}/>
                <IconButton
                    onClick={() => removeChat(id)}
                    aria-label="delete"
                    size="small">
                    <DeleteIcon fontSize="small"/>
                </IconButton>
            </ListItem>
            <Divider/>
        </>
    );
}

/*ChatItem.propTypes = {
    chat: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
}*/
