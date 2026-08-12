import {Button} from "./03.button-comp-child";

export function Card({btnText,textColor,bg,os,padding}) {
    return (
        <>
            <div style={{
                border: '1px solid #8f8888',
                padding: '10px', margin: '10px',
                borderRadius: '10px'
            }}>
                <Button btnText={btnText} textColor={textColor} bg={bg} os={os} padding={padding}/>
            </div>
        </>
    )
}