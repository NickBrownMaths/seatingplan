import Table from "./Table";

function TableList(props) {
  if (props.tableList.length > 0) {
    return (
      <div className="TableList">
        <button className='UnlinkButton' onClick={() => { props.setSeverLink('all') }}>
          !
        </button>
        {
          props.tableList.map((table, index) => (
            <Table
              key={index}
              index={index}
              table={table}
              setTableKill={props.setTableKill}
              setTableLink={props.setTableLink}
              setSeverLink={props.setSeverLink}
              tableLink={props.tableLink}
            />
          ))
        }
      </div>
    )
  }
}
export default TableList;