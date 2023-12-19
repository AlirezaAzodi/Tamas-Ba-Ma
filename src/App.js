import React, { useState } from 'react';
import NameBox from './NameBox';
import EmailBox from './EmailBox';
import './App.css';

function App() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [text, setText] = useState('');

    const handleReset = () => {
        setName('');
        setEmail('');
        setText('');
    };

    const handleSubmit = () => {
        // اینجا می‌توانید دستورات مربوط به ارسال اطلاعات را قرار دهید
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Text:', text);
    };

    return (
        <div>
            <NameBox
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <EmailBox
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <div className='container'>
                <label htmlFor="text">Text:</label>
                <textarea
                    id="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
            </div>
            <div className='container'>
                <button onClick={handleReset}>Reset</button>
                <button onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    );
}

export default App;