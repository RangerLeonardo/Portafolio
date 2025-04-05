import {NavLink} from './NavLink.jsx';

export const Nav = () => {
  return (
    <nav>
      <section className="navegacion_principal">
        <div className="navegacion_div">
          <img id="logo" src="/src/media/images/imagesWeb/logo/Logo.webp" alt="logo" 
          onError={(e) => {e.target.src = '/src/media/images/imagesPng/logo/Logo.png';}} />
        </div>
        <NavLink href="#smoothInicio" id="inicio">Inicio</NavLink>
        <NavLink href="#smoothSobreMi" id="sobre_mi">Sobre mí</NavLink>
        <NavLink href="#smoothProyects" id="proyectos">Proyectos</NavLink>
        <NavLink href="#smoothContactame" id="contactame">Contáctame</NavLink>
      </section>
    </nav>
  );
}