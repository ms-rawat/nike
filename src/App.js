import React from 'react'
import icon2 from './icon2.svg'
import icon from './icon.svg'
import ProductDiv from './components/products/ProductDiv'
import Sidebar from './components/sidebar/Sidebar'
import './App.css'
function App() {
  return (
    <div className='App'>
      <header><div className='d-flex flex-row justify-content-end sw-semibold  gap-2 '>
        <div>filter <img src={icon2} alt="" /></div> 
        <div>sort<img src={icon} alt="" /></div> 
        
        </div></header>
    <sidebar> <Sidebar/> </sidebar>  
      <main className='products'><ProductDiv/></main> 
    </div>
  )
}

export default App