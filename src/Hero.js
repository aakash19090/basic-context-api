import React from 'react'

const Hero = ({name}) => {
    if(name === 'Joker'){
        throw new Error('Not a Hero!')
    }
    return (
        <div> {name} </div>
    )
}

export default Hero
