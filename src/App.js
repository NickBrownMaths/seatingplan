import { useEffect, useState } from 'react';
import './App.css';
import NavBar from './NavBar';
import PageBodyDecider from './PageBodyDecider';

function App() {

  const [currentPage, setCurrentPage] = useState('addTable');

  const [tableList, setTableList] = useState([]);
  const [partyList, setPartyList] = useState([]);
  const [tableTemp, setTableTemp] = useState(0);
  const [partyTemp, setPartyTemp] = useState(0);
  const [tableKill, setTableKill] = useState(null);
  const [partyKill, setPartyKill] = useState(null);

  useEffect(() => {
    if (tableTemp !== 0) {
      setTableList(tableList => [...tableList, tableTemp]);
    }
  }, [tableTemp]);

  useEffect(() => {
    if (tableKill !== null) {
      let newList = tableList;
      newList.splice(tableKill, 1);
      setTableList(newList);
      setTableKill(null);
    }
  }, [tableKill]);



  let buttons = [];
  buttons.push([() => setCurrentPage('addTable'), 'Add Table',]);
  buttons.push([() => setCurrentPage('addParty'), 'Add Party',]);
  buttons.push([() => setCurrentPage('saveSesh'), 'Save Session',]);
  buttons.push([() => setCurrentPage('loadSesh'), 'Load Session',]);
  buttons.push([() => setCurrentPage('allocate'), 'Allocate Tables',]);

  return (
    <div className="App">
      <NavBar buttons={buttons} />
      <PageBodyDecider
        currentPage={currentPage}
        setTableList={setTableList} tableList={tableList}
        setTableTemp={setTableTemp}
        setTableKill={setTableKill}
      />
    </div>
  );
}

export default App;
