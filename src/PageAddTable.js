import PartyForm from "./PartyForm";
import TableForm from "./TableForm";
import TableList from "./TableList";

function PageAddTable(props) {
  return (
    <div>
      <TableForm
        setTableList={props.setTableList} tableList={props.tableList}
        setTableTemp={props.setTableTemp}
      />
      <PartyForm 
      setPartyList={props.setPartyList} partyList={props.partyList}
      setPartyTemp={props.setPartyTemp}
      />
      <TableList
        tableList={props.tableList}
        setTableKill={props.setTableKill}
      />
    </div>
  )
}
export default PageAddTable;