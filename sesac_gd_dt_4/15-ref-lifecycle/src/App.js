import './App.css';
import RefSample1 from './RefSample1';
import RefSample2 from './RefSample2';
import RefSample3 from './RefSample3';
import RefSample4 from './RefSample4';
import Practice from './Practice';
import LifeCycleClass from './LifeCycleClass';
import LifeCycleFunc from './LifeCycleFunc';
function App() {
    return (
        <div className="App">
            <RefSample1></RefSample1>
            <hr />
            <RefSample2></RefSample2>
            <hr />
            <RefSample3></RefSample3>
            <hr />
            <RefSample4></RefSample4>
            <hr />
            <Practice></Practice>
            <hr />
            <LifeCycleClass></LifeCycleClass>
            <hr />
            <LifeCycleFunc></LifeCycleFunc>
        </div>
    );
}

export default App;
