import { useContext } from "react";
import Parent from "./Parent";
import { CounterContext } from "../CounterContext";

const GrandParent = () => {
    const { counter, setCounter } = useContext(CounterContext);
    return(
        <div style={{
            width: "90%",
            height: "90%",  
            border: "2px solid black", 
            paddingTop: "2rem",
            margin: "auto",
        }}>
            <h2>Controlled by Grand Parent</h2>
            <button onClick={ () => setCounter(counter - 1) }>Decrement</button>
            <button onClick={ () => setCounter(counter + 1) }>Increment</button>
            <Parent />
        </div>
    );
}

export default GrandParent;