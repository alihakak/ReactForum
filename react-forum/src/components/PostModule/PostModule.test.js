import React from 'react';
import ReactDOM from 'react-dom';
import PostModule from './PostModule';

it('Post Module renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PostModule />, div);
});
