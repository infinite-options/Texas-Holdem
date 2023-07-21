import Main from "./Main.js";
import { useContext } from "react";
import { GameContext } from "../../contexts/GameContext.js";

export default function MainPage() {
    const {game_data, game_states, game_players, game_decks} = useContext(GameContext);
    const [fetchData] = game_data
    const [players, setPlayers] = game_players;
    const [deck, setDeck] = game_decks;
    return(
        <div>
            <Main players={players} data={fetchData}/>
        </div>
    );
}