import Lobby from "../components/engineComponents/Lobby";
import Preflop from "../components/engineComponents/Preflop";

export default function EngineTest() {
    return(
        <div>
            {console.log("Test Loaded")}
            <Lobby />
            <Preflop />
        </div>
    );
}