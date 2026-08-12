import React from "react";

export function UserCardProps(props) {
    console.log('props',props);
    
    return (
        <div style={{border:"1px solid #9e8e8e",padding:'10px',margin:'10px'}}>
            <h3>Props using 'props' keyword</h3>
            <h3>Name:{props.name}</h3>
            <p>Status:{props.isActive ? 'Active' : 'Not Active'}</p>
        </div>
    )
}

//use property as it is or we can rename it
export function UserCardDestructured({name:userName,isActive:status}) {
    return (
        <div style={{border:"1px solid #9e8e8e",padding:'10px',margin:'10px'}}>
            <h3>Props using destructured</h3>
            <h3>Name:{userName}</h3>
            <p>Status:{status ? 'Active' : 'Not Active'}</p>
        </div>
    )
}