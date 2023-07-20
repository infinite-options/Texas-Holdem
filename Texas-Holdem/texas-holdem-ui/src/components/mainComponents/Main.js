
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {useLocation} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Rectangle15Image from '../../assets/images/ChangePosition_Rectangle_15.png';
import Ellipse12Image from '../../assets/images/Main_Ellipse_12.png';
import Ellipse14Image from '../../assets/images/Main_Ellipse_14.png';
import Ellipse15Image from '../../assets/images/Main_Ellipse_15.png';
import Ellipse4Image from '../../assets/images/Main_Ellipse_4.png';
import Ellipse5Image from '../../assets/images/Main_Ellipse_5.png';
import Ellipse9Image from '../../assets/images/Main_Ellipse_9.png';
import Ellipse10Image from '../../assets/images/Main_Ellipse_10.png';
import Ellipse11Image from '../../assets/images/Main_Ellipse_11.png';
import ArrowSquareUpImage from '../../assets/images/Main_arrow_square_up.svg';
import Ellipse13Image from '../../assets/images/Main_Ellipse_13.png';
import PlaySquareImage from '../../assets/images/Main_play_square.svg';
import MenuImg from '../../assets/images/Menu_img.png';
import './Main.css';
import {
  styled
} from '@mui/material/styles';
import { SUIT, getRankIndex, shuffledDeck } from '../../preset/Preset';


// import Menu01 from '../components/Menu01/Menu01';

const Main1 = styled("div")({
  backgroundColor: `rgba(245, 245, 245, 1)`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  width: `390px`,
  height: `844px`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  overflow: `hidden`,
});

// const Rectangle15 = styled("div")({
//   background: `linear-gradient(-89.64deg, rgba(35, 51, 41, 1) 4.1242209425326255%, rgba(99, 212, 113, 1) 99.89351945840635%)`,
//   border: `1px solid rgba(243, 170, 69, 1)`,
//   boxSizing: `border-box`,
//   borderRadius: `1000px`,
//   width: `349.94px`,
//   height: `229.44px`,
//   position: `absolute`,
//   left: `373px`,
//   top: `558px`,
// });
const Rectangle15 = styled("div")({
  background: `linear-gradient(-89.64deg, rgba(35, 51, 41, 1) 4.1242209425326255%, rgba(99, 212, 113, 1) 99.89351945840635%)`,
  border: `1px solid rgba(243, 170, 69, 1)`,
  boxSizing: `border-box`,
  borderRadius: `1000px`,
  transform: 'rotate(-90.363deg)',
  width: `349.94px`,
  height: `229.44px`,
  position: `absolute`,
  left: `20px`,
  top: `325px`,
});

const Ellipse12 = styled("img")({
  height: `51px`,
  width: `51px`,
  position: `absolute`,
  left: `171px`,
  top: `274px`,
});

const Ellipse14 = styled("img")({
  height: `76px`,
  width: `76px`,
  position: `absolute`,
  left: `157px`,
  top: `534px`,
});

const Ellipse15 = styled("img")({
  height: `29px`,
  width: `28px`,
  position: `absolute`,
  left: `72px`,
  top: `362px`,
});

const Rectangle8 = styled("div")({
  backgroundColor: `rgba(42, 46, 49, 1)`,
  width: `390px`,
  height: `66px`,
  position: `absolute`,
  left: `0px`,
  top: `23px`,
});

const Menu01 = styled("img")({
  width: `28px`,
  height: `28px`,
  position: `absolute`,
  left: `345px`,
  top: `41px`,
});

