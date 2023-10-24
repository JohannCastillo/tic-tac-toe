
function Bar(props){

    const turno = props.isActive && '#0096c0'
    const draw = props.isDraw

    return(
        <>
            <button className={props.className} style={{backgroundColor: !draw && turno,}}>{props.children}</button>
        </>
    )
}

export default Bar
