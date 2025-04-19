import React from 'react'
import { NavLink } from 'react-router-dom'
import { SectionDefaultSecondaryNoDoubleBar } from '../CustomSection/SectionDefaultSecondaryNoDoubleBar'
import "../../styles/SectionFormularioEnviado/sectionFormularioEnviado.css"

export const SectionFormularioEnviado = () => {
    return (
        <SectionDefaultSecondaryNoDoubleBar sectionId="section_formulario_enviado" customClassName={"section_default_secondary_formulario_enviado"}>
            <div className='div_formulario_enviado'>
                <div>
                    <h2>¡Gracias por ponerte en contacto, recibirás una respuesta lo más pronto posible!</h2>
                </div>
                <div className='div_container_formulario_enviado_img'>
                    <div className='div_formulario_enviado_img animation_scale'>
                        <NavLink to="/Portafolio">
                            <img src="/Portafolio/img/logo/Logo.webp" alt="Logo, regreso a la página principal" />
                        </NavLink>
                    </div>
                    <div className='div_formulario_enviado_img animation_scale'>
                        <a href="https://www.linkedin.com">
                            <img src="/Portafolio/img/footer/linkedin_1.webp" alt="Ir a linkedin" />
                        </a>
                    </div>
                    <div className='div_formulario_enviado_img animation_scale'>
                        <a href="https://www.google.com"></a>
                        <img src="/Portafolio/img/assets/google.jpg" alt="Ir a google" />
                    </div>
                </div>
            </div>
        </SectionDefaultSecondaryNoDoubleBar>
    )
}

export default SectionFormularioEnviado
