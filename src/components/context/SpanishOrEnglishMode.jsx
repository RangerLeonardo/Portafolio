import { createContext, useState } from "react";

export const SpanishOrEnglishContext = createContext();

export const SpanishOrEnglishMode = ({ children }) => {
    const [isSpanishMode, setIsSpanishMode] = useState(false); // Estado para modo Espanol

    const toggleLanguage = () => {
        setIsSpanishMode(prevMode => !prevMode); // Alternar entre modo luz y oscuro
    };

    return (
        <SpanishOrEnglishContext.Provider value={{ isSpanishMode, toggleLanguage }}>
            {children}
        </SpanishOrEnglishContext.Provider>
    );
};

export default SpanishOrEnglishMode;