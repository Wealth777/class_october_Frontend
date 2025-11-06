import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import Footer from './components/Footer'
import NotFound from './pages/NotFound'

function App() {


 
  return (
    <>  
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/dasborad' element={<Dashboard/>} />
        <Route path='/signin' element={<Signin/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
      <Footer/>

      {/* Routing, Dynamic Routing, Nested Routing, */}
    </>
  )
}

export default App
 