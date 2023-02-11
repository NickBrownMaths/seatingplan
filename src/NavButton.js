function NavButton(props) {
  return (
    <button className='NavButton' onClick={props.onClick}>
      {props.text}
    </button>
  )
}

export default NavButton;