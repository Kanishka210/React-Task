import React from 'react'
function SideHeading(props){
    return(
        
            <div className='headingName'>
                <div className='icon'>{props.icon}</div>
                <div className='name'>{props.name}</div>
                <div className='count'>
                    <div>{props.count}</div>
                </div>
            </div>
        
    )
}
export default SideHeading;