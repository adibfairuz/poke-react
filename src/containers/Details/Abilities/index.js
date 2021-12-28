import React from 'react'

function Abilities(props) {
    const {data} = props;
    return (
        <div>
            {
                data.map(item => {
                    return(
                        <div key={item.ability.name} className='text-capitalize'>- {item.ability.name}</div>
                    )
                })
            }
        </div>
    )
}

export default Abilities
