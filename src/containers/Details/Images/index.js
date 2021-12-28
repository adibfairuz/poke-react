import React from 'react'

function Images(props) {
    const {data} = props;
    return (
        <div className='d-flex justify-content-between flex-wrap'>
            {
                data.map(item => {
                    return(
                        <img key={item} src={item} style={{width: 90, height: 90}} />
                    )
                })
            }
        </div>
    )
}

export default Images
