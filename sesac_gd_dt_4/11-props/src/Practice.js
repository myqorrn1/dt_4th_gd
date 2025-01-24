import React, { Component } from 'react';
import image from './assets/book.png';
// class Practice extends Component {
//     render() {
//         return (
//             <>
//                 <h1 style={{ color: 'red' }}>{this.props.food}</h1>
//             </>
//         );
//     }
// }
// Practice.defaultProps = { food: '피자' };

// const Practice = ({
//     title = '나의 하루는 4시 40분에 시작된다.',
//     author = '김유진',
//     price = '13,500원',
//     type = '자기계발서',
// }) => {
//     return (
//         <div
//             style={{
//                 backgroundColor: 'yellow',
//                 width: '400px',
//                 display: 'flex',
//                 flexDirection: 'column',
//                 alignItems: 'center',
//             }}
//         >
//             <div
//                 style={{
//                     width: '300px',
//                 }}
//             >
//                 <div style={{ color: 'red', fontSize: '20px' }}>
//                     <h2>이번주 베스트 셀러</h2>
//                 </div>
//                 <img src={image} />
//                 <div
//                     style={{
//                         display: 'flex',
//                         flexDirection: 'column',
//                         alignItems: 'flex-start',
//                     }}
//                 >
//                     <div style={{ fontSize: '20px' }}>
//                         <h4>{title}</h4>
//                     </div>
//                     <div>저자: {author}</div>
//                     <div>판매가: {price}</div>
//                     <div>구분: {type}</div>
//                 </div>
//             </div>
//         </div>
//     );
// };

class Practice extends Component {
    text = '이건 기본 text props 입니다.';
    render() {
        const { text } = this.props;
        const { valid } = this.props;
        return (
            <>
                <div>{text}</div>
                <button
                    onClick={() => {
                        console.log({ valid });
                    }}
                >
                    콘솔 메세지
                </button>
            </>
        );
    }
}

export default Practice;
