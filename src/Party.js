function Party(props) {
  return (
    <div className="Party">
      <button className='LinkButton' onClick={() => { props.setPartyLink(props.index) }}>
        @
      </button>
      <div>
        {props.party.NAME} {"("}B: {props.party.BUMS}, K: {props.party.KIDS}{")"}
        <div className="MemberList">
          {
            props.party.MEMB.map((member, index) => (
              <p key={index}>{member}</p>
            ))
          }
        </div>
      </div>
      <button className='KillButton' onClick={() => { props.setPartyKill(props.index) }}>
        X
      </button>
    </div>
  )
}
export default Party;