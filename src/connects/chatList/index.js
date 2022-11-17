import {connect} from "react-redux";
import {chatsSelectors, createAddChat, createRemoveChat} from "../../store/chatList";

const mapStateToProps = (state) => ({
    chats: chatsSelectors.getChatList(state),
});

const mapDispatchToProps = (dispatch) => ({
    addChat(chat) {
        return dispatch(createAddChat(chat));
    },
    removeChat(chatId) {
        return dispatch(createRemoveChat(chatId));
    }
});

export const chatsConnect = connect(mapStateToProps, mapDispatchToProps);
