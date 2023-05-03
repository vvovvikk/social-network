import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { addPost, addMsg } from './data/state';


const root = ReactDOM.createRoot(document.getElementById('root'));

export default function rerenderTree(state) {
  root.render(
    <React.StrictMode>
      <App
        state={state}
        addPost={addPost}
        addMsg={addMsg}
      />
    </React.StrictMode>
  );
}
