import Card from './modules/Card';
import spainPic from './img/spain.jpg';
import germanyPic from './img/germany.jpg';
import francePic from './img/france.jpg';
import { useState } from 'react';
import './App.css';

function App() {
  const [darkmode, setDarkmode] = useState(false);

  const toggleDarkMode = () => {
    setDarkmode(!darkmode);
  };

  return (
    <div className={`App ${darkmode && 'AppDark'}`}>
      <Card
        title={'Spain'}
        description={'hot'}
        imgSrc={spainPic}
        darkmode={toggleDarkMode}
        darkValue={darkmode}
      />
      <Card
        title={'Germany'}
        description={'good beer'}
        imgSrc={germanyPic}
        darkmode={toggleDarkMode}
        darkValue={darkmode}
      />
      <Card
        title={'France'}
        description={'filled with French people'}
        imgSrc={francePic}
        darkmode={toggleDarkMode}
        darkValue={darkmode}
      />
      <button onClick={toggleDarkMode}>Darkmode</button>
    </div>
  );
}

export default App;
