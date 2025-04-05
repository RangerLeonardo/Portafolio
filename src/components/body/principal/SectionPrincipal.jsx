import { Assets } from "./Assets/Assets";
import { SectionPresentation } from "./SectionPresentation/SectionPresentation";

export const SectionPrincipal = () => {
    return (  
        <main>
            <Assets />
            <SectionPresentation />
        </main>
    );
}