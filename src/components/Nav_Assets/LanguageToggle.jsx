import { useContext } from "react";
// import { SpanishOrEnglishContext } from "../context/SpanishOrEnglishMode";

export const LanguageToggle = () => {
    // const { toggleLanguage, isSpanishMode } = useContext(SpanishOrEnglishContext);
    const languageModeIcon = true ? "/Portafolio/img/assets/English.png" : "/Portafolio/img/assets/Español.png";

    return ( 
    <div>
        <div>
            <img className="animation_scale img_assets" id="img_ingles" src={languageModeIcon}
                alt="Cambiar lenguaje a inglés." />
        </div>
    </div>
    );
}