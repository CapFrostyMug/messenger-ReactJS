import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import {PersistGate} from 'redux-persist/integration/react'
import {persistor} from "./store";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <PersistGate loading={null} persistor={persistor}>
                <App/>
            </PersistGate>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();
