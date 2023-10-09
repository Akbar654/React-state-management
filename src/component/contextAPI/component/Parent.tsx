import Child from "./Child";

const Parent = () => {
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
            <button>Increment</button>
            <button>Decrement</button>
            <Child />
        </div>
    );
}

export default Parent;