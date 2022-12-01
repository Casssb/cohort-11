import React from 'react';

const Contact = (props) => {
  const { toggle } = props;
  return (
    <div>
      <h1>Contact</h1>
      <button onClick={toggle}>Darkmode</button>
    </div>
  );
};

export default Contact;
