function Practice() {
    const name = '아토';
    const animal = '강아지';
    let a = 5;
    let b = 3;

    return (
        <>
            <h2>
                제 반려 동물의 이름은 {name}입니다.
                <br />
                {name}은 {animal}입니다.
            </h2>
            {3 + 5 == 8 ? <h2>정답입니다</h2> : <h2>오답입니다</h2>}
            {a > b && 'a가 b보다 큽니다'}
            <div style={{}}>
                <h1
                    style={{
                        backgroundColor: 'coral',
                        textAlign: 'center',
                        color: 'red',
                    }}
                >
                    Hello World
                </h1>
                <div style={{ textAlign: 'center' }}>
                    <div style={{ padding: '10px' }}>
                        {' '}
                        아이디:
                        <input />
                    </div>
                    <div>
                        비밀번호:
                        <input />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Practice;
