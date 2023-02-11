import TableForm from "./TableForm";
import TableList from "./TableList";

function PageAddTable(props) {
  return (
    <div>
      <TableForm
        placeholder={'Enter table name'}
        setTableList={props.setTableList} tableList={props.tableList}
        setTableTemp={props.setTableTemp} tableTemp={props.tableTemp}
      />
      <TableList tableList={props.tableList}/>
    </div>
  )
}
export default PageAddTable;