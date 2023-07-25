
import React, {  useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import {useLocation} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { SUIT, getRankIndex, shuffledDeck } from '../../preset/Preset';
import { PlayerContext } from '../../contexts/PlayerContext';
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
import { styled } from '@mui/material/styles';


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
 left: `127px`,
  top: `546px`,
});

const Ellipse14 = styled("img")({
  height: `76px`,
  width: `76px`,
  position: `absolute`,
  left: `191px`,
  top: `528px`,
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
  fontFamily: `Outfit`,
  fontWeight: `600`,
  fontSize: `22px`,
  letterSpacing: `0.66px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `208px`,
  top: `555px`,
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
  fontFamily: `Outfit`,
  fontWeight: `600`,
  fontSize: `13px`,
  letterSpacing: `0.65px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `137px`,
  top: `563px`,
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

const Ellipse15_0 = styled("img")({
  height: `29px`,
  width: `28px`,
  position: `absolute`,
  left: `75px`,
  top: `450px`,
});

const Ellipse15_1 = styled("img")({
  height: `29px`,
  width: `28px`,
  position: `absolute`,
  left: `90px`,
  top: `300px`,
});
const Ellipse15_2 = styled("img")({
  height: `29px`,
  width: `28px`,
  position: `absolute`,
  left: `188px`,
  top: `260px`,
});
const Ellipse15_3 = styled("img")({
  height: `29px`,
  width: `28px`,
  position: `absolute`,
  left: `275px`,
  top: `300px`,
});
const Ellipse15_4 = styled("img")({
  height: `29px`,
  width: `28px`,
  position: `absolute`,
  left: `300px`,
  top: `450px`,
});
const Ellipse15_5 = styled("img")({
  height: `29px`,
  width: `28px`,
  position: `absolute`,
  left: `153px`,
  top: `607px`,
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
  left: `153px`,
  top: `607px`,
});


const Group = styled("div")({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `78.3px`,
  height: `32.83px`,
  left: `11px`,
  top: `787px`,
});

const R = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(35, 51, 41, 1)`,
  fontStyle: `normal`,
  fontFamily: `Open Sans`,
  fontWeight: `600`,
  fontSize: `13px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `-10px`,
  top: `17px`,
});

const E = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(35, 51, 41, 1)`,
  fontStyle: `normal`,
  fontFamily: `Open Sans`,
  fontWeight: `600`,
  fontSize: `13px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `5px`,
  top: `15px`,
});

const P = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(35, 51, 41, 1)`,
  fontStyle: `normal`,
  fontFamily: `Open Sans`,
  fontWeight: `600`,
  fontSize: `13px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `20px`,
  top: `21px`,
});

const L = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(35, 51, 41, 1)`,
  fontStyle: `normal`,
  fontFamily: `Open Sans`,
  fontWeight: `600`,
  fontSize: `13px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `33px`,
  top: `33px`,
});

const A = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(35, 51, 41, 1)`,
  fontStyle: `normal`,
  fontFamily: `Open Sans`,
  fontWeight: `600`,
  fontSize: `13px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `41px`,
  top: `49px`,
});

const Y = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(35, 51, 41, 1)`,
  fontStyle: `normal`,
  fontFamily: `Open Sans`,
  fontWeight: `600`,
  fontSize: `13px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `46px`,
  top: `69px`,
});


