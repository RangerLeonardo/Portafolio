import React from 'react'
import '../../styles/sectionContactame/sectionContactame.css'
import { Double_bar_title_orange } from '../Assets/Double_bar_title_orange'
import SectionDefaultSecondary from '../CustomSection/SectionDefaultSecondary'
import FormularioContactame from './FormularioContactame'

const SectionContactame = () => {
    return (
        <SectionDefaultSecondary sectionId='smooth_contactame' title='Contáctame'>
            <div className='div_principal_contactame'>
                <FormularioContactame />
            </div>
        </SectionDefaultSecondary>
    )   
}

export default SectionContactame
