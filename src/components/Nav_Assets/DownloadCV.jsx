export const DownloadCV = () => {
    return (  
    <div>
        <a href="/Portafolio/docs/CV_BLAB.pdf" download={"CV_BLAB"}>
            <div className="div_container_cv_download">
                <img className="animation_scale img_assets" id="img_curriculum_nav" src="/Portafolio/img/assets/CV_Naranja.png" alt="boton para descargar curriculum" />
                <img className="download_image img_assets" id="img_download_nav" src="/Portafolio/img/assets/download_orange.png" alt="descargar curriculum" />
            </div>
        </a>
    </div>
    );
}

export default DownloadCV;