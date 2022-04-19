import React from 'react';

const Header = () => {
    return ( 
        <>
            <div className="navbar">
                <h2>JD</h2>
                <div>
                    <a target='_blank' href='https://www.linkedin.com/in/juan-decastelli-7a2620206/'>LinkedIn</a>
                    <a href='#tech'>Tecnologías</a>
                    <a target='_blank' href='https://wa.me/1155754196'>Contactame</a>
                </div>
            </div>
            <div className='hero'>
                <h1>Juan Decastelli</h1>
                <h3>Desarrollador web Front-End</h3>
                <div>
                    <a className='b1' href='#main'>Ver trabajos</a>
                    <a className='b2' target='_blank' href='https://github.com/JuanDeca'>Mi GitHub</a>
                </div>
                <img src="/img/Imagen1.svg" alt="" />
            </div>
        </>
     );
}
 
export default Header;