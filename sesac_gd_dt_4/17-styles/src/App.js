import './App.css';
import BasicCss from './components/BasicCss';
import CssModuleComponents from './components/CssModuleComponents';
import SassComponent from './components/SassComponent';
import StyledComponent from './components/StyledComponent';
import Prac from './components/Prac';

function App() {
    return (
        <div className="App">
            <BasicCss></BasicCss>
            <CssModuleComponents></CssModuleComponents>
            <SassComponent></SassComponent>
            <StyledComponent></StyledComponent>
            <Prac></Prac>
        </div>
    );
}

export default App;
