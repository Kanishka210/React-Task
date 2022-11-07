import React from 'react'
import "../style/LeftNav.scss";
import Virat from "../component/Virat.jpg";
import SideHeading from './SideHeading'
import userinfo from './HeadingList'
import Button from './Button';
import userinformation from './RecentlyAdded'


function LeftNav(){
    return(
        <div className='leftNav'>
            <div className='profile'>
            <img src={ Virat } alt="Profile" className='profilePhoto'/>
            <div className='profileName'><b>Virat Kohli</b></div>
            </div> 
            {userinfo.map((props)=>{
              return (<SideHeading key={props.id} icon={props.icon} name={props.name} count={props.count}/>)
            })}
    
        </div>
    )
}
export default LeftNav;