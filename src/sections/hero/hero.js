import'./hero.css'
import { PrimaryButtons } from '../../components'
const Hero = () => {
  return (
     <div className='hero-main'>
      <div className='hero-text'>
       <div className='hero-text'>
        <h6 className='hero-subtitle'>Welcome To Cyborg</h6>
        <h4 className='hero-title'><em>Browse</em> Our popular games here</h4>
           <PrimaryButtons>Browse Now</PrimaryButtons>
        {/* <div className='main-button'>
         <a href ="browse.html"> Browse Now  </a>
        </div> */}
       </div>
      </div>
     </div>
  )
}

export default Hero