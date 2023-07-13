import Lobby from "../components/Lobby";
import Preflop from "../components/Preflop";

export default function EngineTest() {
    return(
        <div>
            {console.log("Test Loaded")}
            <Lobby />
            <Preflop />
        </div>
    );
}