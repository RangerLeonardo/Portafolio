import { DownloadCV } from "./DownloadCV";
import { LanguageToggle } from "./LanguageToggle";
import { LightModeToggle } from "./LightModeToggle";
import "../../styles/assets/assets.css"

export const Assets = () => {
    return (
        <div id="smooth_inicio_logo"> 
            <div className="luz_traduccion_download" id="smooth_inicio">
                <LightModeToggle />
                <LanguageToggle />
                <DownloadCV />
            </div>
        </div>
    );
}