import TableForm from "./TableForm";
import TableList from "./TableList";

function PageAddTable(props) {
  return (
    <div>
      <TableForm
        placeholder={'Enter table name'}
        setTableList={props.setTableList} tableList={props.tableList}
        setTableTemp={props.setTableTemp}
      />
      <TableList
        tableList={props.tableList}
        setTableKill={props.setTableKill}
      />
    </div>
  )
}
export default PageAddTable;