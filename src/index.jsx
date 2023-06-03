import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import { Jokes } from './components/Jokes';

const App = () => {
  return (
    <div className="container">
      <Jokes />
    </div>
  );
};

createRoot(document.querySelector('#app')).render(<App />);