const positions = ["Dealer", "Small Blind", "Big Blind", "Low Jack", "High Jack", "Cut Off"];
const deckOfCards = [
  { id: 1, name: "A♥" , color : "red"},
    { id: 2, name: "A♦" , color : "red"},
    { id: 3, name: "A♣" , color : "black"},
  { id: 4, name: "A♠" , color : "black"},
  { id: 5, name: "K♥" , color : "red"},
  { id: 6, name: "K♦" , color : "red"},
  { id: 7, name: "K♣" , color : "black"},
  { id: 8, name: "K♠" , color : "black"},
  { id: 9, name: "Q♥" , color : "red"},
  { id: 10, name: "Q♦" , color : "red"},
  { id: 11, name: "Q♣" , color : "black"},
  { id: 12, name: "Q♠" , color : "black"},
  { id: 13, name: "J♥" , color : "red"},
  { id: 14, name: "J♦" , color : "red"},
  { id: 15, name: "J♣" , color : "black"},
  { id: 16, name: "J♠" , color : "black"},
  { id: 17, name: "T♥" , color : "red"},
  { id: 18, name: "T♦" , color : "red"},
  { id: 19, name: "T♣" , color : "black"},
  { id: 20, name: "T♠" , color : "black"},
  { id: 21, name: "9♥" , color : "red"},
  { id: 22, name: "9♦" , color : "red"},
  { id: 23, name: "9♣" , color : "black"},
  { id: 24, name: "9♠" , color : "black"},
  { id: 25, name: "8♥" , color : "red"},
  { id: 26, name: "8♦" , color : "red"},
  { id: 27, name: "8♣" , color : "black"},
  { id: 28, name: "8♠" , color : "black"},
  { id: 29, name: "7♥" , color : "red"},
  { id: 30, name: "7♦" , color : "red"},
  { id: 31, name: "7♣" , color : "black"},
  { id: 32, name: "7♠" , color : "black"},
  { id: 33, name: "6♥" , color : "red"},
  { id: 34, name: "6♦" , color : "red"},
  { id: 35, name: "6♣" , color : "black"},
  { id: 36, name: "6♠" , color : "black"},
  { id: 37, name: "5♥" , color : "red"},
  { id: 38, name: "5♦" , color : "red"},
  { id: 39, name: "5♣" , color : "black"},
  { id: 40, name: "5♠" , color : "black"},
  { id: 41, name: "4♥" , color : "red"},
  { id: 42, name: "4♦" , color : "red"},
  { id: 43, name: "4♣" , color : "black"},
  { id: 44, name: "4♠" , color : "black"},
  { id: 45, name: "3♥" , color : "red"},
  { id: 46, name: "3♦" , color : "red"},
  { id: 47, name: "3♣" , color : "black"},
  { id: 48, name: "3♠" , color : "black"},
  { id: 49, name: "2♥" , color : "red"},
  { id: 50, name: "2♦" , color : "red"},
  { id: 51, name: "2♣" , color : "black"},
  { id: 52, name: "2♠" , color : "black"},
];

