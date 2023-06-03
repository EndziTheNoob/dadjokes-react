import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import { Jokes } from './components/Jokes/index.jsx';
import { Likes } from './components/Likes/index.jsx';

const App = () => {
  return (
    <div className="container">
      <Jokes />
      <Likes />
    </div>
  );
};

createRoot(document.querySelector('#app')).render(<App />);
