import React, { createContext, useState } from "react";
import GrandParent from "./component/GrandParent";

const initialValue = {
    counter: 0,
    setCounter: ( newCounter: number ) => {}
}

export const CounterContext = createContext(initialValue);


export const CounterProvider = ({children}: any) => {

    const [counter, setCounter] = useState<number>(initialValue.counter);
    
    return(
        <CounterContext.Provider value={{ counter, setCounter }}>
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
        </CounterContext.Provider>
    );
}




