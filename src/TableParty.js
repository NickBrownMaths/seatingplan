function Table(props) {
  return (
    <div className="TableParty">
      <div>
        {props.party.NAME} {"("}B: {props.party.BUMS}, K: {props.party.KIDS}{")"}
      </div>
      <button className='UnlinkButton' onClick={() => { props.setSeverLink({TABLEIDX: props.tableIdx, PARTYIDX: props.index}) }}>
      Ø
      </button>
    </div>
  )
}
export default Table;