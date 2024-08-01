import './navitem.css'

const Navitem1 = (props) => {
  return (
    <li className='nav-item'>
        {props.children}
    </li>
  )
}


const NavitemDropDown = (props) => {
    return (
      <li className='nav-item dropdown'>
          {props.children}
      </li>
    )
}
  

export default Navitem1
export {NavitemDropDown}