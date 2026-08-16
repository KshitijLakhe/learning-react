import React from 'react'

//Rules for keys
//It must be unique(database id is best)
//Avoid array index as key if the list can reorder /insert/remove --> index shift --> react may confuse

function Keys() {
    const users = [
        { id: 1, name: "Ketan" },
        { id: 2, name: "Rahul" },
        { id: 3, name: "Amit" },
        { id: 4, name: "Sneha" }
    ];
    return (
        <>
            <h3>Keys</h3>
            <div>
                <ul>
                    {users.map((user) => <li key={user.id}>{user.name}</li>)}
                </ul>
            </div>
        </>

    )
}

export default Keys