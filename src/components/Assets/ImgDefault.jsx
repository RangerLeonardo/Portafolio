import React from 'react'

const ImgDefault = ({src, alt, title, className}) => {
    return (
        <img 
            src={src} 
            alt={alt} 
            title={title} 
            className={className} />
    )
}

export default ImgDefault