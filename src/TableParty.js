function Table(props) {
  return (
    <div className="TableParty">
      <div>
        {props.party[0].NAME} {"("}B: {props.party[0].BUMS}, K: {props.party[0].KIDS}{")"}
      </div>
      <button className='UnlinkButton' onClick={() => { props.setPartyUnlink({PARTYIDX: props.index, TABLEIDX: props.tableIdx}) }}>
      Ø
      </button>
    </div>
  )
}
export default Table;