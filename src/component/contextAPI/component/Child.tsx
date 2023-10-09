const Child = () => {
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
            <button>Increment</button>
            <button>Decrement</button>
        </div>
    );
}

export default Child;