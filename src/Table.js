function Table(props) {
  return (
    <div className="Table">
      <div>
        {props.table.NAME} {"("}B: {props.table.BUMS}, K: {props.table.KIDS}{")"}
      </div>
      <button className ='KillButton' onClick={() => { props.setTableKill(props.index) }}>
        X
      </button>
    </div>
  )
}
export default Table;