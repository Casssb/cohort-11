import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import Dashboard from './layouts/Dashboard';
import Contact from './pages/Contact';
import About from './pages/About';
import Home from './pages/Home';
import { useState } from 'react';

function App() {
  const [darkmode, setDarkmode] = useState(false);

  const toggleDarkmode = () => {
    setDarkmode(!darkmode);
  };

  return (
    <div className={`App ${darkmode ? 'darkmode' : 'lightmode'}`}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home toggle={toggleDarkmode} />} />
            <Route path="about" element={<About toggle={toggleDarkmode} />} />
            <Route
              path="contact"
              element={<Contact toggle={toggleDarkmode} />}
            />
          </Route>
          <Route
            path="dashboard"
            element={<Dashboard toggle={toggleDarkmode} />}
          ></Route>
          <Route path="dashboard" element={<Dashboard toggle={toggleDarkmode} />}>
            <Route path="home" element={<Home toggle={toggleDarkmode} />} />
          </Route>
        </Routes>
      </BrowserRouter>
      ;
    </div>
  );
}

export default App;
