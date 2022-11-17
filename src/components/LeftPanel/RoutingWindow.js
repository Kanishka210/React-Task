import React from "react";

function RoutingWindow({paths}){
    return(
        <div className="routing-component">
            <div className="routing-component-link">
                {paths}
            </div>
        </div>
    )
}
   
export default RoutingWindow;