import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profile";
import {chatListReducer} from './chatList';
import {messageListReducer} from "./messageList";

const rootReducer = combineReducers({
    chatList: chatListReducer,
    messageList: messageListReducer,
    profile: profileReducer,
});

export const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
