import './App.css';
import CounterClass from './CounterClass';
import { CounterFunction } from './CounterFunction';
import { SayFunction } from './SayFunction';
import { Practice } from './Practice';
function App() {
    return (
        <div className="App">
            <CounterClass></CounterClass>
            <hr />
            <CounterFunction value={'Plus 1'}></CounterFunction>
            <hr />
            <SayFunction></SayFunction>
            <hr />
            <Practice></Practice>
        </div>
    );
}

export default App;
