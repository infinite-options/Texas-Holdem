import React from 'react';
import './ChangePosition.css';

import Rectangle15Image from '../../assets/images/ChangePosition_Rectangle_15.png';
import Ellipse4Image from '../../assets/images/ChangePosition_Ellipse_9.png';
import Ellipse5Image from '../../assets/images/ChangePosition_Ellipse_5.png';
import Ellipse9Image from '../../assets/images/ChangePosition_Ellipse_9.png';
import Ellipse10Image from '../../assets/images/ChangePosition_Ellipse_10.png';
import Ellipse11Image from '../../assets/images/ChangePosition_Ellipse_11.png';
import Ellipse12Image from '../../assets/images/ChangePosition_Ellipse_12.png';

import {styled} from '@mui/material/styles';
const greenRound = {
    width: '349.938px',
    height: '229.439px',
    transform: 'rotate(-90.363deg)',
    flexShrink: 0,
    borderRadius: '1000px',
    border: '1px solid #F3AA45',
    background: 'linear-gradient(271deg, #233329 0%, #63D471 100%)',
  }
  
const ChangePosition1 = styled("div")({
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
// const Rectangle15 = styled("img")({
//     height: `229.44px`,
//     width: `349.94px`,
//     position: `absolute`,
//     left: `372px`,
//     top: `612px`,
//   });

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
  top: `400px`,
});

