import React from 'react'
import { AiFillHeart } from 'react-icons/ai'
import { BiTrash } from 'react-icons/bi'

function Card(props) {
    const data = props.data;

    const handleRemove = (e) => {
        e.preventDefault()
        e.stopPropagation()
        props?.handleRemove?.()
    }

    const handleClick = () => {
        props?.handleClick?.()
    }
    return (
        <div className='card' style={{backgroundColor: `rgba(${data.bg_color_rgb}, 0.5)`}} onClick={handleClick}>
            <BiTrash onClick={handleRemove} className='fav-btn' size={28} color="#f1f3f4" />
            <img className='img' src={data.image_url} />
            <div className='name'>{data.name}</div>
            <div className='id'>#00{data.id}</div>
            <div className='types'>
                {data.types.map(item => {
                    return(
                        <span key={item.type.name} className='type'>{item.type.name}</span>
                    )
                })}
            </div>
        </div>
    )
}

export default Card
