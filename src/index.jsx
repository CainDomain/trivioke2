import React from 'react';
import ReactDOM from 'react-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import Trivia from './components/Trivia';
import VideoPlayer from './components/Player';
import './index.css';

const Index = () => (
  <div>
      Welcome to Trivioke!
    <Signup />
    <Login />
    <Trivia />
    <VideoPlayer />
  </div>
);

ReactDOM.render(<Index />, document.getElementById('root'));
