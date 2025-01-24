import Alphabet from './Alphabet';
import './App.css';
import Basic from './Basic';
import { Practice } from './Practice';

function App() {
    return (
        <div className="App">
            {/* <Basic></Basic> */}
            <hr />
            <Alphabet></Alphabet>
            <hr />
            <Practice></Practice>
        </div>
    );
}

export default App;