const Poker = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `Orbitron`,
  fontWeight: `900`,
  fontSize: `22px`,
  letterSpacing: `2.86px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `20px`,
  top: `41px`,
});

const Rectangle9 = styled("div")({
  backgroundColor: `rgba(82, 163, 82, 1)`,
  boxShadow: `0px 4px 4px rgba(243, 170, 69, 1)`,
  borderRadius: `10px`,
  width: `79px`,
  height: `80px`,
  position: `absolute`,
  left: `296px`,
  top: `637px`,
});

const Rectangle60 = styled("div")({
  backgroundColor: `rgba(82, 163, 82, 1)`,
  boxShadow: `0px 4px 4px rgba(243, 170, 69, 1)`,
  borderRadius: `10px`,
  width: `43px`,
  height: `80px`,
  position: `absolute`,
  left: `247px`,
  top: `637px`,
});

const Rectangle11 = styled("div")({
  backgroundColor: `rgba(255, 255, 255, 1)`,
  boxShadow: `0px 4px 4px rgba(70, 142, 246, 1)`,
  borderRadius: `10px`,
  width: `128px`,
  height: `80px`,
  position: `absolute`,
  left: `247px`,
  top: `732px`,
});

const Rectangle10 = styled("div")({
  backgroundColor: `rgba(215, 99, 95, 1)`,
  boxShadow: `0px 4px 4px rgba(255, 255, 255, 1)`,
  border: `1px solid rgba(255, 255, 255, 1)`,
  boxSizing: `border-box`,
  borderRadius: `10px`,
  width: `128px`,
  height: `51px`,
  position: `absolute`,
  left: `16px`,
  top: `637px`,
});

const Fold = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `Orbitron`,
  fontWeight: `900`,
  fontSize: `18px`,
  letterSpacing: `2.34px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `54px`,
  top: `651px`,
});

const Deal = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `Orbitron`,
  fontWeight: `900`,
  fontSize: `18px`,
  letterSpacing: `2.34px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `169px`,
  top: `560px`,
});

const Raise = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `Orbitron`,
  fontWeight: `900`,
  fontSize: `18px`,
  letterSpacing: `2.34px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `67px`,
  position: `absolute`,
  left: `302px`,
  top: `668px`,
});

const Check = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Orbitron`,
  fontWeight: `900`,
  fontSize: `18px`,
  letterSpacing: `2.34px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `275px`,
  top: `761px`,
});

const Rectangle12 = styled("div")({
  backgroundColor: `rgba(70, 142, 246, 1)`,
  borderRadius: `10px`,
  width: `100.64px`,
  height: `161.3px`,
  position: `absolute`,
  left: `63px`,
  top: `723px`,
  transform: 'rotate(-11.66deg)',
});

const Rectangle13 = styled("div")({
  backgroundColor: `rgba(255, 255, 255, 1)`,
  border: `1px solid rgba(0, 0, 0, 1)`,
  boxSizing: `border-box`,
  borderRadius: `10px`,
  width: `100.64px`,
  height: `161.3px`,
  position: `absolute`,
  left: `120px`,
  top: `726px`,
  transform: 'rotate(-11.66deg)',
});

const Ellipse4 = styled("img")({
  height: `72px`,
  width: `72px`,
  objectFit: `cover`,
  position: `absolute`,
  left: `5px`,
  top: `364px`,
});

const Ellipse5 = styled("img")({
  height: `72px`,
  width: `71px`,
  objectFit: `cover`,
  position: `absolute`,
  left: `35px`,
  top: `156px`,
});

const Ellipse9 = styled("img")({
  height: `72px`,
  width: `71px`,
  objectFit: `cover`,
  position: `absolute`,
  left: `159px`,
  top: `114px`,
});

const Ellipse10 = styled("img")({
  height: `72px`,
  width: `71px`,
  objectFit: `cover`,
  position: `absolute`,
  left: `283px`,
  top: `155px`,
});

const Ellipse11 = styled("img")({
  height: `72px`,
  width: `71px`,
  objectFit: `cover`,
  position: `absolute`,
  left: `315px`,
  top: `366px`,
});

const Rectangle27 = styled("div")({
  border: `1px solid rgba(35, 51, 41, 1)`,
  boxSizing: `border-box`,
  borderRadius: `10px`,
  width: `56px`,
  height: `33px`,
  position: `absolute`,
  left: `40px`,
  top: `272px`,
});

