import React from 'react'

function CommonTabs() {
    return (
        <div className='common-tabs'>
            <div className='tabs'>
                <div className='tab'>about</div>
                <div className='tab active'>stats</div>
                <div className='tab'>evolution</div>
                <div className='tab'>moves</div>
            </div>
            <div className='component'></div>
        </div>
    )
}

export default CommonTabs
