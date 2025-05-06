import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/reset.css'; //  Correct for Ant Design v5
import { ThemeProvider } from "./context/ThemeContext";
import { Provider } from "react-redux";
import store from "./redux/store"; // Import the Redux store

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}> {/* Wrap App with Provider */}
<ThemeProvider > 

    <App />
    
    </ThemeProvider>
    </Provider>
);
