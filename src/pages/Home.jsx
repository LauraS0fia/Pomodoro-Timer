import { Link } from "react-router-dom";
import './Home.css'
import { useState, useEffect } from "react";

function Home() {
    // time state
    const [time, setTime] = useState(1500); //25 min
    const [isRunning, setIsRunning] = useState(false);

    //time format
    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;

        return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
    }

    // effect clock running
    useEffect(() => {
        if (!isRunning) return;
        const interval = setInterval(() => {
            setTime((prev) => (prev > 0 ? prev - 1 : 0));
        }, 1000);

        return () => clearInterval(interval);
    }, [isRunning]);


    return (
        <div>
            <div className='first-container'>
                <h1>PomodoroTimer</h1>
                <div className="time-container">
                    <div className="button-container" >
                        <button onClick={() => setTime(1500)}>Focus</button>
                        <button onClick={() => setTime(300)}>Short break</button>
                        <button onClick={() => setTime(900)} >Long break</button>
                    </div>

                    <div className="clock">
                        <h2>{formatTime(time)}</h2>
                        <div className="action-buttons">
                            <button onClick={() => setIsRunning(true)}>Start</button>
                            <button onClick={() => setIsRunning(false)}>Pause</button>
                            <button
                                onClick={() => {
                                    setIsRunning(false);
                                    setTime(1500);
                                }}
                            > Reset
                            </button>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}
export default Home