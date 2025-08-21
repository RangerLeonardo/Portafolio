import {NavLink} from './NavLink.jsx';
import { useState } from 'react';

export const Nav = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
      <section className="navegacion_principal">

        <div className="navegacion_div">
            <div className='navegacion_div_logo'>
              {/* <NavLink href="#smooth_inicio_logo" id="inicio_logo"> */}
                <img className='animation_scale' id="logo" src="/Portafolio/img/logo/Logo.webp" alt="logo" />
              {/* </NavLink> */}
            </div>
        </div>

        <div className='navegacion_div_hamburger_icon'>
          <button
            className="navegacion_hamburger_icon" // Clase para controlar visibilidad y estilo via CSS
            onClick={toggleMenu}
            aria-label="Abrir menú de navegación"
            aria-expanded={isMenuOpen}
          >
            &#9776;
          </button>
        </div>

        <div className={`navegacion_div_menu ${isMenuOpen ? 'nav_open_menu' : 'nav_close_menu'}`}>
          <NavLink href="#smooth_inicio" id="inicio">Inicio</NavLink>
          <NavLink href="#smooth_sobre_mi" id="sobre_mi">Sobre mí</NavLink>
          <NavLink href="#smooth_proyecto" id="proyectos">Proyectos</NavLink>
          <NavLink href="#smooth_contactame" id="contactame">Contáctame</NavLink>
        </div>
      </section>
    </nav>
  );
}