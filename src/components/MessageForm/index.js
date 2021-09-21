import React, {useState} from "react";

export const MessageForm = ({onSubmit}) => {

    const [message, setMessage] = useState({
        text: '',
        author: 'user',
    });

    const handleChange = (event) => {
        setMessage({
            text: event.target.value,
            author: 'user',
        });
    };

    return (
        <>
            <input type="text" value={message.text} onChange={handleChange}/>
            <button onClick={() => {
                onSubmit(message);
                setMessage({text: ''});
            }}>Отправить
            </button>
        </>
    );
};