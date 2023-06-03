import React, { useState } from 'react';
import './style.css';

export const Likes = () => {
  const [likeUp, setLike] = useState(0);
  const [likeDown, setLikeDown] = useState(0);

  const likeUpFunc = () => {
    setLike(likeUp + 1);
  };

  const likeDownFunc = () => {
    setLikeDown(likeDown + 1);
  };

  return (
    <div className="joke__likes">
      <button
        id="btn-up"
        className="btn-like btn-like--up"
        onClick={likeUpFunc}
      ></button>
      <span id="likes-up" className="likes-count likes-count--up">
        {likeUp}
      </span>
      <button
        id="btn-down"
        className="btn-like btn-like--down"
        onClick={likeDownFunc}
      ></button>
      <span id="likes-down" className="likes-count likes-count--down">
        {likeDown}
      </span>
    </div>
  );
};
