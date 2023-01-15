import React from "react";

export default function Findthing() {

    const [thingsArray, setThingsArray] = React.useState(["Thing 1", "Thing 2"])


    function addItem() {
        setThingsArray(prevState => [...prevState, `Thing ${prevState.length + 1 }`])

        
    }
    const thingsElements = thingsArray.map(value => <p key={value}>{value}</p>)
    return(
        <div className="thing-state">
            <button onClick={addItem} className="">Add Item</button>
            {thingsElements}
        </div>
    )
}