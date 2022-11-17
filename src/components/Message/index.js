import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
    root: {
        margin: '10px 0',
        padding: 15,
        color: '#FFFFFF',
        background: 'linear-gradient(to bottom right, #1588FD, #1B8DFD)',
        borderRadius: 25,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    paragraph: {
        margin: 0,
    }
}));

export const Message = ({text}) => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <p className={classes.paragraph}>{text}</p>
        </div>
    );
};

Message.propTypes = {
    text: PropTypes.string.isRequired,
}
