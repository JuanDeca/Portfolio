import React from 'react';

const Main = () => {
    return ( 
        <div id='main' className='main'>
            <div className='proyects'>
                <h4>Ultimos proyectos »</h4>
                <div className='proyectos'>
                    <h2>Miapp</h2>
                    <img src="/img/1.png" alt="" />
                    <p> Esta aplicacion fue desarrollada con el objetivo de ayudar a calcular a los productores de 
                        indumentara la cantidad de prendas que pueden llegar a desarrollar teniendo en 
                        cuenta los materiales que se necesitan para fabricar una unidad. </p>
                    <div>
                        <a className='b3' target='_blank' href='https://miapp.netlify.app/'>Visitar</a>
                        <a className='b4' target='_blank' href='https://github.com/JuanDeca/Miapp'>Ver código</a>
                    </div>
                </div>
                <div className='proyectos'>
                    <h2>Focus</h2>
                    <p>La idea general del proyecto es calcular que tan útil es la media móvil (Un índice económico) para 
                        proyectar el precio futuro que puede llegar a tener una criptomoneda. Hoy en dia el proyecto 
                        sigue en desarrollo.</p>
                    <img src="/img/4.png" alt="" />
                    <div>
                    <a className='b3' target='_blank' href='https://focus12.netlify.app/'>Visitar</a>
                    <a className='b4' target='_blank' href='https://github.com/JuanDeca/Focus'>Ver código</a>
                    </div>
                </div>
            </div>
            <div id='tech' className="tech">
                <h3>Experiencia con:</h3>
                <div>
                    <i className="fab fa-js-square"></i>
                    <i class="fa-brands fa-react"></i>
                    <i className="fab fa-sass"></i>
                    <i class="fab fa-css3-alt"></i>
                    <i className="fab fa-html5"></i>
                    <h4>JavaScript</h4>
                    <h4>React</h4>
                    <h4>Sass</h4>
                    <h4>CSS</h4>
                    <h4>HTML</h4>
                </div>
            </div>
        </div>
     );
}
 
export default Main;