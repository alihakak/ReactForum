import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import PostModule from './components/PostModule'
ReactDOM.render(
  <App />,
  document.getElementById('root')
);
ReactDOM.render(
  <PostModule/>,
  document.getElementById('forum')
);