const Rectangle53 = styled("div")({
  border: `1px solid rgba(35, 51, 41, 1)`,
  boxSizing: `border-box`,
  borderRadius: `10px`,
  width: `56px`,
  height: `33px`,
  position: `absolute`,
  left: `167px`,
  top: `228px`,
});

const Rectangle54 = styled("div")({
  border: `1px solid rgba(35, 51, 41, 1)`,
  boxSizing: `border-box`,
  borderRadius: `10px`,
  width: `56px`,
  height: `33px`,
  position: `absolute`,
  left: `293px`,
  top: `272px`,
});

const Rectangle55 = styled("div")({
  border: `1px solid rgba(35, 51, 41, 1)`,
  boxSizing: `border-box`,
  borderRadius: `10px`,
  width: `56px`,
  height: `33px`,
  position: `absolute`,
  left: `323px`,
  top: `479px`,
});

const Rectangle52 = styled("div")({
  border: `1px solid rgba(35, 51, 41, 1)`,
  boxSizing: `border-box`,
  borderRadius: `10px`,
  width: `56px`,
  height: `33px`,
  position: `absolute`,
  left: `12px`,
  top: `479px`,
});

const Q850 = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(35, 51, 41, 1)`,
  fontStyle: `normal`,
  fontFamily: `Open Sans`,
  fontWeight: `600`,
  fontSize: `13px`,
  letterSpacing: `0.65px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `52px`,
  top: `281px`,
});

const Q8501 = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(35, 51, 41, 1)`,
  fontStyle: `normal`,
  fontFamily: `Open Sans`,
  fontWeight: `600`,
  fontSize: `13px`,
  letterSpacing: `0.65px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `179px`,
  top: `237px`,
});

const Q8502 = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(35, 51, 41, 1)`,
  fontStyle: `normal`,
  fontFamily: `Open Sans`,
  fontWeight: `600`,
  fontSize: `13px`,
  letterSpacing: `0.65px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `305px`,
  top: `281px`,
});

const Q8503 = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(35, 51, 41, 1)`,
  fontStyle: `normal`,
  fontFamily: `Open Sans`,
  fontWeight: `600`,
  fontSize: `13px`,
  letterSpacing: `0.65px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `335px`,
  top: `488px`,
});

const Q8504 = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(35, 51, 41, 1)`,
  fontStyle: `normal`,
  fontFamily: `Open Sans`,
  fontWeight: `600`,
  fontSize: `13px`,
  letterSpacing: `0.65px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `24px`,
  top: `488px`,
});

const Replay = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(35, 51, 41, 1)`,
  fontStyle: `normal`,
  fontFamily: `Open Sans`,
  fontWeight: `600`,
  fontSize: `13px`,
  letterSpacing: `0.65px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `8px`,
  top: `781px`,
  transform: 'rotate(35.179deg)',
});

const Q030 = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `Open Sans`,
  fontWeight: `600`,
  fontSize: `13px`,
  letterSpacing: `0.65px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `182px`,
  top: `290px`,
});

const D = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `Open Sans`,
  fontWeight: `600`,
  fontSize: `13px`,
  letterSpacing: `0.65px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `82px`,
  top: `367px`,
});

const Rectangle25 = styled("div")({
  backgroundColor: `rgba(70, 142, 246, 1)`,
  width: `31px`,
  height: `41px`,
  position: `absolute`,
  left: `18px`,
  top: `422px`,
});

const Rectangle34 = styled("div")({
  backgroundColor: `rgba(70, 142, 246, 1)`,
  border: `1px solid rgba(0, 0, 0, 1)`,
  boxSizing: `border-box`,
  width: `30px`,
  height: `41px`,
  position: `absolute`,
  left: `47px`,
  top: `215px`,
});

const Rectangle44 = styled("div")({
  backgroundColor: `rgba(70, 142, 246, 1)`,
  width: `30px`,
  height: `41px`,
  position: `absolute`,
  left: `171px`,
  top: `173px`,
});

