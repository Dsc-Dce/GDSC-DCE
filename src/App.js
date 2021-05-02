import {React,useState} from 'react'
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { Route } from 'react-router-dom';
// import Event from "./components/Event";
import Team from './components/Team';
import Aboutus from './components/Aboutus';
import REvent from './components/REvent';
import {ThemeProvider} from "styled-components";
import { GlobalStyles } from "./components/Globalstyle";
import { lightTheme, darkTheme } from "./components/Themes"
import  {useDarkMode} from "./components/useDarkMode"
import Toggle from "./components/Toggler"
import CoviHack from './components/CoviHack';
const App = () => {
 
  const [theme, themeToggler, mountedComponent,tsrc] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

if(!mountedComponent) return <div/>
  return (
    <ThemeProvider theme={themeMode}>
    <>
    <GlobalStyles/>
    <div>

      {/* <h1>Hello aliens this is DSC-DCE</h1> */}
      <Navbar/>
      <Toggle theme={theme} toggleTheme={themeToggler} tsrc={tsrc}/>
      <Route exact path="/">
        <Aboutus  theme={theme}/>
      </Route>
      

      <Route  path="/events">
        {/* <Event /> */}
        <REvent  theme={theme}/>
      </Route>

      <Route path="/team">
        <Team  theme={theme}/>
      </Route>

      <Route path="/covihack">
        <CoviHack/>
      </Route>

      <Footer/>
    </div>
    </>
    </ThemeProvider>
  )
}

export default App
