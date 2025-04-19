import React, { useContext } from 'react';
import { DarkOrLightContext } from "../context/DarkOrLightMode";

export const LightModeToggle = () => {
    const { toggleTheme, isLightMode } = useContext(DarkOrLightContext);
    return (  
    <div id="toggle-dark-mode">
        <div onClick={toggleTheme}>
            <img className="animation_scale img_assets" id="lightnes" src="/Portafolio/img/assets/lightness.png"
                alt="cambiar a modo luz" />
        </div>
    </div>
    );
}