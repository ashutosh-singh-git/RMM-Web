import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {applyMiddleware, createStore} from "redux";
import createSagaMiddleware from 'redux-saga';
import reducers from "./redux/Reducers";
import sagas from "./redux/Sagas";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";


const sagaMiddleware = createSagaMiddleware();
let middleware = applyMiddleware(sagaMiddleware);

let store = createStore(reducers, middleware);
sagaMiddleware.run(sagas);


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
