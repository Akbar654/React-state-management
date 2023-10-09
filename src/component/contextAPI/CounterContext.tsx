import { createContext, useState } from "react";

const initialValue = {
    counter: 0,
    setCounter: () => {}
}

export const CounterContext = createContext(initialValue);



