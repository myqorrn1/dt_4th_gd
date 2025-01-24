import './App.css';
import ClassComponent from './ClassComponent';
import { FuncComponent } from './FuncComponent';
import { Practice } from './Practice';
import Practice2 from './Practice2';
import SyntheticEvent from './SyntheticEvent';

function App() {
    return (
        <div className="App">
            <SyntheticEvent></SyntheticEvent>
            <hr />
            <FuncComponent></FuncComponent>
            <hr />
            <ClassComponent></ClassComponent>
            <hr />
            <Practice></Practice>
            <Practice2></Practice2>
        </div>
    );
}

export default App;
