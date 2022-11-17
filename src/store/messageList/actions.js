import {nanoid} from "nanoid";

export const ADD_MESSAGE = "ADD_MESSAGE";

/**
 * @param {object} message
 * @param {string} message.id
 * @param {string} message.content
 * @param {string} message.chatId
 */

export const createAddMessage = (chatId, message) => ({
    type: ADD_MESSAGE,
    payload: {
        chatId,
        message,
    },
});

export const addMessageWithThunk = (chatId, message) => (dispatch) => {
    dispatch(createAddMessage(chatId, message));
    if (message.author !== 'Bot') {
        const botMessage = {
            chatId,
            id: nanoid(3),
            content: 'Hi! I\'m Bot :)',
            author: 'Bot',
        }
        setTimeout(() => dispatch(createAddMessage(chatId, botMessage)), 1500);
    }
}
