export const Footer = () => {
    return (  
        <footer>
            <div className="div_footer">

                <div className="div_parrafo">
                    <p>© Todos los derechos reservados</p>
                </div>

                <div>
                    <img className="img_footer" src="/src/media/images/imagesWeb/footer/linkedin_1.webp" alt="Mi linkedin"
                        onError={(e) => {e.target.src = '/src/media/images/imagesPng/footer/linkedin.png';}}/>
                    <img className="img_footer" src="/src/media/images/imagesWeb/footer/github-gris_1.webp" alt="Mi github"
                        onError={(e) => {e.target.src = '/src/media/images/imagesPng/footer/github-gris.png';}} />
                    <img className="img_footer" src="/src/media/images/imagesWeb/footer/gmail.webp" alt="Mi github"
                        onError={(e) => {e.target.src = '/src/media/images/imagesPng/footer/gmail.png';}} />
                </div>

            </div>
        </footer>
    );
}