import LoadForm from "./LoadForm.js";
import PageAddTable from "./PageAddTable.js";

function PageBodyDecider(props) {
  if (props.currentPage === 'addTable') {
    return (
      <PageAddTable
        setTableList={props.setTableList} tableList={props.tableList}
        setTableTemp={props.setTableTemp}
        setTableKill={props.setTableKill}
        setTableLink={props.setTableLink} tableLink={props.tableLink}
        setPartyList={props.setPartyList} partyList={props.partyList}
        setPartyTemp={props.setPartyTemp}
        setPartyKill={props.setPartyKill}
        setPartyLink={props.setPartyLink} partyLink={props.partyLink}
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
          Unassigned groups appear in the left hand column. Tables are on the right.
          As groups are added to tables, the tables will to the total number of Bs and Ks who are to be seated there.
          <br />
          <br />
          <button className='FakeKillButton' > X </button>
          <button className='FakeLinkButton' > @ </button>
          <button className='FakeUnlinkButton' > Ø </button>
          <br />
          Clicking the red X will remove a table or group.
          Clicking a green @ on a table, and another green @ on a group, assigns that group to that table.
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
    return (
      <div className="LoadSaveHolder" >
        <div className="InstructionBox">
          Paste your data in the box below.
        </div>
        <br />
        <LoadForm setLoadData={props.setLoadData} />
      </div>
    )
  }
}
export default PageBodyDecider;