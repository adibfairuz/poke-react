import React from 'react'

function BottomTabs(props) {
    return (
        <div className='bottom-tabs-wrapper'>
            <div className='bottom-tabs'>{props.children}</div>
        </div>
    )
}

function Tab(props) {
    return(
        <div className={`tab ${props.active ? 'active' : ''}`}>{props.children}</div>
    )
}

export {
    Tab
}

export default BottomTabs
