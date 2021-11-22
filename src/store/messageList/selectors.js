const getMessageList = (state) => state.messageList.messages || {};
const getMessageListDataId = (state, chatId) => getMessageList(state)[chatId];

export const messagesSelectors = {
    getMessageList,
    getMessageListDataId,
}
