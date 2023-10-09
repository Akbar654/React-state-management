import Parent from "./Parent";

const GrandParent = () => {
    return(
        <div style={{
            width: "90%",
            height: "90%",  
            border: "2px solid black", 
            paddingTop: "2rem",
            margin: "auto",
        }}>
            <h2>Controlled by Grand Parent</h2>
            <button>Increment</button>
            <button>Decrement</button>
            <Parent />
        </div>
    );
}

export default GrandParent;