const getChatList = (state) => state.chatList.chats || [];

export const chatsSelectors = {
    getChatList,
}
