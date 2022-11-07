import React from 'react'
import "../style/LeftNav.scss";
import Virat from "../component/Virat.jpg";
import SideHeading from './SideHeading'
import userinfo from './HeadingList'
import SeeMore from './Button';
import userinformation from './RecentlyAdded';
import moreoption from "./MoreOptionData"

function LeftNav(){
    return(
        <div className='leftNav'>
            <div className='profile'>
            <img src={ Virat } alt="Profile" className='profilePhoto'/>
            <div className='profileName'><b>Virat Kohli</b></div>
            </div> 
            {userinfo.map((menu)=>{
              return (<SideHeading props={menu}/>)
            })}
            <SeeMore data = {moreoption}/>
            <p>Recently added:</p>
            {userinformation.map((menu) => {
            return (<SideHeading props={menu}/>)
        })}
            <SeeMore data={moreoption}/>
        </div>
    )
}
export default LeftNav;