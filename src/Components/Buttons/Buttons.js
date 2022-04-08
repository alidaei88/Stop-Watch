import './Buttons.css'

const Buttons = ({ active, setActive, pauseHandler,pause, stopHandler }) => {
    return (
        <div className='button-container'>
            {
                active ?
                    <>
                        <button className="pause-button" onClick={pauseHandler}>{pause ? "continue" : "pause"}</button>
                        <button className="stop-button" onClick={stopHandler}>stop</button>
                    </>
                    :
                    <button className='start-button' onClick={ ()=>setActive(true) }> Start</button>
            }
            
            
        </div>
        
    )
}

export default Buttons;