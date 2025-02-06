import { useState } from 'react'
import './App.css'
import Nav from './Nav'
import Home from './Home'
import Cards from './Cards'
import Start from './Start'
import Label from './Label'
import Cards2 from './Cards2'
import Footer from './Footer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  
  <Nav/>
 
     <Home/>
    <Cards/>
    <Start/>
    <Label/>
    <Cards2/>
    <Footer/>
    </>
  )
}

export default App
