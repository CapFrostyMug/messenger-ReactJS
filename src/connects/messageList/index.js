import {connect} from "react-redux";
import {createAddMessage, messagesSelectors} from "../../store/messageList";

const mapStateToProps = (state, {chatId}) => ({
    messages: messagesSelectors.getMessageListDataId(state, chatId),
});

/*const mapDispatchToProps = (dispatch) => ({
    addMessages: (chatId, message) => dispatch(createAddMessage(chatId, message)),
});*/

export const messagesConnect = connect(mapStateToProps, /*mapDispatchToProps*/);
