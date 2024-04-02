import React, { useState } from 'react';

const withLike = (WrappedComponent) => {
  return () => {
    const [likeCounter, setLikeCounter] = useState(0);

    const handleLike = () => {
      setLikeCounter(likeCounter + 1);
    }

    return (
      <WrappedComponent
        likeCounter={likeCounter}
        handleLike={handleLike}
      />
    );
  };
};

export default withLike;