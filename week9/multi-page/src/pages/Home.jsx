import React from 'react';

const Home = (props) => {
  const { toggle } = props;
  return (
    <div>
      <h1>Home</h1>
      <button onClick={toggle}>Darkmode</button>
    </div>
  );
};

export default Home;
