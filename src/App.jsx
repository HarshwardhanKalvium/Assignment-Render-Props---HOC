import React from 'react';
import LikeImage from './components/LikeImage';
import LikePost from './components/LikePost';

const App = () => {
  return (
    <div>
      <h1>Like Image</h1>
      <LikeImage />

      <h1>Like Post</h1>
      <LikePost />
    </div>
  );
};

export default App;
