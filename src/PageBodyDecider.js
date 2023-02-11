import PageAddTable from "./PageAddTable.js";

function PageBodyDecider(props) {
  if (props.currentPage === 'addTable') {
    return (
      <PageAddTable
        setTableList={props.setTableList} tableList={props.tableList}
        setTableTemp={props.setTableTemp} tableTemp={props.tableTemp}
      />
    )
  }
}
export default PageBodyDecider;