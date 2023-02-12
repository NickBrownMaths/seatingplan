import PageAddTable from "./PageAddTable.js";

function PageBodyDecider(props) {
  if (props.currentPage === 'addTable') {
    return (
      <PageAddTable
        setTableList={props.setTableList} tableList={props.tableList}
        setTableTemp={props.setTableTemp}
        setTableKill={props.setTableKill}
        setTableLink={props.setTableLink}
        setPartyList={props.setPartyList} partyList={props.partyList}
        setPartyTemp={props.setPartyTemp}
        setPartyKill={props.setPartyKill}
        setPartyLink={props.setPartyLink}
        setSeverLink={props.setSeverLink}
      />
    )
  }
  else if (props.currentPage === 'instruct') {
    return (

      <div className="LoadSaveHolder" >
        <div className="InstructionBox">
          This app helps party planners assign seats at tables.
          Click the Assign Button to start.
          Groups have a number of bums (B), and a number of kids (K).
          As groups are added to tables, the tables will to the total number of Bs and Ks who are to be seated there.
          <br />
          <br />
          <button className='FakeKillButton' > X </button>
          <button className='FakeLinkButton' > @ </button>
          <button className='FakeUnlinkButton' > Ø </button>
          <br />
          Clicking the red X will remove a table or group.
          Clicking a green @ on a table, and another on a group, assigns that group to that table.
          Clicking the yellow Ø will unassign a group.
          <br />
          Optionally, you can add the names of the group members. Please separate the names with a comma, but without a space.
        </div>
      </div>
    )
  }
  else if (props.currentPage === 'saveSesh') {
    return (
      <div className="LoadSaveHolder" >
        <div className="InstructionBox">
          Copy the box below and save it to a text file.
        </div>
        <br />
        <div className="CopyBox">
          {"{"}
          "TABLELIST": {JSON.stringify(props.tableList)},
          "PARTYLIST": {JSON.stringify(props.partyList)}
          {"}"}
        </div>
      </div>
    )
  }
  else {

  }
}
export default PageBodyDecider;