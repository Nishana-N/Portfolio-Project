
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Intro from './Intro'
import Navbar from './Navbar'
import './app.css'
import Skills from './Skills'
import Works from './Works'
import Contact from './Contact'
import Page from './Page'
import Footer from './Footer'




function App() {


  return (
    <>
      
      <BrowserRouter>
      
      <Routes>
        
       <Route path="/" element={<Navbar/>}>
        <Route path='/' element={<Page/>}/>
        <Route path='/Intro' element={<Intro/>}/>
        <Route path='/Skills' element={<Skills/>}/>
        <Route path='/Works' element={<Works/>}/>
        <Route path='/Clients' element={<Contact/>}/>
        <Route path='/' element={<Footer/>}/>

       </Route>
       
      </Routes>
      </BrowserRouter>
      {/* <Footer/> */}
      
      
      
      
    </>
  )
}

export default App
