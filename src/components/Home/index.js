import React from "react";
import {Route, Switch} from "react-router-dom";
import {HomePage} from "../../pages/HomePage";
import {CommentsPage} from "../../pages/CommentsPage";

export const Home = () => {
    return (
        <>
            <Switch>
                <Route path="/comments/:postId" component={CommentsPage}/>
                <Route path="/" component={HomePage}/>
            </Switch>
        </>
    );
};
