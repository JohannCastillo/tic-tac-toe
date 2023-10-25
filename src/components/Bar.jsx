import { COLORS } from "../constants/constants"
function Bar(props){

    const turno = props.isActive && COLORS.turn
    const draw = props.isDraw

    return(
        <>
            <button className={props.className} style={{backgroundColor: !draw && turno,}}>{props.children}</button>
        </>
    )
}

export default Bar
