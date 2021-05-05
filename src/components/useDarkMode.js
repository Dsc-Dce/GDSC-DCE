import { useEffect, useState } from 'react';
import light from './assets/images/light.gif';
import dark from './assets/images/dark.gif';
import lightjoin from './assets/images/handshake-light.mp4';
import darkjoin from  './assets/images/handshake-dark.mp4';
import lightteam from './assets/images/teamlight.mp4';
import darkteam from './assets/images/team-dark.mp4';
export const useDarkMode = () => {
    const [theme, setTheme] = useState('light');
    const [tsrc,setTsrc]=useState(dark);
    const [handshake,setHandshake]=useState(lightjoin);
    const [team,setTeam]=useState(lightteam);
    const [mountedComponent, setMountedComponent] = useState(false)
    const setMode = (mode) => {
      
        window.localStorage.setItem('theme', mode)
      window.location.reload();
        setTheme(mode)
    };

    const themeToggler = () => {
        theme === 'light' ? setMode('dark') : setMode('light')
        if(theme==='light'){
            setTsrc(light)
            setHandshake(lightjoin)
            setTeam(lightteam)
        }
         else{
            setTsrc(dark)
            setHandshake(darkjoin)
            setTeam(darkteam)
         }
      
    };

    useEffect(() => {
        const localTheme = window.localStorage.getItem('theme');
        localTheme && setTheme(localTheme)
        setMountedComponent(true)
    }, []);
    return [theme, themeToggler, mountedComponent,tsrc,team,handshake]
};
