import { Assets } from "../Nav_Assets/Assets";
import { SectionPresentation } from "../SectionPresentation/SectionPresentation";
import "../../styles/sectionPrincipal/sectionPrincipal.css"

export const SectionPrincipal = () => {
    return (  
        <main>
            <Assets />
            <SectionPresentation />
        </main>
    );
}