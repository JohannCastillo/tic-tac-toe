
export default function controls({game, clearBoard, getHistory}){ 
    return (
        <>  
         <div style={{display:'flex', justifyContent:'center', gap: '0.5rem'}}>
            <button className="button" onClick={clearBoard}><i className="fa-solid fa-rotate-right"></i></button>
            <div style={{ display: 'flex', width: '100%'}}>
                <button className="button large" onClick={() => getHistory(0)}><i className="fa-solid fa-backward" ></i></button>
                <button className="button large" onClick={() => getHistory(game.historyIndex-1)} disabled={game.historyIndex === 0}><i className="fa-solid fa-backward-step"></i></button>
                <button className="button large" onClick={() => getHistory(game.historyIndex+1)} disabled={game.historyIndex + 1 >= game.history.length} ><i className="fa-solid fa-forward-step"></i></button>
                <button className="button large" onClick={() => getHistory(game.history.length-1)}> <i className="fa-solid fa-forward-fast"></i> </button>
            </div>
        </div>
        </>
    )
}