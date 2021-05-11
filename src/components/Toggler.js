import React, { useEffect } from 'react'
import { func, string } from 'prop-types';
import styled from "styled-components"
import './assets/css/aboutus.css';

const Toggle = ({theme,  toggleTheme,tsrc }) => {

    const Button = styled.button`
    cursor: pointer;
    position:absolute;
    z-index:10;
    right:0;
    border:none;
    background:transparent;
    top:20px;
    right:25px;
    @media only screen and (min-width:599px) and (max-width:1064px){
       
            top: 110px !important;
  
    }
    @media only screen and (max-width: 600px) {
        top:81px !important;
        right:0;
       
    }
  `;
    return (
        <>
        
        <Button onClick={toggleTheme} >
         <img src={tsrc} alt="toggle" id="toggle"  style={{borderRadius:"30px",height:"50px"}}/>
        </Button>
        </>
    );
};
Toggle.propTypes = {
    theme: string.isRequired,
    toggleTheme: func.isRequired,
}
export default Toggle;