const Rectangle47 = styled("div")({
  backgroundColor: `rgba(70, 142, 246, 1)`,
  width: `30px`,
  height: `41px`,
  position: `absolute`,
  left: `295px`,
  top: `214px`,
});

const Rectangle50 = styled("div")({
  backgroundColor: `rgba(70, 142, 246, 1)`,
  width: `30px`,
  height: `41px`,
  position: `absolute`,
  left: `327px`,
  top: `425px`,
});

const Rectangle26 = styled("div")({
  backgroundColor: `rgba(255, 255, 255, 1)`,
  width: `30px`,
  height: `41px`,
  position: `absolute`,
  left: `39px`,
  top: `428px`,
});

const Rectangle35 = styled("div")({
  backgroundColor: `rgba(255, 255, 255, 1)`,
  border: `1px solid rgba(0, 0, 0, 1)`,
  boxSizing: `border-box`,
  width: `31px`,
  height: `41px`,
  position: `absolute`,
  left: `67px`,
  top: `221px`,
});

const Rectangle45 = styled("div")({
  backgroundColor: `rgba(255, 255, 255, 1)`,
  width: `31px`,
  height: `41px`,
  position: `absolute`,
  left: `191px`,
  top: `179px`,
});

const Rectangle48 = styled("div")({
  backgroundColor: `rgba(255, 255, 255, 1)`,
  width: `31px`,
  height: `41px`,
  position: `absolute`,
  left: `315px`,
  top: `220px`,
});

const Rectangle51 = styled("div")({
  backgroundColor: `rgba(255, 255, 255, 1)`,
  width: `31px`,
  height: `41px`,
  position: `absolute`,
  left: `347px`,
  top: `431px`,
});

const Michael = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(35, 51, 41, 1)`,
  fontStyle: `normal`,
  fontFamily: `Open Sans`,
  fontWeight: `700`,
  fontSize: `16px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `9px`,
  top: `340px`,
});

const John = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(35, 51, 41, 1)`,
  fontStyle: `normal`,
  fontFamily: `Open Sans`,
  fontWeight: `700`,
  fontSize: `16px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `58px`,
  top: `131px`,
});

const Jay = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(35, 51, 41, 1)`,
  fontStyle: `normal`,
  fontFamily: `Open Sans`,
  fontWeight: `700`,
  fontSize: `16px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `182px`,
  top: `89px`,
});

const Stan = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(35, 51, 41, 1)`,
  fontStyle: `normal`,
  fontFamily: `Open Sans`,
  fontWeight: `700`,
  fontSize: `16px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `303px`,
  top: `129px`,
});

const Jack = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(35, 51, 41, 1)`,
  fontStyle: `normal`,
  fontFamily: `Open Sans`,
  fontWeight: `700`,
  fontSize: `16px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `330px`,
  top: `340px`,
});

const Rectangle23 = styled("div")({
  backgroundColor: `rgba(255, 255, 255, 1)`,
  borderRadius: `10px`,
  width: `54.28px`,
  height: `84.93px`,
  position: `absolute`,
  left: `106px`,
  top: `335px`,
});

const Rectangle56 = styled("div")({
  backgroundColor: `rgba(255, 255, 255, 1)`,
  borderRadius: `10px`,
  width: `54.28px`,
  height: `84.93px`,
  position: `absolute`,
  left: `169px`,
  top: `335px`,
});

const Rectangle58 = styled("div")({
  backgroundColor: `rgba(255, 255, 255, 1)`,
  borderRadius: `10px`,
  width: `54.28px`,
  height: `84.93px`,
  position: `absolute`,
  left: `134px`,
  top: `430px`,
});

const Rectangle57 = styled("div")({
  backgroundColor: `rgba(255, 255, 255, 1)`,
  borderRadius: `10px`,
  width: `54.28px`,
  height: `84.93px`,
  position: `absolute`,
  left: `231px`,
  top: `335px`,
});

