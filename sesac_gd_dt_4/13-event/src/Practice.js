// import React, { Component } from 'react';

// class Practice extends Component {
//     state = { text: 'Hello World!' };
//     render() {
//         return (
//             <>
//                 <h1>{this.state.text}</h1>
//                 <button
//                     onClick={() => {
//                         this.setState({ text: 'Goodbye World!' });
//                     }}
//                 >
//                     button
//                 </button>
//             </>
//         );
//     }
// }

// export default Practice;

// import React, { useState } from 'react';

// export const Practice = () => {
//     const [text, setText] = useState('검정색 글씨');
//     const [color, setColor] = useState('black');
//     const Red = () => {
//         setText('빨간색 글씨');
//         setColor('red');
//     };
//     const Blue = () => {
//         setText('파란색 글씨');
//         setColor('blue');
//     };

//     return (
//         <>
//             <div>Practice</div>
//             <h1 style={{ color: color }}>{text}</h1>
//             <button onClick={Red}>빨간색</button>
//             <button onClick={Blue}>파란색</button>
//         </>
//     );
// };

// import React, { use, useState } from 'react';

// export const Practice = () => {
//     const [text, setText] = useState('안녕하세요');
//     const [button, setButton] = useState('사라져라');
//     const ChangeButton = () => {
//         setText('');
//         setButton('보여라');
//         if (button == '보여라') {
//             setText('안녕하세요');
//             setButton('사라져라')
//         }
//     };
//     return (
//         <>
//             <button onClick={ChangeButton}>{button}</button>
//             <h1>{text}</h1>
//         </>
//     );
// };

/* 과일 이미지 바꾸기 실습 */
import React, { useState } from 'react';

// 상태 관리를 따로따로 하는 방법.
export function Practice() {
    const [fruit, setFruit] = useState('peach.png');
    const [bgc, setBgc] = useState('red');
    const [color, setColor] = useState('black');
    const [text, setText] = useState('');

    const fruitChange = (e) => {
        setFruit(e.target.value);
    };

    const bgcChange = (e) => {
        setBgc(e.target.value);
    };

    function Typing(e) {
        setText(e.target.value);
    }

    const colorChange = (e) => {
        setColor(e.target.value);
    };
    return (
        <div>
            과일:
            <select onChange={fruitChange}>
                <option value="peach.png">복숭아</option>
                <option value="apple.png">사과</option>
                <option value="banana.png">바나나</option>
            </select>
            배경색:
            <select onChange={bgcChange}>
                <option value="red">빨강</option>
                <option value="yellow">노랑</option>
                <option value="blue">파랑</option>
            </select>
            글자색:
            <select onChange={colorChange}>
                <option value="black">검정</option>
                <option value="red">빨강</option>
                <option value="yellow">노랑</option>
            </select>
            <div>
                내용: <input type="text" onChange={Typing} />
            </div>
            <div>
                <img src={fruit} alt="" width={100} height={100} />
            </div>
            <div style={{ backgroundColor: bgc, color: color }}>{text}</div>
        </div>
    );
}

