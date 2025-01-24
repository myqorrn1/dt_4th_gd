import './App.css';
import { ThemeMiddle } from './components/ThemeMiddle';
import { ThemeProvider } from './components/ThemeProvider';
import UseCallbackEx from './components/UseCallbackEx';
import UseCallbackEx2 from './components/UseCallbackEx2';
import UseMemoEx from './components/UseMemoEx';
import UseReducerEx from './components/UseReducerEx';
import useTitle from './hooks/useTitle';
import Faq from './components/Faq';
import Form from './components/react-hook-form/Form';
import Prac from './components/react-hook-form/Prac';

function App() {
    useTitle('React Hooks 학습중!');
    return (
        <div className="App">
            {/* <UseMemoEx></UseMemoEx> */}
            {/* <UseCallbackEx></UseCallbackEx> */}
            {/* <UseCallbackEx2 postId={9}></UseCallbackEx2> */}
            {/* <UseReducerEx></UseReducerEx> */}
            {/* <ThemeProvider>
                <ThemeMiddle></ThemeMiddle>
            </ThemeProvider> */}
            {/* <Faq></Faq> */}
            <Form></Form>
            <Prac></Prac>
        </div>
    );
}

export default App;
