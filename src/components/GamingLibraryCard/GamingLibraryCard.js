import { SecondaryButtons } from '..'
import './GamingLibraryCard.css'

const GamingLibraryCard = (props) => {
  return (
    <div className='Gaming-Library-Card'>
        <ul>
            <li ><img src={props.image}/></li>
            <li><h4>{props.title}</h4><span>{props.category}</span></li>
            <li><h4>date added</h4><span>{props.date_added}</span></li>
            <li><h4>Hours played</h4><span>{props.hours_played}</span></li>
            <li><h4>currently</h4><span>{props.download}</span></li>
            <SecondaryButtons>Download</SecondaryButtons>
            
        </ul>
    </div>
  )
}

export default GamingLibraryCard