import React from 'react';
import {Link as RouterLink} from 'react-router-dom';
import {Avatar, Divider, ListItem, ListItemAvatar, ListItemText} from "@material-ui/core";
import ImageIcon from '@material-ui/icons/Image';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@mui/material/IconButton';

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
                    onClick={(event) => {
                        event.preventDefault();
                        event.stopPropagation();
                        removeChat(id);
                    }}
                    aria-label="delete"
                    size="small">
                    <DeleteIcon fontSize="small"/>
                </IconButton>
            </ListItem>
            <Divider/>
        </>
    );
}
