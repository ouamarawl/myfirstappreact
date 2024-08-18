import'./App.css'
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom'
import {Home, Profile} from './pages/index'


import {Container } from './components/index'
import { Header,Footer,Hero,Mostpopular,GamingLibrary} from'./sections/index'
const App =() => {
    return(
        <>
         <Router>
            <Header/>
            <Container>

            <Routes>
             <Route path='/' element={ <Home/>} />
             <Route path='Profile' element={ <Profile/>} />
            </Routes>

            </Container> 
             <Footer/>
        </Router>   
        </>
    )
}

export default App