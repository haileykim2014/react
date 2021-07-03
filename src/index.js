import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import AuthReducer from './reducers/AuthReducer';
import {createStore} from 'redux';
//Header와 login 두곳에서 이 store변수를 사용 할 수있어야하고
// let store = createStore(AuthReducer);
// //Header 컴포넌트에서 로그인/로그아웃 상태를 변경
// store.subscribe(()=>{
//   console.log(store.getState());
// });
// //Login 컴포넌트에서 사용하고 
// store.dispatch({type:1,userName:'newlec'});
// store.dispatch({type:2,userName:null});
// store.dispatch({type:1,userName:'newlec'});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
