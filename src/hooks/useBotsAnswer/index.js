import React, {useEffect} from 'react';

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
                })
            }, 1500)
        }
    }, [state]);
}