import React from 'react'
import Des from './Des'
import Emo from './Emo'


const Card = ({ string,url }) => {

    return (
        <>
            <Des ime={string} />
            <Emo img={url} />
        </>
    )
}

export default Card


