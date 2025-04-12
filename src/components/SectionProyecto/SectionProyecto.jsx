import React from 'react'
import '../../styles/sectionProyecto/sectionProyecto.css'
import { Double_bar_title_orange } from '../Assets/Double_bar_title_orange'
import SectionDefault from '../CustomSection/SectionDefault'

export const SectionProyecto = () => {
    return (
            <SectionDefault sectionId={"smooth_proyecto"} title={"Proyectos"}>
                <div>
                    <div style={{textAlign: `center`}}>
                        <h3>I'll work here, coming soon</h3>
                    </div>
                </div>
            </SectionDefault>
    )
}

export default SectionProyecto
