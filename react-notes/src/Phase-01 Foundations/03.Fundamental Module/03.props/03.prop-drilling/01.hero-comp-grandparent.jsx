import React from 'react'
import { Card } from "./02.card-comp-parent"


function HeroComp() {
    let buttonText = "click"
    let textColor = 'white'
    let bg = 'green'
    let os = 'none'
    let padding = '5px 15px'

    return (
        <div>
            <h3>Prop Drilling</h3>
            <Card btnText={buttonText} textColor={textColor} bg={bg} os={os} padding={padding}/>
        </div>
    )
}

export default HeroComp