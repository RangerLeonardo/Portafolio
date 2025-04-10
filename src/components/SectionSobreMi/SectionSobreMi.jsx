import React from 'react'
import { useState } from 'react'
import '../../styles/sectionSobreMi/sectionSobreMi.css'

export const SectionSobreMi = () => {
    const images = [
        "/Portafolio/img/assets/lightness.png",
        "/Portafolio/img/assets/Español.png",
        "/Portafolio/img/hobbies/dumbblles.png",
        "/Portafolio/img/hobbies/weights.png",
        "/Portafolio/img/hobbies/weight.png",


    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isFlipping, setIsFlipping] = useState(false); // Estado para la animación

    const handlePrevious = () => {
        setIsFlipping(true);
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
            setIsFlipping(false);
        }, 300); // Ajusta el tiempo para sincronizar con la animación
    };

    const handleNext = () => {
        setIsFlipping(true);
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
            setIsFlipping(false);
        }, 300);
    };
    return (
        <section className='section_sobre_mi'>
            <div className="div_sobre_mi">
                <div className="div_generico div_lineas_genericas">
                    <div className="div_lineas_generica">
                            <hr className="linea_generica_principal"/>
                    </div>

                    <div>
                        <h2 className="info_title">Sobre mí</h2>
                    </div>

                    <div className="div_lineas_generica">
                        <hr className="linea_generica_principal"/>
                    </div>
                </div>

                <div className="div_generico div_lineas_genericas">
                    <div className="div_lineas_generica">
                        <hr className="linea_generica_principal"/>
                    </div>
                    <div>
                        <h2 className="info_title">Hobbies</h2>
                    </div>
                    <div className="div_lineas_generica">
                        <hr className="linea_generica_principal"/>
                    </div>
                </div>

                
                <div className='div_sobre_mi_texto'>
                    <h4>"El maestro se ha equivocado más veces de lo que el estudiante lo ha intentado."</h4>
                    <p>Soy un desarrollador web apasionado por crear experiencias digitales funcionales y atractivas.
                        Me especializo en transformar ideas en proyectos sólidos mediante tecnologías modernas.
                        <br />
                        <br />
                        Mi enfoque se centra en la eficiencia, el diseño intuitivo y la optimización del rendimiento. 
                        Tengo experiencia en tecnologías como Java, Spring framework, React JS y CSS avanzado para desarrollar interfaces dinámicas.
                    </p>
                </div>
                <div className='div_mis_hobbies'>
                    <div className='triangulo_up animation_scale' onClick={handlePrevious}>{/* IZQUIERDO */}</div>

                    <div className='div_hobbies_img'>
                        <img src={images[currentIndex]} alt="Hobby" className={`invert_image ${isFlipping ? 'flip-animation' : ''}`}/>
                    </div>

                    <div className='triangulo_down animation_scale' onClick={handleNext}>{/* DERECHO */}</div>
                </div>

            </div>
        </section>
    )
}

export default SectionSobreMi
