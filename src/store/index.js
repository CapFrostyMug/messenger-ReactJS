import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {profileReducer} from "./profile";
import {chatListReducer} from './chatList';
import {messageListReducer} from "./messageList";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    chatList: chatListReducer,
    messageList: messageListReducer,
    profile: profileReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
);
