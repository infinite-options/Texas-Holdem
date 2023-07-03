
export default function Position(props) {
    const [username, position, table] = props.data;
    
    return (
        <div>
            <div>
                <h2> UTG </h2>
                <p>Action: </p>
                <button>Save</button>
                <button>Load</button>
                <button>Reset</button>
            </div>
            
        </div>
    );
}