import { useState } from 'react';
import './App.css';
import NavBar from './NavBar';

function App() {

  const [currentPage, setCurrentPage] = useState('AddTable');

  let buttons = [];
  buttons.push([() => setCurrentPage('AddTable'), 'Add Table',]);
  buttons.push([() => setCurrentPage('AddParty'), 'Add Party',]);
  buttons.push([() => setCurrentPage('SaveSesh'), 'Save Session',]);
  buttons.push([() => setCurrentPage('LoadSesh'), 'Load Session',]);
  buttons.push([() => setCurrentPage('Allocate'), 'Allocate Tables',]);

  return (
    <div className="App">
      <NavBar buttons={buttons}/>
    </div>
  );
}

export default App;
