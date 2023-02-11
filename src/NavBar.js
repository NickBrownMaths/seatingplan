import NavButton from "./NavButton";

function NavBar(props) {
  return (
    <div className="NavBar">
      {
        props.buttons.map((button, index) => (
          <NavButton index={index} onClick={button[0]} text={button[1]} />
        ))
      }
    </div>
  )
}

export default NavBar;