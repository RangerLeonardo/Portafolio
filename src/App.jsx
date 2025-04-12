import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { SectionPrincipal } from "./components/SectionPrincipal/SectionPrincipal";
import SectionContactoExitoso from "./components/SectionContactoExitoso/SectionContactoExitoso";


function App() {

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/Portafolio" element={<SectionPrincipal />} />
        <Route path="/Portafolio/formulario_enviado" element={<SectionContactoExitoso />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
