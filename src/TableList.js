import Table from "./Table";

function TableList(props) {
  return (
    <div className="TableList">
      {
        props.tableList.map((table, index) => (
          <Table
            key={index}
            index={index}
            table={table}
            setTableKill={props.setTableKill}
          />
        ))
      }
    </div>
  )
}
export default TableList;