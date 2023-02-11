import PartyForm from "./PartyForm";
import TableForm from "./TableForm";
import TableList from "./TableList";
import PartyList from "./PartyList";

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
      <div className="WorkArea">
        <PartyList
          partyList={props.partyList}
          setPartyKill={props.setPartyKill}
          setPartyLink={props.setPartyLink}
        />
        <TableList
          tableList={props.tableList}
          setTableKill={props.setTableKill}
          setTableLink={props.setTableLink}
          setSeverLink={props.setSeverLink}
        />
      </div>
    </div>
  )
}
export default PageAddTable;