import React from 'react'
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Event from "./components/Event";
import { Route } from 'react-router-dom';
const App = () => {
  return (
    <div>

      {/* <h1>Hello aliens this is DSC-DCE</h1> */}
      <Navbar/>
      <Route path="/events">
        <Event />
      </Route>
      <Footer/>
    </div>
  )
}

export default App
