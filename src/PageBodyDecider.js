import PageAddTable from "./PageAddTable.js";

function PageBodyDecider(props) {
  if (props.currentPage === 'addTable') {
    return (
      <PageAddTable
        setTableList={props.setTableList} tableList={props.tableList}
        setTableTemp={props.setTableTemp}
        setTableKill={props.setTableKill}
      />
    )
  }
}
export default PageBodyDecider;