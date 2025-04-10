import {NavLink} from './NavLink.jsx';

export const Nav = () => {
  return (
    <nav>
      <section className="navegacion_principal">
        <div className="navegacion_div">
          <img className='animation_scale' id="logo" src="/Portafolio/img/logo/Logo.webp" alt="logo" />
        </div>
        <NavLink href="#smoothInicio" id="inicio">Inicio</NavLink>
        <NavLink href="#smoothSobreMi" id="sobre_mi">Sobre mí</NavLink>
        <NavLink href="#smoothProyects" id="proyectos">Proyectos</NavLink>
        <NavLink href="#smoothContactame" id="contactame">Contáctame</NavLink>
      </section>
    </nav>
  );
}