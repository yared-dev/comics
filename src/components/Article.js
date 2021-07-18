import React from 'react';
import Section from './Section.js'
import spiderman from '../spiderman.jpg'
import "./Article.css";


const Article = ()=>{
    return (
        <div className='article'>
            <div className='container'>
                <div className='container_img'>
                    <img src={spiderman} alt=''></img>
                </div>
                <div className='container_descrip'>
                    <div className='descripcion'>
                       <div className='__des'>
                       <h2>Spiderman</h2>
                        <h1>¡DISPONIBLE AHORA!</h1>
                        <p>Disfrutalo ahora una pelicula para todas las edaddes donde
                            vemos a spiderman crecer como heroe.Disfruta los comics en nuestra
                            seccion gratis.
                        </p>
                       </div>
                        <div className="button-5">
                         <div className="translate"></div>
                         <a>Ver Ahora</a>
                         </div>
                    </div>
                  
                </div>
            </div>   
            <div className='content_main'>
            </div>    
            <div className="img_Fluid">
                <div className='fluid_h1'><h1>Algunos Comics</h1>
                </div>
            <div className="img_row">
                <Section></Section>
                <Section></Section>
                <Section></Section>
                <Section></Section>
                <Section></Section>
                <Section></Section>
            </div>
          </div> 
        </div>
    )
}
export default Article;