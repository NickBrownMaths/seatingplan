function Table(props) {
  return (
    <div className="TableParty">
      <div className="ListTop">
        {props.party.NAME} {"("}B: {props.party.BUMS}, K: {props.party.KIDS}{")"}
        <div className="MemberList">
          {
            props.party.MEMB.map((member, index) => (
              <p key={index}>{member}</p>
            ))
          }
        </div>
      </div>
      <button className='UnlinkButton' onClick={() => { props.setSeverLink({ TABLEIDX: props.tableIdx, PARTYIDX: props.index }) }}>
        Ø
      </button>
    </div>
  )
}
export default Table;