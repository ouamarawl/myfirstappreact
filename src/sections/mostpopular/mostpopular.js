import './mostpopular.css'




import {Card,Sectionheader,Sectionwerapper} from'../../components/index'
import MostpopularData from '../../data/MostPopularData'
const Mostpopular = () => {   
    
   const cards = MostpopularData.map(card => {
     return <Card key={card.id} image={card.image} title={card.title} category={Card.category} rate={Card.rate} download={Card.download} /> 
     
   })

    return(
        <Sectionwerapper>
            <Sectionheader>Most Popular</Sectionheader>
            <div className='most-popular-items'>
             {cards}    
            </div>   
        </Sectionwerapper>
    )
}

export default Mostpopular