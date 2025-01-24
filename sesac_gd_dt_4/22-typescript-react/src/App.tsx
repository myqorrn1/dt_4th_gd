import React from 'react';
import First from './components/First';
import TodoList from './components/TodoList';
import Parents from './components/Parents';
function App() {
    return (
        <div className="App">
            <>
                <First title="오늘 배울 내용은?">
                    <p>TS with React</p>
                </First>
                <Parents></Parents>
                <hr />
                <TodoList></TodoList>
            </>
        </div>
    );
}

export default App;
