import { Outlet, Link } from 'react-router-dom';
import React from 'react';

const Dashboard = (props) => {
  const { toggle } = props;
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
        <h1>Hi, I'm a dashboard</h1>
        <button onClick={toggle}>Darkmode</button>
      </nav>

      <Outlet />
    </>
  );
};

export default Dashboard;
