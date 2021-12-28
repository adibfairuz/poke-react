import React from 'react'
import {BsArrowLeft} from 'react-icons/bs'
import { AiFillHeart } from 'react-icons/ai'

function DetailsLayout(props) {
    const {data, isFavorited} = props
    const handleBack = () => {
        props?.handleBack?.()
    }
    const handleFavorite = () => {
        props?.handleFavorite?.()
    }
    return (
        <div className='details-layout'>
            <div className='top' style={{background: `rgb(${data.bg_color_rgb}, 0.5)`}}>
                <div className='icons'>
                    <span className='icon'>
                        <BsArrowLeft size={28} color='#4e4e4e' onClick={handleBack} />
                    </span>
                    <span className='icon'>
                        <AiFillHeart size={28} color={isFavorited ? '#B91646' : '#4e4e4e'} onClick={handleFavorite} />
                    </span>
                </div>
                <div className='title'>
                    <div className='name'>{data.name}</div>
                    <div>#000{data.id}</div>
                </div>
                <div className='types'>
                    {data.types?.map?.(item => {
                        return(
                            <span key={item.type.name} className='type'>{item.type.name}</span>
                        )
                    })}
                </div>
            </div>
            <div className='bottom'>
                <img className='img' src={data.image_url} />
                {props.children}
            </div>
        </div>
    )
}

export default DetailsLayout
