import { useEffect, useState } from "react";
import Timer from ".././Timer/Timer";
import Buttons from "../Buttons/Buttons";
import './Stopwatch.css'

const Stopwatch = () => {

    const [timer, setTimer] = useState(0)
    const [active, setActive] = useState(false)
    const [pause, setPause] = useState(false)

    useEffect(() => {
        let interval
        if (active && !pause) {
            interval = setInterval(() => {
                setTimer(prevState => prevState + 10)
            }, 10)
        } else {
            clearInterval(interval)
        }
        return () => clearInterval(interval)
    }, [active, pause])

    const stopHandler = () => {
        setActive(false)
        setPause(false)
        setTimer(0)
    }

    const pauseHandler = () => {
        setPause(prev => !prev)
    }

    return (
        <div className="stopwatch">
            <Timer time={ timer } />
            <Buttons active={ active } pause={ pause } setActive={setActive} pauseHandler={ pauseHandler } stopHandler={ stopHandler }  />
        </div>

    )
}

export default Stopwatch;