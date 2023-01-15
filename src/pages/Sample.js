import React, { useEffect, useState } from "react";
import MemesData from "./MemesData";
import axios from 'axios'
import '../Components/Sample.css'


export default function Sample() {
//    const [result, setResult]= React.useState("Yes")
//    console.log(result)

//    function handleClick() {
//     setResult('YES')
    
//     }
//    return(
//     <div>
//         <h1 onClick={() => handleClick('YES')}>{result}</h1>
//     </div>
//    )

/*const [value, setValue] = React.useState("yes")

function handleClick() {
    setValue("YES")
}

return(
    <div>
        <button onClick={() => handleClick("yes")}>{value}</button>
    </div>
)*/


/*const [count, setCount ] = React.useState(0)


//ADD COUNT FUNCTION
function add() {
    console.log("Add")
    setCount( prevCount => prevCount + 1)

}

function minus() {
    console.log("Minus")
    setCount(prevCount => prevCount -1)

}

return(
    <div className="counter">
        <button className="minus" onClick={minus}>-</button>
        <div>
            <h3>{count}</h3>
        </div>
        <button className="plus" onClick={add}>+</button>

    </div>
)*/

/*const [count, setCount] = React.useState(0)


function add(){
    setCount(prevCount => prevCount + 1)
}

function minus(){
    setCount(prevCount => prevCount - 1)
}
return(
    <div>
        <button onClick={add}>+</button>
        <div>
            <h1>{count}</h1>
        </div>
        <button onClick={minus}>-</button>
    </div>
)*/


const [posts, setPosts] = useState([])
const [id, setId] = useState(1)
const [idFromButtonClick, setIdFromButtonClick] = useState(1)

const handleClick = () => {
    setIdFromButtonClick(id)
}

useEffect(() => {
    axios
        .get('https://jsonplaceholder.typicode.com/albums/1/photos')
        .then(res => {
            console.log(res)
            setPosts(res.data)
        })
        .catch(err => {
            console.log(err)
        })

}, [idFromButtonClick])


return(
    <body className="body-background">
        <input type="text" value={id} onChange={e => setId(e.target.value)} />
        <button type="button" onClick={handleClick}>Fetch Post</button>
        

        
         <div className="card-container">
            { 
            posts.map(values => (
                <div className="tiles" 
                key={values.title}>
                    <img src={values.url} />
                    <p className="tile-title">{values.title}</p>

                    <h4 className="tile-id">{values.id}</h4>
                    
                    
                </div>
            ))}
        </div>  
    </body>
    )
}




