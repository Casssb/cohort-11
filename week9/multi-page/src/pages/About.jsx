import React from 'react';

const About = (props) => {
  const { toggle } = props;
  return (
    <div>
      <h1>About</h1>
      <button onClick={toggle}>Darkmode</button>
    </div>
  );
};

export default About;
