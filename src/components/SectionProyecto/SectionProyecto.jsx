import { React, useState, useEffect } from 'react';
import '../../styles/sectionProyecto/sectionProyecto.css'
import SectionDefault from '../CustomSection/SectionDefault'
import CardData from '../../DB/CardData/CardData';
import CardProyecto from './CardProyecto';

export const SectionProyecto = () => {
    const [currentCenterIndex, setCurrentCenterIndex] = useState(0);
    const [cards, setCards] = useState(CardData);

    useEffect(() => {
        updateCards();
    }, [currentCenterIndex]);

    const updateCards = () => {
        const totalCards = cards.length;
        setCards(cards.map((card, index) => {
            let diff = index - currentCenterIndex;
            if (diff > totalCards / 2) diff -= totalCards;
            else if (diff < -totalCards / 2) diff += totalCards;

            return {
                ...card,
                position: diff === -1 || (totalCards === 2 && diff === 1) ? 'left'
                    : diff === 0 ? 'center'
                        : diff === 1 || (totalCards === 2 && diff === -1) ? 'right'
                            : 'hidden'
            };
        }));
    };

    const nextCard = () => {
        setCurrentCenterIndex((currentCenterIndex + 1) % cards.length);
    };

    const prevCard = () => {
        setCurrentCenterIndex((currentCenterIndex - 1 + cards.length) % cards.length);
    };

    return (
        <SectionDefault sectionId={"smooth_proyecto"} title={"Proyectos"}>
            <div className='section_proyecto_container'>
                <div className='section_proyecto'>
                    <div className='carousel_wrapper'>
                        <div>
                            <button className="triangulo_left animation_scale left" onClick={prevCard} title="Anterior" type='button'></button>
                        </div>

                        <div className="carousel_container">
                            <div id="cardContainer">
                                {cards.map((card, index) => {
                                    return <CardProyecto cardItem={card} key={index} />
                                })}
                            </div>
                        </div>

                        <div>
                            <button className="triangulo_right animation_scale right" onClick={nextCard} title="Siguiente" type='button'></button>
                        </div>
                    </div>
                </div>
            </div>
        </SectionDefault>
    )
}

export default SectionProyecto
