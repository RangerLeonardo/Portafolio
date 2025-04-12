import { Assets } from "../Nav_Assets/Assets";
import "../../styles/sectionPrincipal/sectionPrincipal.css"
import { SectionPresentation } from "../SectionPresentation/SectionPresentation";
import { SectionSobreMi } from "../../components/SectionSobreMi/SectionSobreMi";
import {SectionProyecto} from "../../components/SectionProyecto/SectionProyecto";
import {SectionContactame} from "../../components/SectionContactame/SectionContactame";

export const SectionPrincipal = () => {
    return (
        <>
        <main>
            <Assets />
            <SectionPresentation />
        </main>
        <SectionSobreMi />
        <SectionProyecto />
        <SectionContactame />
        </>  
    );
}