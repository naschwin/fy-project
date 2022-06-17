import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css"

import React, {useState} from 'react';

function App() {

  const [name, setName] = useState('');

  // Predict
  const predictML = () => {
    axios.post('http://localhost:8000/predict/ml/', {'name': name })
    .then(res => console.log(res))
    .catch((err) => console.log(err));
  };
  
  const predictSenti = () => {
    axios.post('http://localhost:8000/predict/senti/', {'name': name })
    .then(res => console.log(res))
    .catch((err) => console.log(err));
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">Learn React</a>
        <span className="card-text">
          <input className="mb-2 form control titleIn" onChange={event => setName(event.target.value)} placeholder='Stock Ticker'></input>
          <button className="btn btn-outline-primary mx-2" onClick={predictML}>Predict Ml</button>
          <button className="btn btn-outline-primary mx-2" onClick={predictSenti}>Predict Senti</button>
          {/* <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">Predict using ml</a>
          <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">Predict using senti</a> */}
        </span>
      </header>
    </div>
  );
}

export default App;
