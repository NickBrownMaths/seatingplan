import Party from "./Party";

function PartyList(props) {
  if (props.partyList.length > 0) {
    return (
      <div className="PartyList">
        {
          props.partyList.map((party, index) => (
            <Party
              key={index}
              index={index}
              party={party}
              setPartyKill={props.setPartyKill}
              setPartyLink={props.setPartyLink}
              partyLink={props.partyLink}
            />
          ))
        }
      </div>
    )
  }
}
export default PartyList;