import './JournalForm.css';
import Button from '../Button/Button';
import { useState } from 'react';

function JournalForm() {
    const [inputData, SetInputData] = useState('');
    const inputChange = (event) => {
        SetInputData(event.target.value);
    };

    const AddJournalItem = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const formProps = Object.fromEntries(formData);
        console.log(formProps);

    }

    return (
        <form className='journal-form' onSubmit={AddJournalItem}>
            <input type="text" name="title" />
            <input type='date' name="date" />
            <input type="text" name="tag" value={inputData} onChange={inputChange} />
            <textarea name="post" />
            <Button text="Сохранить" />
        </form>
    );
}

export default JournalForm;