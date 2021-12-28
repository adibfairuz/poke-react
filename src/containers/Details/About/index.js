import React from 'react'

function About(props) {
    const {data} = props;
    return (
        <div className='about'>
            {data?.description}
            <div className='items'>
                <div className='item'>Height: {data.height}</div>
                <div className='item'>Weight: {data.weight}</div>
            </div>
        </div>
    )
}

export default About
