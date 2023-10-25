function Sidebar(props) {

    return (
        <>
            <aside className="aside" style={{ visibility: props.visibility }}>
                <button className="button" onClick={props.toggleMovsVisibility} style={{ position: 'absolute', top: '0', right: '0', marginTop: '10px', marginRight: '10px' }}>x</button>
                <h3 style={{marginTop: '50px'}}>{props.title}</h3>
                <article style={{ width: '80%' }}>
                    {props.content}
                </article>
            </aside>
        </>
    )
}

export default Sidebar