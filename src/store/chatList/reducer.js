import {ADD_CHAT, REMOVE_CHAT} from "./actions";

const initialState = {
    chats: [],
};

export const chatListReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CHAT:
            return {
                chats: [
                    ...state.chats,
                    action.payload,
                ]
            }
        case REMOVE_CHAT:
            return {
                chats: state.chats.filter(({id}) => action.payload !== id),
            }
        default: {
            return state;
        }
    }
}
