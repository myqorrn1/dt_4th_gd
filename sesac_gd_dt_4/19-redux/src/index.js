import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux'; // Provider 가져오기.
import store from './store'; // Redux 스토어 가져오기 // index.js 생략!

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        {/* #6. React와 Redux 연결 */}
        {/* 
          Provider
          -
            ㄴ 하위 Redux 스토어 공유 모든 컴포넌트가 Redux 스토어에 접근 가능
          - 최상위 컴포넌트에 사용
        */}
        <Provider store={store}>
            <App />
        </Provider>
    </>
);
