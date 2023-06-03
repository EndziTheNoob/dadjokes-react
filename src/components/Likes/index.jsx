import React from 'react';
import './style.css';

export const Likes = () => {
  return (
    <div className="joke__likes">
      <button id="btn-up" className="btn-like btn-like--up"></button>
      <span id="likes-up" className="likes-count likes-count--up">
        0
      </span>
      <button id="btn-down" className="btn-like btn-like--down"></button>
      <span id="likes-down" className="likes-count likes-count--down">
        0
      </span>
    </div>
  );
};
