import TableParty from "./TableParty";

function Table(props) {
  if (props.tableLink === props.index) {
    return (
      <div className="Table">
        <button className='LinkButtonActive' onClick={() => { props.setTableLink(props.index) }}>
          @
        </button>
        <div className="ListTop">
          {props.table.NAME} {"("}B: {props.table.BUMS}, K: {props.table.KIDS}{")"}
        </div>
        <button className='KillButton' onClick={() => { props.setTableKill(props.index) }}>
          X
        </button>
        <div className="TablePartyList">
          {
            props.table.PARTIES.map((party, index) => (
              <TableParty
                key={index}
                index={index}
                tableIdx={props.index}
                party={party}
                setSeverLink={props.setSeverLink}
              />
            ))
          }
        </div>
      </div>
    )
  }
  else {
    return (
      <div className="Table">
        <button className='LinkButton' onClick={() => { props.setTableLink(props.index) }}>
          @
        </button>
        <div className="ListTop">
          {props.table.NAME} {"("}B: {props.table.BUMS}, K: {props.table.KIDS}{")"}
        </div>
        <button className='KillButton' onClick={() => { props.setTableKill(props.index) }}>
          X
        </button>
        <div className="TablePartyList">
          {
            props.table.PARTIES.map((party, index) => (
              <TableParty
                key={index}
                index={index}
                tableIdx={props.index}
                party={party}
                setSeverLink={props.setSeverLink}
              />
            ))
          }
        </div>
      </div>
    )
  }
}
export default Table;