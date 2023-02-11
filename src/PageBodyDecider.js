import PageAddTable from "./PageAddTable.js";

function PageBodyDecider(props) {
  if (props.currentPage === 'addTable') {
    return (
      <PageAddTable
        setTableList={props.setTableList} tableList={props.tableList}
        setTableTemp={props.setTableTemp}
        setTableKill={props.setTableKill}
        setPartyList={props.setPartyList} partyList={props.partyList}
        setPartyTemp={props.setPartyTemp}
        setPartyKill={props.setPartyKill}
      />
    )
  }
}
export default PageBodyDecider;