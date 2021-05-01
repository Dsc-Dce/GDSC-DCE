import { useEffect, useState } from 'react';
import light from './assets/images/light.gif';
import dark from './assets/images/dark.gif';
export const useDarkMode = () => {
    const [theme, setTheme] = useState('light');
    const [tsrc,setTsrc]=useState(dark);
    const [mountedComponent, setMountedComponent] = useState(false)
    const setMode = mode => {
        window.localStorage.setItem('theme', mode)
        setTheme(mode)
    };

    const themeToggler = () => {
        theme === 'light' ? setMode('dark') : setMode('light')
        if(theme==='light'){
            setTsrc(light)
        }
         else{
            setTsrc(dark)
         }
      
    };

    useEffect(() => {
        const localTheme = window.localStorage.getItem('theme');
        localTheme && setTheme(localTheme)
        setMountedComponent(true)
    }, []);
    return [theme, themeToggler, mountedComponent,tsrc]
};
