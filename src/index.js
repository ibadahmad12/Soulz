import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import './index.scss';

AOS.init({
    offset: 120,
    delay: 100,
    duration: 2000,
    easing: 'ease',
    once: false
});

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
