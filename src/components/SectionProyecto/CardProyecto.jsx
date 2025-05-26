import React from 'react'
import ImgDefault from '../Assets/ImgDefault';


export const CardProyecto = ({cardItem}) => {
    const technologies = cardItem.technologies;
    const imgData = cardItem.imgData;
    const positionClass = cardItem.position || "hidden";
    return (
        <div className={`card ${positionClass}`}>
            {/* IMG  */}
            <div className='image_placeholder'>
                <div className='div_img_to_show'>
                    {imgData.map((data)=>{
                        return <ImgDefault 
                            src={data.src} 
                            title={data.title} 
                            alt={data.alt}
                            className={data.className}/>
                    })}
                </div>
            </div>
            {/* Content */}
            <div className='card_content project_card'>
                <div>
                    <h3>{cardItem.title}</h3>
                </div>
                <div>
                    <ul>
                        {technologies.map((tech, index) => {
                            return <li key={index}>{tech}</li>
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default CardProyecto;