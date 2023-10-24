import MyButton from "./Button";

function Board(props){
    return (
        <>
            <div className="board">
                <MyButton key={0} index={0}></MyButton>
                <MyButton key={1} index={1}></MyButton>
                <MyButton key={2} index={2}></MyButton>
                <MyButton key={3} index={3}></MyButton>
                <MyButton key={4} index={4}></MyButton>
                <MyButton key={5} index={5}></MyButton>
                <MyButton key={6} index={6}></MyButton>
                <MyButton key={7} index={7}></MyButton>
                <MyButton key={8} index={8}></MyButton>
            </div>
        </>
    )
}

export default Board