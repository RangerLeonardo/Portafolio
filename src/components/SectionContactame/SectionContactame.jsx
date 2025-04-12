import React from 'react'
import '../../styles/sectionContactame/sectionContactame.css'
import SectionDefaultSecondary from '../CustomSection/SectionDefaultSecondary'
import FormularioContactame from './FormularioContactame'

export const SectionContactame = () => {
    return (
        <SectionDefaultSecondary sectionId='smooth_contactame' title='Contáctame'>
            <div className='div_principal_contactame'>
                <FormularioContactame />
            </div>
        </SectionDefaultSecondary>
    )   
}

export default SectionContactame
