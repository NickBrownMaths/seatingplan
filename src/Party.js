function Party(props) {
  return (
    <div className="Party">
      <div>
        {props.party.NAME} {"("}B: {props.party.BUMS}, K: {props.party.KIDS}{")"}
      </div>
      <button className ='KillButton' onClick={() => { props.setPartyKill(props.index) }}>
        X
      </button>
    </div>
  )
}
export default Party;