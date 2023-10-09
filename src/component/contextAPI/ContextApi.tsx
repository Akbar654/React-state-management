import { useContext } from "react";
import GrandParent from "./component/GrandParent";
import { CounterContext } from "./CounterContext";

const ContextApi = () => {
    const { counter, setCounter } = useContext(CounterContext);
    console.log('context',counter, setCounter)
    return (
        <div style={{
            width: "100vw",
            height: "100vh", 
            textAlign: "center", 
            border: "2px solid black", 
            paddingTop: "2rem",
        }}>
            <h4>Counter Value is Managing by ContextAPI</h4>
            <h3>Counter is: {counter}</h3>
            <GrandParent />
        </div>
    );
}

export default ContextApi;