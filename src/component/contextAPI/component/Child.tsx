import { useContext } from "react";
import { CounterContext } from "../CounterContext";

const Child = () => {
    const { counter, setCounter } = useContext(CounterContext);
    return(
        <div style={{
            width: "50%",
            height: "50%",  
            border: "2px solid black", 
            paddingTop: "2rem",
            margin: "auto",
            marginTop: "1rem"
        }}>
            <h2>Controlled by Child</h2>
            <button onClick={ () => setCounter(counter + 1) }>Increment</button>
            <button onClick={ () => setCounter(counter - 1) }>Decrement</button>
        </div>
    );
}

export default Child;