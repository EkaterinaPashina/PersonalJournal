import './Button.css';
import { useState } from 'react';

function Button({ text }) {
    // const [text, setText] = useState('Сохранить');

    // const clicked = () => {
    //     setText('Закрыть');
    // };

    return (
        <button className='button accent'>{text}</button>
    );
}

export default Button;