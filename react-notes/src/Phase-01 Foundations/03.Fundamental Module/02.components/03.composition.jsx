import React from 'react'
import CardComp, { ButtonComp, InputComp } from "./01.component"

//composition :Building simple UI from smaller components

const CompostionExamples = () => {
    return (

            <div>
                <p>Composition component</p>
                <CardComp />
            </div>
       

    )
}

export default CompostionExamples