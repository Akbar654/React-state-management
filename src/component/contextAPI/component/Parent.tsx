import { useContext } from "react";
import Child from "./Child";
import { CounterContext } from "../CounterContext";

const Parent = () => {
    const { counter, setCounter } = useContext(CounterContext);
    return(
        <div style={{
            width: "60%",
            height: "60%",  
            border: "2px solid black", 
            paddingTop: "2rem",
            margin: "auto",
            marginTop: "2rem"
        }}>
            <h2>Controlled by Parent</h2>
            <button onClick={ () => setCounter(counter - 1) }>Decrement</button>
            <button onClick={ () => setCounter(counter + 1) }>Increment</button>
            <Child />
        </div>
    );
}

export default Parent;