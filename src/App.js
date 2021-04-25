import React from 'react'
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { Route } from 'react-router-dom';
import Event from "./components/Event";
import Team from './components/Team';
const App = () => {
  return (
    <div>

      {/* <h1>Hello aliens this is DSC-DCE</h1> */}
      <Navbar/>

      <Route  path="/events">
        <Event />
      </Route>

      <Route path="/team">
        <Team/>
      </Route>

      <Footer/>
    </div>
  )
}

export default App
