import {NavLink} from './NavLink.jsx';

export const Nav = () => {
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


        <NavLink href="#smooth_inicio" id="inicio">Inicio</NavLink>
        <NavLink href="#smooth_sobre_mi" id="sobre_mi">Sobre mí</NavLink>
        <NavLink href="#smooth_proyecto" id="proyectos">Proyectos</NavLink>
        <NavLink href="#smooth_contactame" id="contactame">Contáctame</NavLink>
      </section>
    </nav>
  );
}