import React from 'react';
import withLike from './withLike';

const LikeImage = withLike(({ likeCounter, handleLike }) => {
  return (
    <button onClick={handleLike}>Like Image {likeCounter}</button>
  );
});

export default LikeImage;