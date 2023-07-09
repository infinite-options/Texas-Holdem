import { useState } from "react";

export default function PlayerInfo(props) {
    const [input, setInput] = useState("");
    const [setUsername] = props.setUser;

    return(
        <div>
            <h1>Player Info</h1>
            <div>
                <label>
                    Username: <input name="username" value={input} onChange={(e) => setInput(e.target.value)}/>
                </label>
            </div>
            <button onClick={()=>setUsername(input)}>Load my tables</button>
            <hr />
        </div>
    );
}