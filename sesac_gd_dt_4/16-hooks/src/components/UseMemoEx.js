import React, { useState, useMemo } from 'react';

// useMemo
// - 비용이 큰 연산(복잡한 계산이나 반복적인 연산)이 포함된 컴포넌트가 리렌더링 될때,
// - 메모이제이션으로 수행한 연산의 결과 값을 기억함으로써 불필요한 연산 최소화. (JSX도 가능)

export default function UseMemoEx() {
    const [count, setCount] = useState(0); // 재렌더링 용
    const [input, setInput] = useState(''); //

    // 임의의 큰 연산을 하는 함수 만듬!

    // [before] * useMemo 사용 안했을 때
    // 버튼을 누를 때에도, input을 입력할 때에도 연산이 이뤄짐. (calc 함수 호출)
    const calc = () => {
        let sum = 0;
        for (let i = 0; i < 1000; i++) {
            console.log('열심히 계산중...');
            sum += 1;
        } // 시간 소모적인 작업.
        return sum + count;
    };

    // [after] useMemo 적용
    // - ** count의 값이 바뀔 때에만 함수를 실행해주세요.
    // - input 상태가 바뀌면 컴포넌트는 리렌더링 되지만, calcMemo는 연산되지 않음.
    const calcMemo = useMemo(() => {
        let sumMemo = 0;
        for (let i = 0; i < 1000; i++) {
            console.log('열심히 계산중...');
            sumMemo += i;
        }
        return sumMemo + count;
    }, [count]); // ** count가 변경될 때만 계산 수행 한다는 뜻 **
    return (
        <div>
            <h1>UseMemoEx</h1>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={() => setCount(() => count + 1)}>Plus</button>
            <p>count : {count}</p>

            {/* [before] */}
            <p>calc : {calc()}</p>

            {/* [after] useMemo 적용 */}
            <p>calcMemo : {calcMemo}</p>
        </div>
    );
}
