import { createContext, useState, useEffect } from "react";

export const DarkOrLightContext = createContext();

export const DarkOrLightMode = ({ children }) => {
    const [isLightMode, setIsLightMode] = useState(false); // Estado para modo luz

    const toggleTheme = () => {
        setIsLightMode(prevMode => !prevMode); // Alternar entre modo luz y oscuro
    };

     // Cambiar `className` en `body` automáticamente
    useEffect(() => {
        document.body.className = isLightMode ? "light_mode" : "";
        addOrRemoveInvertImage(isLightMode);
    }, [isLightMode]);

    const addOrRemoveInvertImage = (changing) => {
        document.querySelectorAll(".invert_image").forEach(img => {
            img.classList.toggle("invert_image", !changing);
        });
    };

    return (
        <DarkOrLightContext.Provider value={{ isLightMode, toggleTheme }}>
            {children}
        </DarkOrLightContext.Provider>
    );
};

export default DarkOrLightMode;