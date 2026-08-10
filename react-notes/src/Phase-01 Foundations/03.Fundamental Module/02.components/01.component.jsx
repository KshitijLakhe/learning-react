//Component --> one default export


//Named Export #01
export function ButtonComp(){
    return <button>Click</button>
}

//Named Export #02
export function InputComp(){
    return <input type="text" />
}

//Default Export
function CardComponent(){
    return <div>
        <p>Card Component!</p>
        <InputComp/>
        <ButtonComp/>
    </div>
}
export default CardComponent