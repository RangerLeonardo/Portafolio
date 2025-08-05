import ImgDefault from '../Assets/ImgDefault';


export const CardProyecto = ({cardItem}) => {
    const technologies = cardItem.technologies;
    const positionClass = cardItem.position || "hidden";
    return (
        <div className={`card ${positionClass}`}>
            {/* IMG  */}
            <div className='image_placeholder'>
                <div className='div_img_to_show image-container-test'>
                        <ImgDefault
                            src={cardItem.imgData.src} 
                            title={cardItem.imgData.title} 
                            alt={cardItem.imgData.alt}
                            className={cardItem.imgData.className}/>

                </div>
            </div>
            {/* Content */}
            <div className='card_content project_card'>
                <div className='div_title_card_project'>
                    <h3>{cardItem.title}</h3>
                </div>
                <div>
                    <ul className='ul_card_project'>
                        {technologies.map((tech, index) => {
                            return <li key={index}>{tech}</li>
                        })}
                    </ul>
                </div>
                <div className='div_link_card_project'>
                    <a href={cardItem.urlToGitHub} target='_blank'>Ver proyecto</a>
                </div>
            </div>
        </div>
    )
}

export default CardProyecto;