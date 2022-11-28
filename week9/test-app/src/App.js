import Card from './modules/Card';
import spainPic from './img/spain.jpg';
import germanyPic from './img/germany.jpg';
import francePic from './img/france.jpg'
import './App.css';

function App() {
  return (
    <div className="App">
      <Card title={'Spain'} description={'hot'} imgSrc={spainPic} />
      <Card
        title={'Germany'}
        description={'good beer'}
        imgSrc={germanyPic}
      />
      <Card
        title={'France'}
        description={'filled with French people'}
        imgSrc={francePic}
      />
    </div>
  );
}

export default App;
