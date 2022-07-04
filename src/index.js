import React from "react";
import ReactDOM from "react-dom/client";

import store from "./store";
import { Provider } from 'react-redux';
import App from './containers/App';

const rootNode = document.createElement('div');
rootNode.id = "app";
document.body.querySelector('#root').appendChild(rootNode);
const root = ReactDOM.createRoot(rootNode);
root.render(<Provider store={store}><App /></Provider>);