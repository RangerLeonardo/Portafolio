import React from 'react'
import Double_bar_title_orange from '../Assets/Double_bar_title_orange'

export const SectionDefaultSecondary = ({sectionId, children, title}) => {
    return (
    <section className="section_default_secondary" id={sectionId}>
        <Double_bar_title_orange title={title} >
        </Double_bar_title_orange>
        {children}
    </section>
    )
}

export default SectionDefaultSecondary
