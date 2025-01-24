// import React, { Component } from 'react';

// class Practice extends Component {
//     state = { count: 0 };

//     render() {
//         const { count } = this.state;
//         return (
//             <>
//                 <div>{count}</div>
//                 <br />
//                 <button
//                     onClick={() => {
//                         this.setState({ count: count + 2 });
//                     }}
//                 >
//                     + 2
//                 </button>
//                 <button
//                     onClick={() => {
//                         this.setState({ count: count - 1 });
//                     }}
//                 >
//                     - 1
//                 </button>
//             </>
//         );
//     }
// }

// export default Practice;

import React, { useState } from 'react';

export const Practice = () => {
    const [count, setCount] = useState(0);
    const increase = () => {
        setCount(count + 1);
    };
    const decrease = () => {
        setCount(count - 2);
    };
    return (
        <>
            <div>{count}</div>
            <button onClick={increase}>increase</button>
            <button onClick={decrease}>decrease</button>
        </>
    );
};
