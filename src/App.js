import React from "react";
// import Profile from './components/Profile';
// import OpponentsProfile from "./components/OpponentsProfile";
// import 

// const App = () => {
//   return (
//     <div>
//       {/* <Profile></Profile> */}
//       <OpponentsProfile></OpponentsProfile>
//     </div>
//   );
// };

// import TexasHoldem from "./components/TexasHoldem";
import PokerGame from "./components/dealEngine/PokerGame"
const App = () => {

//   return (<TexasHoldem></TexasHoldem>);
     return (
       <div>
         <h1>Texas Hold'em Poker</h1>
         <PokerGame />
       </div>
     );
};


export default App;
