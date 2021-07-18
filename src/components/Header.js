import React from "react";
import  "./Header.css";
import logo from '../logo.png'

const Header = () =>{
return(
    <header className='header'>
        <div className='header-container'>          
            <div className='cont_log'>
                <div  className='cont_img'>
                    <img src={logo} className='App-logo' alt='logo'></img>
                </div>
                <div className='header-button'>               
                 <div>
                    <p>REGISTRARSE</p>
                    <div className='session-p' ></div>   
                    <p >UNIRSE</p> 
                  </div>             
        </div>
            </div>
            <div className='cont_ul'>
                <ul>
                    <li><a>HOME</a></li>
                    <li><a>COMICS</a></li>
                    <li><a>VIDEO</a></li>
                    <li><a>PELICULAS</a></li>
                    <li><a>NOTICIAS</a></li>
                    <li><a>JUEGS</a></li>
                    <li><a>MAS</a></li>            
                </ul>
            </div>
        </div>
        
    </header>
)}

export default  Header;     
