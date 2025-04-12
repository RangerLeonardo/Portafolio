import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { SectionPrincipal } from "./components/SectionPrincipal/SectionPrincipal";
import { SectionSobreMi } from "./components/SectionSobreMi/SectionSobreMi";
import SectionProyecto from "./components/SectionProyecto/SectionProyecto";
import SectionContactame from "./components/SectionContactame/SectionContactame";

function App() {

  return (
    <>
      <Header />
      <SectionPrincipal />
      <SectionSobreMi />
      <SectionProyecto />
      <SectionContactame />
      <Footer />
    </>
  )
}

export default App
