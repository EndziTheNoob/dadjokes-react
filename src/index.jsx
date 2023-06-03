import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import { Joke } from './components/Joke/index.jsx';

const App = () => {
  return (
    <div className="container">
      <Joke
        userAvatar={avatar}
        userName={name}
        text={text}
        likes={likes}
        dislikes={dislikes}
      />
    </div>
  );
};

createRoot(document.querySelector('#app')).render(<App />);
