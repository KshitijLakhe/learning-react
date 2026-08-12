export function Button({btnText,textColor,bg,os,padding}){
    return <button style={{backgroundColor:bg,color:textColor,border:os,padding:padding}}>{btnText}</button>
}

