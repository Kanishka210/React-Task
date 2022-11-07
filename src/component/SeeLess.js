import React from "react";
import SideHeading from "./SideHeading";
import moreoption from "./MoreOptionData";
function SeeLess(){
    return(
        <div>
            {moreoption.map((menu) =>{
                return (<SideHeading key={menu.id} icon={menu.icon} name={menu.name} count={menu.count}/>)
            })}
        </div>
    )
}
export default SeeLess;