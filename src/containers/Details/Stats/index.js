import React from 'react'
import { ProgressBar } from 'react-bootstrap'

function Stats(props) {
    const { data, color } = props
    return (
        <div>
            {
                data.map(item => {
                    return(
                        <div className='mb-2' key={item.stat.name}>
                            <div className='text-uppercase fs-09'>{item.stat.name}</div>
                            <div><ProgressBar variant='soft-black' now={item.base_stat} color={'#'+color} /></div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Stats
