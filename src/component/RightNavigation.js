import React from 'react'
import { useState, useEffect } from 'react'
import "../style/RightNavigation.scss";
import MessageCard from './MessageCard';
import PostCard from './PostCard';

function RightNavigation(){
    const[state,setState]=useState([])
    const fun=(value) => {
        setState([...state,{value}]);
    };


    return(
       <div className='right-navigation'>
        <MessageCard content={fun}/>
        {/* <PostCard/> */}
        {state.slice(0).reverse().map((post) => (<PostCard content={post.value}/>))}
       </div>
    )
}
export default RightNavigation;


        