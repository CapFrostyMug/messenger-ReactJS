import React from "react";
import {Link} from "react-router-dom";

export const PostItem = ({userId, id, title, body}) => {
    return (
        <>
            <h5>userId: {userId}</h5>
            <h4>{title}</h4>
            <p>{body}</p>
            <Link to={`/comments/${id}`}>Open Comments</Link>
            <br/>
            <Link to={`/post/${id}`}>Open post</Link>
        </>
    );
};
