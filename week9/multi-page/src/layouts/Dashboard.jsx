import { Outlet, Link } from 'react-router-dom';
import React from 'react';
import { useState } from 'react';
import squint from '../img/squint.webp';
import happy from '../img/happy.webp';

const Dashboard = (props) => {
  const { toggle } = props;
  const [status, setStatus] = useState('happy');


  const changeStatus = (mood) => {
    setStatus(mood);
  };
  return (
    <>
      <nav className="dashboard">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
        <h1>Hi, I'm a dashboard</h1>
        <h3>{status} cat</h3>
        <button onClick={toggle}>Darkmode</button>
        <button onClick={() => changeStatus('confused')}>Confused</button>
        <button onClick={() => changeStatus('happy')}>Happy</button>
        <img src={status === 'happy' ? happy : squint} alt="animal" />
      </nav>

      <Outlet />
    </>
  );
};

export default Dashboard;
