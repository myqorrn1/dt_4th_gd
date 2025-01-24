import React, { useState } from 'react';

export const Practice = () => {
    const [inputName, setInputName] = useState('');
    const [inputEmail, setInputEmail] = useState('');
    const [user, setUser] = useState([{ name: '', email: '' }]);

    const Add = () => {
        const newUser = user.concat({
            name: inputName,
            email: inputEmail,
        });
        setUser(newUser);
        setInputName('');
        setInputEmail('');
    };
    return (
        <>
            <input
                type="text"
                placeholder="이름"
                value={inputName}
                onChange={(e) => {
                    setInputName(e.target.value);
                }}
            />
            <input
                type="text"
                placeholder="이메일"
                value={inputEmail}
                onChange={(e) => {
                    setInputEmail(e.target.value);
                }}
                onKeyDown={(e) => {
                    if (e.nativeEvent.isComposing) return;
                    if (e.key === 'Enter') {
                        Add(e.target.value);
                    }
                }}
            />
            <button onClick={Add}>등록</button>
            <h1>
                {user.map((value) => {
                    return (
                        <>
                            <li>
                                {value.name} {value.email}
                            </li>
                        </>
                    );
                })}
            </h1>
        </>
    );
};
