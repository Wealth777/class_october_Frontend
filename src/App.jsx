import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import Footer from './components/Footer'
import NotFound from './pages/NotFound'
import Props from './pages/Props'

function App() {


 
  return (
    <>  
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/dasborad' element={<Dashboard/>} />
        <Route path='/signin' element={<Signin/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/props' element={<Props/>} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
      <Footer/>

      {/* Routing, Dynamic Routing, Nested Routing, */}
    </>
  )
}

export default App
 