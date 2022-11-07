import React from 'react'
function SideHeading(props){
    const value=props.props;
    return(
        
            <div className='headingName'>
                <div className='icon'>{value.icon}</div>
                <div className='name'>{value.name}</div>
                <div className='count'>
                    <div>{value.count}</div>
                </div>
            </div>
        
    )
}
export default SideHeading;