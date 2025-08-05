import React, {useContext} from 'react'
import { useState } from 'react'
import '../../styles/sectionSobreMi/sectionSobreMi.css'
import Double_bar_title_orange from '../Assets/Double_bar_title_orange';
import { DarkOrLightContext } from "../context/DarkOrLightMode";


export const SectionSobreMi = () => {
    const { toggleTheme, isLightMode } = useContext(DarkOrLightContext);

    const images = [
        "/Portafolio/img/hobbies/gym.png",
        "/Portafolio/img/hobbies/meditation.png",
        "/Portafolio/img/hobbies/leer.png",
        "/Portafolio/img/hobbies/games.png",
        "/Portafolio/img/hobbies/reirme.png",
        "/Portafolio/img/hobbies/programacion.png",
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isFlipping, setIsFlipping] = useState(false);
    const notInvertImage = isLightMode ? "" : "invert_image";

    const handlePrevious = () => {
        setIsFlipping(true);
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
            setIsFlipping(false);
        }, 300); 
    };

    const handleNext = () => {
        setIsFlipping(true);
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
            setIsFlipping(false);
        }, 300);
    };
    return (
        <section className='section_sobre_mi' id='smooth_sobre_mi'>
            <div className="div_sobre_mi">
                <Double_bar_title_orange title="Sobre mí" >
                    {/** SOBRE MI */}
                </Double_bar_title_orange>

                <Double_bar_title_orange title="Hobbies" >
                    {/** HOBBIES */}
                </Double_bar_title_orange>

                
                <div className='div_sobre_mi_texto'>
                    <div className='div_sobre_mi_texto_info'>
                        <h4>"El maestro se ha equivocado más veces de lo que el estudiante lo ha intentado."</h4>
                        <p>Soy un desarrollador web apasionado por crear experiencias digitales funcionales y atractivas.
                            Me especializo en transformar ideas en proyectos sólidos mediante tecnologías modernas.</p>
                        <p>
                            Mi enfoque se centra en la eficiencia, el diseño intuitivo y la optimización del rendimiento. 
                            Tengo experiencia en tecnologías como Java, Spring framework, React.JS y CSS avanzado para desarrollar interfaces dinámicas.
                        </p>
                        <p>
                            Siempre busco la forma de ahorrar costos y tiempo en todo lo que hago, puedes tener la seguridad de que tu proyecto
                            será óptimo y eficiente.
                        </p>
                    </div>
                </div>
                <div className='div_mis_hobbies'>
                    
                    <div className='triangulo_up animation_scale' onClick={handlePrevious}>{/* IZQUIERDO */}</div>

                    <div className='div_hobbies_img'>
                        <div className='div_hobbies_center'>
                            <div className='div_hobbies_img_border'>
                                <img src={images[currentIndex]} alt="Hobby" className={`${notInvertImage} ${isFlipping ? 'flip-animation' : ''}`}/>
                            </div>
                        </div>
                    </div>

                    <div className='triangulo_down animation_scale' onClick={handleNext}>{/* DERECHO */}</div>
                </div>

            </div>
        </section>
    )
}

export default SectionSobreMi