function Main(props) {

  const fetchData = props.data;

  const [flopCard, setflopCard] = useState([]);
  const [turnCard, setTurnCard] = useState([]);
  const [riverCard, setRiverCard] = useState([]);

  const location = useLocation();
  const { dealerIndex, updateDealerIndex,
    player0, updatePlayer0,
    player1, updatePlayer1,
    player2, updatePlayer2,
    player3, updatePlayer3,
    player4, updatePlayer4,
    player5, updatePlayer5,
    // holdFlag, updateHold,
    // flopFlag, updateFlop,
    // turnFlag, updateTurn,
    // riverFlag, updateRiver,
    // shuffledDeck, updateDeck
    dealFlag, updateDealFlag,
    shuffledDeck, updateDeck
  } = useContext(PlayerContext);

  const navigate = useNavigate();

  const [action0, setAction0] = useState("");
  const [action1, setAction1] = useState("");
  const [action2, setAction2] = useState("");
  const [action3, setAction3] = useState("");
  const [action4, setAction4] = useState("");
  const [action5, setAction5] = useState("");

  function getUser(fetchedData, player_name, player_style, player_position_short) {
    let user = null;
    fetchData.map(data=>{
      if(data.player_type === player_style && data.position === player_position_short) {
        user = data;
      }
    });
    return user;
  }

  function getHand(draw1, draw2) {
    const rank1 = draw1.name.charAt(0);
    const rank2 = draw2.name.charAt(0);
    const suit = draw1.name.charAt(1) === draw2.name.charAt(1) ? SUIT.SUIT : SUIT.OFFSUIT;

    const handKey = getRankIndex(rank1) < getRankIndex(rank2) ? rank1+rank2+suit : rank2+rank1+suit;  
    return handKey;
  } 

  function getAction(table, cards) {
    return table[getHand(cards[0], cards[1])];
  }

  function getShortPosition(i) {
    const shortPos = ["but", "sb", "bb", "lj", "hj", "co"];
    return shortPos[i];
  }

  function getType_database(ptype) {
    let type ='NA';
    if(ptype==='Loose-passive'){
      type='loose-passive';
    }
    if(ptype==='Tight-passive'){
      type='tight-passive';
    }
    if(ptype==='Tight-agressive' || ptype==='Tight-aggressive'){
      type='tight-aggressive';
    }
    if(ptype==='Loose-agressive' || ptype==='Loose-aggressive'){
      type='loose-aggressive';
    }
    return type;
  }

  const handlePlayerClick = (player) => {
   
    let type = getType_database(player.ptype);
    const user = getUser(fetchData, player.name, type, getShortPosition(player.position));
    let table;
    if(user!=null){
      table = JSON.parse(user.preflop_table);
      navigate('/opponent', { state: 
        { selectedName: player.name,
          selectedPosition: getShortPosition(player.position),
          selectedStyle: type,
          selectedCards:player.cards,
          action: getAction(table, player.cards)}
       });
    }else{
      alert("No data fetched")
    }
  };

  const handleMenuClick = () => {
      navigate('/profile');
  };
  const handleDealClick = () => {

    if(dealFlag=='hold'){
      const shuffledDeck = deckOfCards.sort(() => Math.random() - 0.5);
      updateDeck(shuffledDeck)
  
      console.log("------------------Start Switching Deal Click---------------------------");
  
      updateDealerIndex((dealerIndex+1)%6)
      let player0x = {name:player0.name,position: (player0.position+5)%6,ptype: player0.ptype,
        cards:shuffledDeck.slice(0, 2), totalAmt:850, currentAmt:0}
      updatePlayer0(player0x)
      let player1x = {name:player1.name,position: (player1.position+5)%6,ptype: player1.ptype,
        cards:shuffledDeck.slice(2, 4), totalAmt:850, currentAmt:0}
      updatePlayer1(player1x)
      let player2x = {name:player2.name,position: (player2.position+5)%6,ptype: player2.ptype,
        cards:shuffledDeck.slice(4, 6), totalAmt:850, currentAmt:0}
      updatePlayer2(player2x)
      let player3x = {name:player3.name,position: (player3.position+5)%6,ptype: player3.ptype,
        cards:shuffledDeck.slice(6, 8), totalAmt:850, currentAmt:0}
      updatePlayer3(player3x)
      let player4x = {name:player4.name,position: (player4.position+5)%6,ptype: player4.ptype,
        cards:shuffledDeck.slice(8, 10), totalAmt:850, currentAmt:0}
      updatePlayer4(player4x)
      let player5x = {name:player5.name,position: (player5.position+5)%6,ptype: player5.ptype,
        cards:shuffledDeck.slice(10, 12), totalAmt:850, currentAmt:0}
      updatePlayer5(player5x)
      
      console.log("------------------End Switching Deal Click---------------------------");
      updateDealFlag('flop')

      setflopCard([]);
      setTurnCard([]);
      setRiverCard([]);
    }else if(dealFlag=='flop'){
      let flopCards=shuffledDeck.slice(12, 15);
      setflopCard(flopCards); 
      updateDealFlag('turn'); 
    }else if(dealFlag=='turn'){
      let turnCards=shuffledDeck.slice(15, 16);
      setTurnCard(turnCards); 
      updateDealFlag('river');       
    }else if(dealFlag=='river'){
      let riverCards=shuffledDeck.slice(16, 17);
      setRiverCard(riverCards);
      updateDealFlag('hold');        
    }

    /* Test Bet */
    let p0_bet = 55;
    updatePlayer0(playerAfterBet(player0, shuffledDeck.slice(0, 2), player0.totalAmt, player0.currentAmt, p0_bet));
    console.log("Player0 bet:", p0_bet, "in [100,10,5] ", getChips(p0_bet));
  };

  function playerAfterBet(player, cards, totalAmt, currentAmt, bet_money) {
    let total = totalAmt-bet_money;
    let current = currentAmt+bet_money;
    return {name:player.name, position: (player.position+5)%6, ptype:player.ptype, cards:cards, totalAmt:total, currentAmt:current};
  }

  function getChips(money) {
    const chips = [100, 10, 5];
    const counts = [0, 0, 0];
  
    let remain = money;
    let chip_i = 0;
    while(remain > 0 && chip_i < chips.length) {
      if(remain >= chips[chip_i]) {
        remain -= chips[chip_i];
        counts[chip_i]++;
      } else {
        chip_i++;
      }
    }
    return counts;
  }
  
  useEffect(()=>{  
    function getActionText(player, position, hand) {  
      let action = "No saved Table";
      const user = getUser(fetchData, player.name, getType_database(player.ptype), getShortPosition(position));
      if(user !== null) {
        const table = JSON.parse(user.preflop_table);
        action = getAction(table, hand);
      }
      return action;
    }

    function updateActions() {
      // Update actions
      setAction0(getActionText(player0, player0.position, player0.cards));
      setAction1(getActionText(player1, player1.position, player1.cards));
      setAction2(getActionText(player2, player2.position, player2.cards));
      setAction3(getActionText(player3, player3.position, player3.cards));
      setAction4(getActionText(player4, player4.position, player4.cards));
      setAction5(getActionText(player5, player5.position, player5.cards));
    }
    if(player0.cards.length > 0) {
      updateActions();
    }
  }, [fetchData, player0, player1, player2, player3, player4, player5]);



  return (
    <div>
      {console.log(player0.position+" "+positions[player0.position]+" "+player0.ptype+" "+player0.name)}
      {console.log(player1.position+" "+positions[player1.position]+" "+player1.ptype+" "+player1.name)}
      {console.log(player2.position+" "+positions[player2.position]+" "+player2.ptype+" "+player2.name)}
      {console.log(player3.position+" "+positions[player3.position]+" "+player3.ptype+" "+player3.name)}
      {console.log(player4.position+" "+positions[player4.position]+" "+player4.ptype+" "+player4.name)}
      {console.log(player5.position+" "+positions[player5.position]+" "+player5.ptype+" "+player5.name)}

      {player0.cards.length!==0 && console.log(player0.name +" : "+player0.cards[0].name+" "+player0.cards[1].name)}
      {player1.cards.length!==0 && console.log(player1.name +" : "+player1.cards[0].name+" "+player1.cards[1].name)}
      {player2.cards.length!==0 && console.log(player2.name +" : "+player2.cards[0].name+" "+player2.cards[1].name)}
      {player3.cards.length!==0 && console.log(player3.name +" : "+player3.cards[0].name+" "+player3.cards[1].name)}
      {player4.cards.length!==0 && console.log(player4.name +" : "+player4.cards[0].name+" "+player4.cards[1].name)}
      {player5.cards.length!==0 && console.log(player5.name +" : "+player5.cards[0].name+" "+player5.cards[1].name)}
      {flopCard.length!==0 && console.log("Flop : "+flopCard[0].name +" "+flopCard[1].name+" "+flopCard[2].name)}
      {turnCard.length!==0 && console.log("Turn : "+turnCard[0].name)}
      {riverCard.length!==0 && console.log("River : "+riverCard[0].name)}

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

      {/* Deal that moves and letter  */}
      <D>{`D`}</D>
      {player0.position==0 && <Ellipse15_0 src={Ellipse15Image} loading='lazy' alt={"Ellipse 15"}/>}
      {player1.position==0 && <Ellipse15_1 src={Ellipse15Image} loading='lazy' alt={"Ellipse 15"}/>}
      {player2.position==0 && <Ellipse15_2 src={Ellipse15Image} loading='lazy' alt={"Ellipse 15"}/>}
      {player3.position==0 && <Ellipse15_3 src={Ellipse15Image} loading='lazy' alt={"Ellipse 15"}/>}
      {player4.position==0 && <Ellipse15_4 src={Ellipse15Image} loading='lazy' alt={"Ellipse 15"}/>}
      {player5.position==0 && player0.cards.length>0 && <Ellipse15_5 src={Ellipse15Image} loading='lazy' alt={"Ellipse 15"}/>}      
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
        ${player1.totalAmt}
      </Q850>
      <Q8501>
      ${player2.totalAmt}
      </Q8501>
      <Q8502>
      ${player3.totalAmt}
      </Q8502> 
       <Q8503>
       ${player4.totalAmt}
      </Q8503>
       <Q8504>
       ${player0.totalAmt}
      </Q8504>
      <Replay>
        {`Replay`}
      </Replay>
      <Q030>
        {`0:30`}
      </Q030>
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
      {/* <Group>
        <R>{`R`}</R><E>{`e`}</E><P>{`p`}</P><L>{`l`}</L><A>{`a`}</A><Y>{`y`}</Y>
      </Group> */}
      {/* Card Texts */}
      {player0.cards.length>0?(<div>
      <CardView position={{x1:"19px", y1:"425px",x2:"43px", y2:"428px"}} hands={player0.cards} />
      </div>):(<div></div>)}
      {player1.cards.length>0?(<div>
      <CardView position={{x1:"49px", y1:"218px",x2:"72px", y2:"223px"}} hands={player1.cards} />
      </div>):(<div></div>)}
      {player2.cards.length>0?(<div>
      <CardView position={{x1:"172px", y1:"175px",x2:"195px", y2:"178px"}} hands={player2.cards} />
       </div>):(<div></div>)}
      {player3.cards.length>0?(<div>
      <CardView position={{x1:"296px", y1:"215px",x2:"318px", y2:"220px"}}  hands={player3.cards} />
       </div>):(<div></div>)}
      {player4.cards.length>0?(<div>
      <CardView position={{x1:"328px", y1:"425px",x2:"350px", y2:"430px"}} hands={player4.cards} />
      </div>):(<div></div>)}
      {player5.cards.length>0?(<div>
      <CardView position={{x1:"65px", y1:"740px",x2:"125px", y2:"740px"}} hands={player5.cards} />
      </div>):(<div></div>)}

      {/* Actions */}
      <ActionView position={{x:"15px", y:"512px"}} data={action0}/>
      <ActionView position={{x:"46px", y:"305px"}} data={action1}/>
      <ActionView position={{x:"230px", y:"235px"}} data={action2}/>
      <ActionView position={{x:"300px", y:"305px"}} data={action3}/>
      <ActionView position={{x:"330px", y:"512px"}} data={action4}/>
      <ActionView position={{x:"160px", y:"650px"}} data={action5}/>
      
      {/* The 5 cards in the middle of table  */}
      <Rectangle23>
      </Rectangle23>
      <Rectangle56>
      </Rectangle56>
      <Rectangle57>
      </Rectangle57>
      <Rectangle58>
      </Rectangle58>
      <Rectangle59>
      </Rectangle59>
      
      {flopCard.length>0?(<div>
      <CenterCardView position={{x:"123px", y:"368px"}} hands={flopCard[0]} />
      </div>):(<div></div>)}
      {flopCard.length>0?(<div>
      <CenterCardView position={{x:"186px", y:"368px"}} hands={flopCard[1]} />
      </div>):(<div></div>)}
      {flopCard.length>0 ?(<div>
      <CenterCardView position={{x:"248px", y:"368px"}} hands={flopCard[2]} />
       </div>):(<div></div>)}
      {turnCard.length>0?(<div>
      <CenterCardView position={{x:"151px", y:"463px"}}  hands={turnCard[0]} />
       </div>):(<div></div>)}
      {riverCard.length>0 ?(<div>
      <CenterCardView position={{x:"213px", y:"463px"}} hands={riverCard[0]} />
      </div>):(<div></div>)}

      <ArrowSquareUp src={ArrowSquareUpImage} loading='lazy' alt={"arrow-square-up"}/>
      <Ellipse13 src={Ellipse13Image} loading='lazy' alt={"Ellipse 13"}/>
      <PlaySquare src={PlaySquareImage} loading='lazy' alt={"play-square"}/>
      </Main1></div>);

}

