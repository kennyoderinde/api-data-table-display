import React from "react";
import './Memes.css'
// import { useState, useEffect } from "react";

function Timer() {
   /* const [count, setCount] = useState(0)

    useEffect(() => {
        setTimeout(() => {
            setCount((count) => count + 1 );
        }, 1000);
    }, [])

    return(
        <div>
            <h1>I have render { count } times!</h1>
        </div>

    )

}


 

function Color() {
    const [ color, setColor] = useState(0)
    const [add, setAdd] = useState(0)

    useEffect(() => {
        setAdd(() => color * 2);
    }, [color]);

    return (
        <>
            <p>color: {color}</p>
            <button onClick={() => setColor((a) => a + 1)}> + </button>
            <p>add: { add }</p>
    
        </>
    ) */

    const [isGoingOut, setIsGoingOut] = React.useState(true)

    function changeMind(){
        setIsGoingOut(prevState => !prevState)
    }

return (
    <div className="state">
        <h2 className="state-title">Do you feel like going out?</h2>
        <div onClick={changeMind} className="state-value">
            <h1>{isGoingOut ? "Yes" : "No"}</h1>
        </div>
    </div>
)
}


export default Timer
