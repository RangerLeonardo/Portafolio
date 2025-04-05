export const NavLink = ({ href, id, children }) => {
  return (
    <div className="navegacion_div">
      <a href={href}>
        <p className="navegacion_p" id={id}>{children}</p>
      </a>
    </div>
  );
}