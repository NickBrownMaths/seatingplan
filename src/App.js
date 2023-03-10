import { useEffect, useState } from 'react';
import './App.css';
import NavBar from './NavBar';
import PageBodyDecider from './PageBodyDecider';

function App() {
  const [currentPage, setCurrentPage] = useState('instruct');
  const [tableList, setTableList] = useState([]);
  const [partyList, setPartyList] = useState([]);
  const [tableTemp, setTableTemp] = useState(0);
  const [partyTemp, setPartyTemp] = useState(0);
  const [tableKill, setTableKill] = useState(null);
  const [partyKill, setPartyKill] = useState(null);
  const [tableLink, setTableLink] = useState(null);
  const [partyLink, setPartyLink] = useState(null);
  const [severLink, setSeverLink] = useState(null);
  const [loadData, setLoadData] = useState(null);

  useEffect(() => {
    if (currentPage === 'formSent') {setCurrentPage('addTable') ;}
  }, [currentPage]);


  useEffect(() => {
    if (tableTemp !== 0) {
      setTableList(tableList => [...tableList, tableTemp]);
    }
  }, [tableTemp]);

  useEffect(() => {
    if (partyTemp !== 0) {
      if (partyTemp.BUMS === '') { partyTemp.BUMS = 0 }
      if (partyTemp.KIDS === '') { partyTemp.KIDS = 0 }
      let memberArray = partyTemp.MEMB.split(',');
      partyTemp.MEMB = memberArray;
      setPartyList(partyList => [...partyList, partyTemp]);
    }
  }, [partyTemp]);

  useEffect(() => {
    if (tableKill !== null) {
      let newtables = tableList;
      let removedTable = newtables.splice(tableKill, 1);
      setTableList(newtables);
      let newParties = partyList;
      newParties.push(...removedTable[0].PARTIES);
      setPartyList(newParties);
      setTableKill(null);
    }
  }, [tableKill]);

  useEffect(() => {
    if (partyKill !== null) {
      let newList = partyList;
      newList.splice(partyKill, 1);
      setPartyList(newList);
      setPartyKill(null);
    }
  }, [partyKill]);

  useEffect(() => {
    if (partyLink !== null && tableLink !== null) {
      let newParties = partyList;
      let activeParty = newParties.splice(partyLink, 1)
      setPartyList(newParties);
      let newTables = tableList;
      newTables[tableLink].PARTIES.push(activeParty[0]);
      newTables[tableLink].BUMS = + newTables[tableLink].BUMS + activeParty[0].BUMS;
      newTables[tableLink].KIDS = + newTables[tableLink].KIDS + activeParty[0].KIDS;
      setTableList(newTables)
      setTableLink(null);
      setPartyLink(null);
    }
  }, [partyLink, tableLink]);

  useEffect(() => {
    if (severLink === 'all') {
      for (let i = tableList.length - 1; i >= 0; i--) {
        for (let j = tableList[i].PARTIES.length - 1; j >= 0; j--) {
          let newTables = tableList;
          let removedParty = newTables[i].PARTIES.splice(j, 1);
          newTables[i].BUMS = newTables[i].BUMS - removedParty[0].BUMS;
          newTables[i].KIDS = newTables[i].KIDS - removedParty[0].KIDS;
          setTableList(newTables);
          setPartyList(partyList => [...partyList, removedParty[0]]);
        }
      }
      setSeverLink(null);
    }
    else if (severLink !== null) {
      let newTables = tableList;
      let removedParty = newTables[severLink.TABLEIDX].PARTIES.splice(severLink.PARTYIDX, 1);
      newTables[severLink.TABLEIDX].BUMS = newTables[severLink.TABLEIDX].BUMS - removedParty[0].BUMS;
      newTables[severLink.TABLEIDX].KIDS = newTables[severLink.TABLEIDX].KIDS - removedParty[0].KIDS;
      setTableList(newTables);
      setPartyList(partyList => [...partyList, removedParty[0]]);
      setSeverLink(null);
    }
  }, [severLink]);

  useEffect(() => {
    if (loadData !== null) {
      let newData = JSON.parse(loadData);
      setTableList(newData.TABLELIST);
      setPartyList(newData.PARTYLIST);
      setLoadData(null);
      setCurrentPage('addTable');
    }
  }, [loadData]);

  let buttons = [];
  buttons.push([() => setCurrentPage('instruct'), 'Instructions',]);
  buttons.push([() => setCurrentPage('addTable'), 'Assign',]);
  buttons.push([() => setCurrentPage('saveSesh'), 'Save Session',]);
  buttons.push([() => setCurrentPage('loadSesh'), 'Load Session',]);

  return (
    <div className="App">
      <NavBar buttons={buttons} />
      <PageBodyDecider
        currentPage={currentPage}
        setTableList={setTableList} tableList={tableList}
        setTableTemp={setTableTemp}
        setTableKill={setTableKill}
        setTableLink={setTableLink}
        setPartyList={setPartyList} partyList={partyList}
        setPartyTemp={setPartyTemp}
        setPartyKill={setPartyKill}
        setPartyLink={setPartyLink} partyLink={partyLink}
        setSeverLink={setSeverLink} tableLink={tableLink}
        setLoadData={setLoadData}
      />
    </div>
  );
}

export default App;
