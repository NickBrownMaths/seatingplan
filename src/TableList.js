import Table from "./Table";

function TableList(props) {
  return (
    <div className="TableList">
      {
        props.tableList.map((table, index) => (
          <Table key={index} table={table} />
        ))
      }
    </div>
  )
}
export default TableList;