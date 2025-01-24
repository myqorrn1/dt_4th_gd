import './App.css';
import ClassComponent from './ClassComponent';
import FunctionComponent from './FunctionComponent';
import Practice from './Practice';
import Button from './Button';
import MultiChild from './MultiChild';

function App() {
    return (
        <div className="App">
            <ClassComponent></ClassComponent>
            <hr />
            <ClassComponent place="새싹 강동캠퍼스"></ClassComponent>
            <hr />
            <FunctionComponent></FunctionComponent>
            <hr />
            <FunctionComponent name="john" age={30}></FunctionComponent>
            {/* JSX에서 JS 표현식을 평가하는 용도로 사용하는게 {중괄호} */}
            {/* {}로 감싸야 리액트가 이것을 JS 숫자 로 인식함. */}
            <hr />
            {/* children - 단일 자식 요소 전달 */}
            <Button link="https:www.google.com">Google</Button>
            <Button></Button>
            <hr />
            {/* children - 다중 자식 요소 전달 */}
            <MultiChild>
                <b>다중자식</b>
                <p>요소전달</p>
                <div>체험해보기</div>
            </MultiChild>
            <hr />
            <Practice
                text="App 컴포넌트에서 넘겨준 text props 입니다."
                valid="콘솔 띄우기 성공!"
            ></Practice>
        </div>
    );
}

export default App;
