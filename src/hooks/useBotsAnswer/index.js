import React, {useEffect} from 'react';
import {nanoid} from "nanoid";

export const useBotsAnswer = (state, handleClick) => {
    useEffect(() => {
        if (
            state.length !== 0 &&
            state[state.length - 1].author !== 'Bot' &&
            state[state.length - 1].text !== ''
        ) {
            setTimeout(() => {
                handleClick({
                    text: 'Hi! I\'m Bot :)',
                    author: 'Bot',
                    id: nanoid(3),
                })
            }, 1500)
        }
    }, [state]);
}