const Rectangle59 = styled("div")({
  backgroundColor: `rgba(255, 255, 255, 1)`,
  borderRadius: `10px`,
  width: `54.28px`,
  height: `84.93px`,
  position: `absolute`,
  left: `196px`,
  top: `430px`,
});

const ArrowSquareUp = styled("img")({
  height: `auto`,
  width: `25px`,
  position: `absolute`,
  left: `256px`,
  top: `668px`,
});

const Ellipse13 = styled("img")({
  height: `62px`,
  width: `62px`,
  position: `absolute`,
  left: `-17px`,
  top: `797px`,
});

const PlaySquare = styled("img")({
  height: `auto`,
  width: `24px`,
  position: `absolute`,
  left: `7px`,
  top: `811px`,
});

const positions = ["but", "sb", "bb", "lj", "hj", "co"];

function Main(props) {
  // const [player1Name, setPlayer1Name] = useState('Michael');

  const location = useLocation();
  const players = props.players;
  const fetchData = props.data;
  console.log(players);

  let index=0;
  if(null!=location.state && location.state.dealerIndex!=0){
    index=location.state.dealerIndex;
  }

  const [dealerIndex, setDealerIndex] = useState(index);
  console.log("When page loads ",dealerIndex)

  const deck = shuffledDeck();
  const hand0 = [deck[0], deck[1]];
  const hand1 = [deck[2], deck[3]];
  const hand2 = [deck[4], deck[5]];
  const hand3 = [deck[6], deck[7]];
  const hand4 = [deck[8], deck[9]];
  const hand5 = [deck[10], deck[11]];

  const [player0, setPlayer0] = useState({name: players[0].name, position:(dealerIndex)%6, type: players[0].type, hands: hand0});
  const [player1, setPlayer1] = useState({name: players[1].name, position:(dealerIndex+1)%6, type: players[1].type, hands: hand1});
  const [player2, setPlayer2] = useState({name: players[2].name, position:(dealerIndex+2)%6, type: players[2].type, hands: hand2});
  const [player3, setPlayer3] = useState({name: players[3].name, position:(dealerIndex+3)%6, type: players[3].type, hands: hand3});
  const [player4, setPlayer4] = useState({name: players[4].name, position:(dealerIndex+4)%6, type: players[4].type, hands: hand4});
  const [player5, setPlayer5] = useState({name: 'Archana',position:(dealerIndex+5)%6});
  /**
   * Calling tables from database
   */
  // const test_user = getUser(fetchData, player0.name, player0.type, positions[player0.position]);
  // const test_table = JSON.parse(test_user.preflop_table);
  // console.log(getAction(test_table, hand0));

  const navigate = useNavigate();

  const handlePlayerClick = (player) => {
    console.log("On Player click in Main ",dealerIndex)
    const user = getUser(fetchData, player.name, player.type, positions[player.position]);
    const table = JSON.parse(user.preflop_table);
    // console.log("--------------------- Player Click---------------------------");
    // console.log("p0 ",player0.name+" "+ positions[player0.position])
    // console.log("p1 ",player1.name+" "+ positions[player1.position])
    // console.log("p2 ",player2.name+" "+ positions[player2.position])
    // console.log("p3 ",player3.name+" "+ positions[player3.position])
    // console.log("p4 ",player4.name+" "+ positions[player4.position])
    // console.log("p5 ",player5.name+" "+ positions[player5.position])
       navigate('/opponent', { state: { 
                                          name: player.name, 
                                          type: player.type,
                                          position: positions[player.position],
                                          dealerIndex : dealerIndex,
                                          hands: player.hands,
                                          action: getAction(table, player.hands)
                                      } });
  };

  const handleMenuClick = () => {
    navigate('/profile');
  };
  const handleDealClick = () => {

    console.log("---------------------Switching Deal Click---------------------------");

    setDealerIndex((dealerIndex+1)%6)

    setPlayer0({
      ...player0,
        name: player0.name,
        position: (player0.position+5)%6
    });
    
    setPlayer1({
      ...player1,
      name: player1.name,
      position: (player1.position+5)%6
    });
   
    setPlayer2({
      ...player2,
      name: player2.name,
      position: (player2.position+5)%6
    });
   
    setPlayer3({
      ...player3,
      name: player3.name,
      position: (player3.position+5)%6
    });
    
    setPlayer4({
      ...player4,
      name: player4.name,
      position: (player4.position+5)%6
    });
   
    setPlayer5({
      ...player5,
      name: player5.name,
      position: (player5.position+5)%6
    });
    // console.log("p0 ",player0.name+" "+ positions[player0.position])
    // console.log("p1 ",player1.name+" "+ positions[player1.position])
    // console.log("p2 ",player2.name+" "+ positions[player2.position])
    // console.log("p3 ",player3.name+" "+ positions[player3.position])
    // console.log("p4 ",player4.name+" "+ positions[player4.position])
    // console.log("p5 ",player5.name+" "+ positions[player5.position])
   
  };

  function getUser(fetchedData, player_name, player_type, player_position) {
    let user = null;
    fetchData.map(data=>{
      if(data.player_type === player_type && data.position === player_position) {
        user = data;
      }
    });
    return user;
  }

  function getHand(draw1, draw2) {
    const rank1 = draw1.charAt(0);
    const rank2 = draw2.charAt(0);
    const suit = draw1.charAt(1) === draw2.charAt(1) ? SUIT.SUIT : SUIT.OFFSUIT;

    const handKey = getRankIndex(rank1) < getRankIndex(rank2) ? rank1+rank2+suit : rank2+rank1+suit;  
    return handKey;
  } 

  function getAction(table, cards) {
    return table[getHand(cards[0], cards[1])];
  }

  return (
    <div>
      <h3>{player0.position} {player0.name} {positions[player0.position]}</h3>
      <h3>{player1.position} {player1.name} {positions[player1.position]}</h3>
      <h3>{player2.position} {player2.name} {positions[player2.position]}</h3>
      <h3>{player3.position} {player3.name} {positions[player3.position]}</h3>
      <h3>{player4.position} {player4.name} {positions[player4.position]}</h3>
      <h3>{player5.position} {player5.name} {positions[player5.position]}</h3>
    <Main1>
 
      {/* <Rectangle15>
      </Rectangle15> */}
      {/* Table  */}
      <Rectangle15 src={Rectangle15Image} loading='lazy' alt={"Rectangle 15"}></Rectangle15>
      {/* Dealer token, timer , Deal */}
      <Ellipse12 src={Ellipse12Image} loading='lazy' alt={"Ellipse 12"}/>
      <button onClick={handleDealClick}>
        <Ellipse14 src={Ellipse14Image} loading='lazy' alt={"Ellipse 14"}/>
      </button>
      <Ellipse15 src={Ellipse15Image} loading='lazy' alt={"Ellipse 15"}/>
      {/* Background of poker */}
      <Rectangle8>
      </Rectangle8>
      <button onClick={handleMenuClick}>
      <Menu01 src={MenuImg} loading='lazy'/>
      </button>
      <Poker>
        {`POKER`}
      </Poker>
      {/* Fold raise etc */}
      <Rectangle9>
      </Rectangle9>
      <Rectangle60>
      </Rectangle60>
      <Rectangle11>
      </Rectangle11>
      <Rectangle10>
      </Rectangle10>
      <Fold>
        {`Fold`}
      </Fold>
      <button onClick={handleDealClick}>
      <Deal>
        {`Deal`}
      </Deal></button>
      <Raise>
        {`Raise`}
      </Raise>
      <Check>
        {`Check`}
      </Check>
      {/* Two rectangles at the bottom of page */}
      <Rectangle12>
      </Rectangle12>
      <Rectangle13>
      </Rectangle13>
      {/* Player images  */}

      <button onClick={() => handlePlayerClick(player0)}>
      <Ellipse4 src={Ellipse4Image} loading='lazy' alt={"Ellipse 4"}/></button>
      <button onClick={() => handlePlayerClick(player1)}>
      <Ellipse5 src={Ellipse5Image} loading='lazy' alt={"Ellipse 5"}/></button>
      <button onClick={() => handlePlayerClick(player2)}>
      <Ellipse9 src={Ellipse9Image} loading='lazy' alt={"Ellipse 9"}/></button>
      <button onClick={() => handlePlayerClick(player3)}>
      <Ellipse10 src={Ellipse10Image} loading='lazy' alt={"Ellipse 10"}/></button>
      <button onClick={() => handlePlayerClick(player4)}>
      <Ellipse11 src={Ellipse11Image} loading='lazy' alt={"Ellipse 11"}/></button>
      {/* Border around money */}
      <Rectangle27>
      </Rectangle27>
      <Rectangle53>
      </Rectangle53>
      <Rectangle54>
      </Rectangle54>
      <Rectangle55>
      </Rectangle55>
      <Rectangle52>
      </Rectangle52>
      <Q850>
        {`$850`}
      </Q850>
      <CardView position={{x:"12px", y:"515px"}} hands={hand0} />
      <Q8501>
        {`$850`}
      </Q8501>
      <CardView position={{x:"35px", y:"310px"}} hands={hand1} />
      <Q8502>
        {`$850`}
      </Q8502>
      <CardView position={{x:"230px", y:"235px"}} hands={hand2} />
      <Q8503>
        {`$850`}
      </Q8503>
      <CardView position={{x:"300px", y:"305px"}}  hands={hand3} />
      <Q8504>
        {`$850`}
      </Q8504>
      <CardView position={{x:"325px", y:"515px"}} hands={hand4} />
      <Replay>
        {`Replay`}
      </Replay>
      <Q030>
        {`0:30`}
      </Q030>
      <D>
        {`D`}
      </D>
      {/* Cards infornt of players - white/blue */}
      <Rectangle25>
      </Rectangle25>
      <Rectangle34>
      </Rectangle34>
      <Rectangle44>
      </Rectangle44>
      <Rectangle47>
      </Rectangle47>
      <Rectangle50>
      </Rectangle50>
      <Rectangle26>
      </Rectangle26>
      <Rectangle35>
      </Rectangle35>
      <Rectangle45>
      </Rectangle45>
      <Rectangle48>
      </Rectangle48>
      <Rectangle51>
      </Rectangle51>
      <Michael>
        {player0.name}
      </Michael>
      <John>
        {player1.name}
      </John>
      <Jay>
        {player2.name}
      </Jay>
      <Stan>
        {player3.name}
      </Stan>
      <Jack>
        {player4.name}
      </Jack>
      {/* The 5 cards in the middle of table  */}
      <Rectangle23>
      </Rectangle23>
      <Rectangle56>
      </Rectangle56>
      <Rectangle58>
      </Rectangle58>
      <Rectangle57>
      </Rectangle57>
      <Rectangle59>
      </Rectangle59>

      
      <ArrowSquareUp src={ArrowSquareUpImage} loading='lazy' alt={"arrow-square-up"}/>
      <Ellipse13 src={Ellipse13Image} loading='lazy' alt={"Ellipse 13"}/>
      <PlaySquare src={PlaySquareImage} loading='lazy' alt={"play-square"}/>
    </Main1></div>);

  }

function CardView(props) {
  const position = props.position;
  const [card1, card2] = props.hands;
  return (
    <div style={{
      position:'absolute',
      left: position.x,
      top: position.y,

      fontSize: "15px",
    }}>
        <span className={`${isRed(card1)?"font-red":""}`}>{card1}</span>{', '}<span className={`${isRed(card2)?"font-red":""}`}>{card2}</span>
    </div>
  );
}

function isRed(card) {
  if(card.length !== 2) {
      return false;
  }
  return (card.charAt(1) === '♥' || card.charAt(1) === '♦');
}

export default Main;

  