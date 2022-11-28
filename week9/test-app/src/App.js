import Header from './Header';
import './App.css';

function App() {
  const name = 'Bob';
  return (
    <div className="App">
      <Header name={name}/>
    </div>
  );
}

export default App;
