import { useContext } from "react";
import { CounterContext, CounterProvider } from "./CounterContext";

const ContextApi = () => {
    
    return (
        <CounterProvider>
            <></>
        </CounterProvider>
    );
}

export default ContextApi;