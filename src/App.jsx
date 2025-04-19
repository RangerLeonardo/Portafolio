import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { SectionPrincipal } from "./components/SectionPrincipal/SectionPrincipal";
import SectionContactoExitoso from "./components/SectionFormularioEnviado/SectionFormularioEnviado";
import DarkOrLightMode from "./components/context/DarkOrLightMode";
// import { SpanishOrEnglishContext } from "./components/context/SpanishOrEnglishMode";


function App() {

  return (
    <Router>
      <DarkOrLightMode>
        {/* <SpanishOrEnglishContext> */}
          <Header />
          <Routes>
            <Route path="/Portafolio" element={<SectionPrincipal />} />
            <Route path="/Portafolio/formulario_enviado" element={<SectionContactoExitoso />} />
          </Routes>
          <Footer />
        {/* </SpanishOrEnglishContext> */}
      </DarkOrLightMode>
    </Router>
  )
}

export default App
