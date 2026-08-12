//babel compiler -> jsx -> js
//JSX --> JAVASCRIPT + XML
function JsxBasic() {
    const fname = 'Ketan'
    const year = 2026
    const isActive = true
    const skills = ['Angular', 'React', 'MongoDb', 'nodeJs']
    const styles = { width: 100, height: 100, background: 'orange' }
    const greeting = (guest) => `Hi ${guest}`
    console.log('fname', fname)
    return (
        <div>
            <p>JSX Basic</p>
            <h1>Name:{fname}</h1>
            <p>He joined organization in {year} and left in {year + 30}.</p>
            <p>Status:{isActive ? 'Active' : 'Inactive'}</p>
            <p>Username:{isActive && `${fname} Patil`}</p>


            <h3>Skillset</h3>
            <ul>
                {skills.map((skill, i) => <li key={i}>{skill}</li>)}
            </ul>

            <div>
                {/* disply purpose only */}
                {JSON.stringify(styles)}
            </div>

            <h4>object usecase</h4>
            <div style={styles}></div>

            <h4>function</h4>
            <p>{greeting('vishal')}</p>

        </div>


    )

}

export default JsxBasic