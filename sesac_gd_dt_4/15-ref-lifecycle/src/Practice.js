import React, { useRef } from 'react';

export default function Practice() {
    const inputRef = useRef();
    const inputRef2 = useRef();
    const Focus = () => {
        if (inputRef.current.value == '') {
            inputRef.current.focus();
        } else if (inputRef2.current.value == '') {
            inputRef2.current.focus();
        }
    };

    return (
        <>
            작성자:
            <input type="text" ref={inputRef} />
            제목:
            <input type="text" ref={inputRef2} />
            <button onClick={Focus}>작성</button>
            {/* <div
                style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                <table>
                    <tr>
                        <th>제목</th>
                        <th>작성자</th>
                    </tr>
                </table>
            </div> */}
        </>
    );
}
