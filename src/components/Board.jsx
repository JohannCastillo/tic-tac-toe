import Cell from "./Cell"
import Sidebar from "./Sidebar"
import Bar from "./Bar"
import Controls from "./Controls"
import { TURNS } from "../constants/constants"
import { useSquaresContext, useFunctionsContext } from "../context/GameProvider"

function Board() {

    const game = useSquaresContext()
    const functions = useFunctionsContext()

    const isWinner = game.winner !== null
    const isDraw = game.squares.every(value => value !== null) && !isWinner
    const isXWinner = isWinner && game.squares[game.winner[0]] === TURNS.X
    const iOWinner = isWinner && game.squares[game.winner[0]] === TURNS.O

    return (
        <>
            <article>
                <div style={{ display: 'flex', flexDirection: 'column', width: '100%', alignItems: 'center',}}>
                    <strong className="stateMessage" > {!isWinner && (isDraw ? 'Empate' : 'Siguiente turno ')} </strong>
                    <div style={{display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-between', alignItems: 'center', gap: '0.5rem'}}>
                        <div className="large" style={{display: 'flex', flexDirection: 'column', position: 'relative', color: game.COLORS.winner}}>
                            <strong style={{position: 'absolute', top: '-20px', alignSelf: 'center', visibility: isXWinner ? '' : 'hidden',}}>Ganador</strong>
                            <Bar 
                                children={TURNS.X} 
                                className="button large" 
                                isActive={isWinner ? game.squares[game.winner[0]] === TURNS.X : game.turno === TURNS.X} 
                                isDraw={isDraw}
                            />
                        </div>
                        <div className="large" style={{display: 'flex', flexDirection: 'column', position: 'relative', color: game.COLORS.winner}}>
                            <strong style={{position: 'absolute', top: '-20px', alignSelf: 'center', visibility: iOWinner ? '' : 'hidden'}}>Ganador</strong>
                            <Bar 
                                children={TURNS.O} 
                                className="button large" 
                                isActive={isWinner ? game.squares[game.winner[0]] === TURNS.O : game.turno === TURNS.O} 
                                isDraw={isDraw}
                            />
                         </div>
                    </div>
                </div>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    <div className="board">
                        <Cell key={0} index={0} className="border-top border-left"/>
                        <Cell key={1} index={1} className="border-top"/>
                        <Cell key={2} index={2} className="border-top border-right"/>
                        <Cell key={3} index={3} className="border-left"/>
                        <Cell key={4} index={4} />
                        <Cell key={5} index={5} className="border-right"/>
                        <Cell key={6} index={6} className="border-bottom border-left"/>
                        <Cell key={7} index={7} className="border-bottom"/>
                        <Cell key={8} index={8} className="border-bottom border-right"/>
                    </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <Controls game={game} clearBoard={functions.clearBoard} getHistory={functions.getHistory}/>
                    <button className="button" onClick={functions.toggleMovsVisibility} style={{ visibility: game.movementsVisibility == '' ? 'hidden' : ''  }}> Lista de jugadas </button>
                </div>
            </article>

            <Sidebar
                visibility={game.movementsVisibility}
                toggleMovsVisibility={functions.toggleMovsVisibility}
                title={'Jugadas (' + game.squares.filter((value) => value !== null).length + ')'}
                content={game.squares.every((value) => value === null) ? (
                    <>
                        <small>No se han realizado jugadas</small>
                    </>
                ) : (
                    <>
                        <ul style={{ width: '80%' }}>
                            {
                                game.history.slice(1).map((value, index) => (
                                     <li key={crypto.randomUUID()}>
                                        <button className="historyButton" onClick={() => functions.getHistory(index + 1)}>
                                            Ir a la jugada #{index + 1}
                                        </button>
                                    </li>   
                                ))
                            }
                        </ul>
                    </>
                )}
            />
        </>
    )
}

export default Board