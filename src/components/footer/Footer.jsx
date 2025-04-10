import "../../styles/footer/footer.css"
export const Footer = () => {
    return <footer>
        <div className ="div_principal_footer">
            <div>

            </div>
            <div className ="div_footer_parrafo">
                <p>© Todos los derechos reservados</p>
            </div>

            <div className="div_img_footer">
                <a href="https://www.linkedin.com/in/brandon-leonardo-adata-barrera">
                    <img className="animation_scale img_footer" src="/Portafolio/img/footer/linkedin_1.webp" alt="Linkedin de Brandon"/>
                </a>
                <a href="https://github.com/rangerLeonardo">
                    <img className="animation_scale img_footer" src="/Portafolio/img/footer/github-gris_1.webp" alt="Github de Brandon"/>
                </a>
                <a href="mailto:brandonleonardobarrera@gmail.com">
                    <img className="animation_scale img_footer" src="/Portafolio/img/footer/gmail.webp" alt="Email de Brandon"/>
                </a>
            </div>

        </div>
    </footer>
}