import React from 'react'
function SideHeading(menu){
    const value=menu.props;
    return(
        
            <div className='heading-name'>
                <div className='icon-feature'>
                <div className='icon'>{value.icon}</div>
                <div className='name'>{value.name}</div>
                </div>
                <div className='count'>
                    <div>{value.count}</div>
                </div>
            </div>
        
    )
}
export default SideHeading;