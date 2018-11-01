import React from 'react';
import ReactDOM from 'react-dom';
// import App from './components/App';
import Trivia from './components/Trivia';
import VideoPlayer from './components/Player';
import './index.css';

const Index = () => (
  <div>
      Welcome to Trivioke!
    <Trivia />
    <VideoPlayer />
  </div>
);

ReactDOM.render(<Index />, document.getElementById('root'));
