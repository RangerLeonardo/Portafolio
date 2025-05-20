export const SectionPresentation = () => {
    return ( 
        <section className="section_contenido_principal">
            <div className="div_contenido_principal">

                <div className="myName">
                    <h1>ADATA<br/>BARRERA<br/>BRANDON<br/>LEONARDO</h1>
                </div>

                <div className="div_mi_foto">
                    <img className="img_mi_foto" src="/Portafolio/img/MiFoto/Inouske.png" alt="Foto de como me veo" />
                </div>

                <div className="div_info_principal">
                    <div className="div_info">
                        <div className="div_generico">
                            <div>
                                <h2 className="info_title">Desarrollador WEB</h2>
                            </div>
                            <div className="div_linea_generica">
                                <hr className="linea_generica_principal"/>
                            </div>
                        </div>
                        <div className="info_p">
                            <div className="info_subtitle">
                                <p>Viviendo en Michoacán, México. <br/> Desarrollador full stack.</p>
                            </div>
                            <div className="info_desc">
                                <p>"El hombre no puede obtener nada sin <br/> primero dar algo a cambio..."</p>
                            </div>
                        </div>
                        
                    </div>
                </div>

            </div>
        </section>
    );
}