const Rectangle8 = styled("div")({
  backgroundColor: `rgba(42, 46, 49, 1)`,
  width: `390px`,
  height: `66px`,
  position: `absolute`,
  left: `0px`,
  top: `23px`,
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



const SwitchPlayer = styled("div")({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Orbitron`,
  fontWeight: `900`,
  fontSize: `22px`,
  letterSpacing: `2.86px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `17px`,
  top: `110px`,
});

const Rectangle9 = styled("div")({
  backgroundColor: `rgba(82, 163, 82, 1)`,
  boxShadow: `0px 4px 4px rgba(243, 170, 69, 1)`,
  borderRadius: `10px`,
  width: `360px`,
  height: `80px`,
  position: `absolute`,
  left: `17px`,
  top: `746px`,
});

const Return = styled("div")({
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
  left: `156px`,
  top: `775px`,
});
const Rectangle25 = styled("div")({
    backgroundColor: `rgba(243, 170, 69, 1)`,
    width: `31px`,
    height: `41px`,
    position: `absolute`,
    left: `17px`,
    top: `476px`,
  });
  
  const Rectangle34 = styled("div")({
    backgroundColor: `rgba(243, 170, 69, 1)`,
    width: `30px`,
    height: `41px`,
    position: `absolute`,
    left: `49px`,
    top: `286px`,
  });
  
  const Rectangle44 = styled("div")({
    backgroundColor: `rgba(243, 170, 69, 1)`,
    width: `30px`,
    height: `41px`,
    position: `absolute`,
    left: `173px`,
    top: `245px`,
  });
  
  const Rectangle47 = styled("div")({
    backgroundColor: `rgba(243, 170, 69, 1)`,
    width: `30px`,
    height: `41px`,
    position: `absolute`,
    left: `297px`,
    top: `286px`,
  });
  
  const Rectangle50 = styled("div")({
    backgroundColor: `rgba(243, 170, 69, 1)`,
    width: `30px`,
    height: `41px`,
    position: `absolute`,
    left: `326px`,
    top: `479px`,
  });
  
  const Rectangle26 = styled("div")({
    backgroundColor: `rgba(255, 255, 255, 1)`,
    width: `30px`,
    height: `41px`,
    position: `absolute`,
    left: `38px`,
    top: `482px`,
  });
  
  const Rectangle35 = styled("div")({
    backgroundColor: `rgba(255, 255, 255, 1)`,
    width: `31px`,
    height: `41px`,
    position: `absolute`,
    left: `69px`,
    top: `293px`,
  });
  
  const Rectangle45 = styled("div")({
    backgroundColor: `rgba(255, 255, 255, 1)`,
    width: `31px`,
    height: `41px`,
    position: `absolute`,
    left: `193px`,
    top: `251px`,
  });
  
  const Rectangle48 = styled("div")({
    backgroundColor: `rgba(255, 255, 255, 1)`,
    width: `31px`,
    height: `41px`,
    position: `absolute`,
    left: `317px`,
    top: `292px`,
  });
  
  const Rectangle51 = styled("div")({
    backgroundColor: `rgba(255, 255, 255, 1)`,
    width: `31px`,
    height: `41px`,
    position: `absolute`,
    left: `346px`,
    top: `485px`,
  });
  
const Player1 = styled("div")({
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
    left: `8px`,
    top: `394px`,
  });
  
  const Player2 = styled("div")({
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
    left: `41px`,
    top: `200px`,
  });
  
  const Player3 = styled("div")({
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
    left: `165px`,
    top: `159px`,
  });
  
  const Player4 = styled("div")({
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
    left: `292px`,
    top: `195px`,
  });
  
  const Player5 = styled("div")({
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
    left: `318px`,
    top: `392px`,
  });
  
  const Player6 = styled("div")({
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
    left: `296px`,
    top: `632px`,
  });

  const Ellipse4 = styled("img")({
  height: `72px`,
  width: `72px`,
  objectFit: `cover`,
  position: `absolute`,
  left: `4px`,
  top: `418px`,
});

const Ellipse5 = styled("img")({
  height: `72px`,
  width: `71px`,
  objectFit: `cover`,
  position: `absolute`,
  left: `37px`,
  top: `228px`,
});

const Ellipse9 = styled("img")({
  height: `72px`,
  width: `71px`,
  objectFit: `cover`,
  position: `absolute`,
  left: `161px`,
  top: `186px`,
});

const Ellipse10 = styled("img")({
  height: `72px`,
  width: `71px`,
  objectFit: `cover`,
  position: `absolute`,
  left: `285px`,
  top: `227px`,
});

const Ellipse11 = styled("img")({
  height: `72px`,
  width: `71px`,
  objectFit: `cover`,
  position: `absolute`,
  left: `314px`,
  top: `420px`,
});

const Ellipse12 = styled("img")({
    height: `72px`,
    width: `71px`,
    objectFit: `cover`,
    position: `absolute`,
    left: `278px`,
    top: `660px`,
  });

function ChangePosition() {
  return (
    <ChangePosition1>
      <Rectangle15 src={Rectangle15Image} loading='lazy' alt={"Rectangle 15"}></Rectangle15>
      <Rectangle8></Rectangle8>
      <Poker>{`POKER`}</Poker>
      {/* <div style={player}></div> */}
      <Ellipse4 src={Ellipse4Image} loading='lazy' alt={"Ellipse 4"}/>
      <Ellipse5 src={Ellipse5Image} loading='lazy' alt={"Ellipse 5"}/>
      <Ellipse9 src={Ellipse9Image} loading='lazy' alt={"Ellipse 9"}/>
      <Ellipse10 src={Ellipse10Image} loading='lazy' alt={"Ellipse 10"}/>
      <Ellipse11 src={Ellipse11Image} loading='lazy' alt={"Ellipse 11"}/>
      <Rectangle25></Rectangle25>
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
      <Player1>{`Player 1`}</Player1>
      <Player2>{`Player 2`}</Player2>
      <Player3>{`Player 3`}</Player3>
      <Player4>{`Player 4`}</Player4>
      <Player5>{`Player 5`}</Player5>
      <Player6>{`Player 6`}</Player6>
      <Ellipse12 src={Ellipse12Image} loading='lazy' alt={"Ellipse 12"}/>
      <SwitchPlayer>{`Switch Player`}</SwitchPlayer>
      <Rectangle9></Rectangle9>
      <Return>{`Return`}</Return>
    </ChangePosition1>);

  }

export default ChangePosition;
