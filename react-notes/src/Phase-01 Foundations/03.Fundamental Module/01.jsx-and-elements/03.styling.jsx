//1.Inline Style Object
//2.Plain CSS file + className
//3.CSS Modules + styles.<name>

import "./style.css"
import styles from "./style.module.css"

function Styling() {
    return (
        <>
            {/* inline style */}
            <div style=
                {{
                    height: '15vh',
                    width: '10vw',
                    backgroundColor: 'orange',
                    margin: '10px'
                }}>
            </div>
            {/* external style */}
            <div className="box-style"></div>

            {/* module style */}
            <div className={styles.boxSection}></div>
        </>
    )
}
export default Styling