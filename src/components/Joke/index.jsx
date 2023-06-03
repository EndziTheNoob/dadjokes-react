import React, { useState } from 'react';
import './style.css';
import { jokes } from '../../jokes';

export const Joke = ({ userAvatar, userName, text, likes, dislikes }) => {
  const [likeUp, setLike] = useState(likes);
  const [likeDown, setLikeDown] = useState(dislikes);

  const likeUpFunc = () => {
    setLike(likeUp + 1);
  };

  const likeDownFunc = () => {
    setLikeDown(likeDown + 1);
  };

  jokes.map(({ userAvatar, userName, text, likes, dislikes }) => {
    userAvatar = { avatar };
    userName = { userName };
    text = { text };
    likes = { likes };
    dislikes = { dislikes };
  });

  return (
    <div className="container">
      <div className="joke">
        <div className="joke__body">
          <div className="joke__user">
            <img class="user-avatar" src={userAvatar} />
            <p className="user-name">{userName}</p>
          </div>

          <p className="joke__text">{text}</p>
        </div>
      </div>
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
    </div>
  );
};
