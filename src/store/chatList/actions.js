export const ADD_CHAT = "ADD_CHAT";
export const REMOVE_CHAT = "REMOVE_CHAT";
/**
 * @param {object} chatName
 * @param {string} chatName.id
 * @param {string} chatName.title
 * */

export const createAddChat = (chatName) => ({
    type: ADD_CHAT,
    payload: chatName,
});

export const createRemoveChat = (chatId) => ({
    type: REMOVE_CHAT,
    payload: chatId,
});
