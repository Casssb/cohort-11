import Card from './modules/Card';
import spainPic from './img/spain.jpg';
import germanyPic from './img/germany.jpg';
import francePic from './img/france.jpg';
import { useState } from 'react';
import './App.css';
import CardButton from './modules/CardButton';

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
        btnColor={'red'}
        btnBackground={'orange'}
      />
      <Card
        title={'Germany'}
        description={'good beer'}
        imgSrc={germanyPic}
        darkmode={toggleDarkMode}
        darkValue={darkmode}
        btnColor={'white'}
        btnBackground={'black'}
      />
      <Card
        title={'France'}
        description={'filled with French people'}
        imgSrc={francePic}
        darkmode={toggleDarkMode}
        darkValue={darkmode}
        btnColor={'white'}
        btnBackground={'blue'}
      />
      <CardButton darkmode={toggleDarkMode}>App Darkmode</CardButton>
    </div>
  );
}

export default App;
