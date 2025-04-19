import React from 'react'

export const SectionDefaultSecondaryNoDoubleBar = ({customClassName, sectionId, children}) => {
    return (
        <section className={`${customClassName != "" ? customClassName : "section_default_secondary" }`} id={sectionId}>        
            {children}
        </section>
    )
}

export default SectionDefaultSecondaryNoDoubleBar
