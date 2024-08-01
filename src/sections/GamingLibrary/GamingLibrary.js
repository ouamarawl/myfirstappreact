import'./GamingLibrary.css'

import {GamingLibraryCard,Sectionheader,Sectionwerapper} from'../../components/index'
import GamingLibraryData from '../../data/GamingLibraryData'

const GamingLibrary = () => {

  const cards = GamingLibraryData.map(card => {
    return <GamingLibraryCard key={card.id} image={card.image} title={card.title} category={card.category} rate={card.rate} download={card.downdload} /> 
    
  })

  return (
  <Sectionwerapper>
    <Sectionheader>Gaming Library</Sectionheader>
    <div className='Gaming-Library-Cards'>
     {cards}
    </div>   
   </Sectionwerapper>
  )
}

export default GamingLibrary