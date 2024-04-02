import React from 'react';
import withLike from './withLike';

const LikePost = withLike(({ likeCounter, handleLike }) => {
  return (
    <button onClick={handleLike}>Like Post {likeCounter}</button>
  );
});

export default LikePost;