function CardView(props) {
  const position = props.position;
  const [card1, card2] = props.hands;
  return (
    <div>
      <div style={{
      position:'absolute',
      left: position.x1,
      top: position.y1,
  
      fontSize: "15px",
      color: card1.color,
    }}>
        {card1.name}
    </div>
    <div style={{
      position:'absolute',
      left: position.x2,
      top: position.y2,
  
      fontSize: "15px",
      color: card2.color,
    }}>
        {card2.name}
    </div>
    </div>
    
  );
  }

  function CenterCardView(props) {
    const position = props.position;
    const card = props.hands;
    return (
        <div style={{
        position:'absolute',
        left: position.x,
        top: position.y,
    
        fontSize: "18px",
        color: card.color,
      }}>
          {card.name}
      </div>
    );
    }

  function CardRectangle(props) {
    const bc = props.backgroundColor;
    const position = props.position;
    return (
        <div style={{
          backgroundColor:bc,
        position:'absolute',
        left: position.l,
        top: position.t,
        width: position.w,
        height: position.h,
        fontSize: "15px",
      }}>
      </div>
      );
      }
  
      function ActionView(props) {
        const position = props.position;
        const action = props.data;
        return(
          <div style={{
            position:'absolute',
            left: position.x,
            top: position.y,
      
            fontSize: "15px",
          }}>
            {action}
          </div>
        );
      }
      
export default Main;