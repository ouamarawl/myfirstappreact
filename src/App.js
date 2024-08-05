import'./App.css'
import { BrowserRouter as router, route, Routes  } from 'react-router-dom'



import {Container } from './components/index'
import { Header,Footer,Hero,Mostpopular,GamingLibrary} from'./sections/index'
const App =() => {
    return(
        <>
            <Header/>
            <Container>
              <Hero/>  
              <Mostpopular/> 
              <GamingLibrary/>    
            </Container> 
             <Footer/>
        </>
    )
}

export default App