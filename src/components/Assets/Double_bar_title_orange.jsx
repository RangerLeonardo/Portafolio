export const Double_bar_title_orange = ({title}) => {
    return (
        <div>
            <div className="div_generico div_lineas_genericas">
                <div className="div_lineas_generica">
                        <hr className="linea_generica_principal"/>
                </div>

                <div>
                    <h2 className="info_title">{title}</h2>
                </div>

                <div className="div_lineas_generica">
                    <hr className="linea_generica_principal"/>
                </div>
            </div>
        </div>
    )
}

export default Double_bar_title_orange
