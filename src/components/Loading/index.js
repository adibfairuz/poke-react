import { Player } from '@lottiefiles/react-lottie-player'
import React from 'react'
import { pikachuAnimation } from '../../assets/images'

function Loading() {
    return (
        <div className='loading'>
            <Player
                autoplay
                loop
                src={pikachuAnimation}
                style={{ height: '260px', width: '260px', marginTop: '60px' }}
                />
            <div className='text-center font-weight-600'>LOADING....</div>
        </div>
    )
}

export default Loading
