import { DownloadCV } from "./DownloadCV";
import { LanguageToggle } from "./LanguageToggle";
import { LightModeToggle } from "./LightModeToggle";

export const Assets = () => {
    return (  
    <div className="luz_traduccion_download">
        <LightModeToggle />
        <LanguageToggle />
        <DownloadCV />
    </div>
    );
}