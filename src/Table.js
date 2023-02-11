function Table(props) {
return(
  <div className="Table">
    <div>
      {props.table.NAME} {"("}B: {props.table.BUMS}, K: {props.table.KIDS}{")"} 
    </div>
  </div>
)
}
export default Table;