import logo from './logo.svg';
import './App.css';

function App() {

  const title = `c'est mon premiere phragraphe via React`
  const h1 = "hello la piscine"




  return (
    <div className="App">
      <header className="App-header">
        <h1>{h1}</h1>
        <img src={logo} className="App-logo" alt="logo" />
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        <p>{title}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
