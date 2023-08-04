
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
import PokerChipsImage from '../../assets/images/Main_poker_chips.png';
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
  height: `40px`,
  position: `absolute`,
  left: `296px`,
  top: `637px`,
});

const Rectangle9a = styled("div")({
  backgroundColor: `rgba(82, 163, 82, 1)`,
  boxShadow: `0px 4px 4px rgba(243, 170, 69, 1)`,
  borderRadius: `10px`,
  width: `79px`,
  height: `40px`,
  position: `absolute`,
  left: `296px`,
  top: `690px`,
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
  top: `650px`,
});

const Match = styled("div")({
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
  top: `700px`,
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

const Q8505 = styled("div")({
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
  left: `160px`,
  top: `680px`,
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

const ArrowSquareUp = styled("img")({
  height: `auto`,
  width: `25px`,
  position: `absolute`,
  left: `256px`,
  top: `668px`,
});

const PokerChips0 = styled("img")({
  height: `18px`,
  width: `18px`,
  objectFit: `cover`,
  position: `absolute`,
  left: `91px`,
  top: `478px`,
});

const PokerChips1 = styled("img")({
  height: `18px`,
  width: `18px`,
  objectFit: `cover`,
  position: `absolute`,
  left: `117px`,
  top: `318px`,
});

const PokerChips2 = styled("img")({
  height: `18px`,
  width: `18px`,
  objectFit: `cover`,
  position: `absolute`,
  left: `187px`,
  top: `285px`,
});

const PokerChips3 = styled("img")({
  height: `18px`,
  width: `18px`,
  objectFit: `cover`,
  position: `absolute`,
  left: `256px`,
  top: `318px`,
});

const PokerChips4 = styled("img")({
  height: `18px`,
  width: `18px`,
  objectFit: `cover`,
  position: `absolute`,
  left: `284px`,
  top: `478px`,
});

const PokerChips5 = styled("img")({
  height: `18px`,
  width: `18px`,
  objectFit: `cover`,
  position: `absolute`,
  left: `180px`,
  top: `601px`,
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
  let ps = 0;

  const [playerSelectedAmt, setPlayerSelectedAmt] = useState(false);
  const [flopCard, setflopCard] = useState([]);
  const [turnCard, setTurnCard] = useState([]);
  const [riverCard, setRiverCard] = useState([]);

  const [potSize, setPotSize] = useState(0);
  const [maxAmt, setmaxAmt] = useState(0);

  const { dealerIndex, updateDealerIndex,
    player0, updatePlayer0,
    player1, updatePlayer1,
    player2, updatePlayer2,
    player3, updatePlayer3,
    player4, updatePlayer4,
    player5, updatePlayer5,
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
  const [myAction, setMyAction] = useState("");

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
  const handleDealClick = () => {

    if(dealFlag=='hold'){
      const shuffledDeck = deckOfCards.sort(() => Math.random() - 0.5);
      updateDeck(shuffledDeck)
  
      updateDealerIndex((dealerIndex+1)%6)

      updatePlayer0(holdPlayerUpdate(player0,shuffledDeck, 0,2));
      updatePlayer1(holdPlayerUpdate(player1,shuffledDeck, 2,4));
      updatePlayer2(holdPlayerUpdate(player2,shuffledDeck, 4,6));
      updatePlayer3(holdPlayerUpdate(player3,shuffledDeck, 6,8));
      updatePlayer4(holdPlayerUpdate(player4,shuffledDeck, 8,10));
      updatePlayer5(holdPlayerUpdate(player5,shuffledDeck, 10,12));

      updateDealFlag('flop')
      setflopCard([]);
      setTurnCard([]);
      setRiverCard([]);
      setPlayerSelectedAmt(false)

    }else if(dealFlag=='flop'){
      
      let flopCards=shuffledDeck.slice(12, 15);
      setflopCard(flopCards); 
  
      let bet0 = 45;let bet1 = 45;let bet2 = 45;
      let bet3 = 45;let bet4 = 45;let bet5 = 45;

      updatePlayer0(flopPlayerUpdate(player0,action0,bet0));
      updatePlayer1(flopPlayerUpdate(player1,action1,bet1));
      updatePlayer2(flopPlayerUpdate(player2,action2,bet2));
      updatePlayer3(flopPlayerUpdate(player3,action3,bet3));
      updatePlayer4(flopPlayerUpdate(player4,action4,bet4));
      updatePlayer5(flopPlayerUpdate(player5,'',0));

        console.log("HAND AFTER FLOP CARDS");
        let fiveCard0 = player0.cards;
        const combinedArray0 = fiveCard0.concat(flopCards);
        console.log(player0.name +" "+determineHandRanking(combinedArray0));
        let fiveCard1 = player1.cards;
        const combinedArray1 = fiveCard1.concat(flopCards);
        console.log(player1.name +" "+determineHandRanking(combinedArray1));
        let fiveCard2 = player2.cards;
        const combinedArray2 = fiveCard2.concat(flopCards);
        console.log(player2.name +" "+determineHandRanking(combinedArray2));
        let fiveCard3 = player3.cards;
        const combinedArray3 = fiveCard3.concat(flopCards);
        console.log(player3.name +" "+determineHandRanking(combinedArray3));
        let fiveCard4 = player4.cards;
        const combinedArray4 = fiveCard4.concat(flopCards);
        console.log(player4.name +" "+determineHandRanking(combinedArray4));
        let fiveCard5 = player5.cards;
        const combinedArray5 = fiveCard5.concat(flopCards);
        console.log(player5.name +" "+determineHandRanking(combinedArray5));

        updateDealFlag('turn'); 
        setPlayerSelectedAmt(false)

    }else if(dealFlag=='turn'){
      let turnCards=shuffledDeck.slice(15, 16);
      setTurnCard(turnCards);

      let bet0 = 35;let bet1 = 35;let bet2 = 35;
      let bet3 = 35;let bet4 = 35;let bet5 = 35;

      updatePlayer0(flopPlayerUpdate(player0,action0,bet0));
      updatePlayer1(flopPlayerUpdate(player1,action1,bet1));
      updatePlayer2(flopPlayerUpdate(player2,action2,bet2));
      updatePlayer3(flopPlayerUpdate(player3,action3,bet3));
      updatePlayer4(flopPlayerUpdate(player4,action4,bet4));
      updatePlayer5(flopPlayerUpdate(player5,'',0));

        console.log("HAND AFTER TURN CARDS");
        let fiveCard0 = player0.cards;
        const combinedArray0 = fiveCard0.concat(flopCard);
        const combinedArray00 = combinedArray0.concat(turnCards);
        console.log(player0.name +" "+determineHandRanking(combinedArray00));
        let fiveCard1 = player1.cards;
        const combinedArray1 = fiveCard1.concat(flopCard);
        const combinedArray11 = combinedArray1.concat(turnCards);
        console.log(player1.name +" "+determineHandRanking(combinedArray11));
        let fiveCard2 = player2.cards;
        const combinedArray2 = fiveCard2.concat(flopCard);
        const combinedArray22 = combinedArray2.concat(turnCards);
        console.log(player2.name +" "+determineHandRanking(combinedArray22));
        let fiveCard3 = player3.cards;
        const combinedArray3 = fiveCard3.concat(flopCard);
        const combinedArray33 = combinedArray3.concat(turnCards);
        console.log(player3.name +" "+determineHandRanking(combinedArray33));
        let fiveCard4 = player4.cards;
        const combinedArray4 = fiveCard4.concat(flopCard);
        const combinedArray44 = combinedArray4.concat(turnCards);
        console.log(player4.name +" "+determineHandRanking(combinedArray44));
        let fiveCard5 = player5.cards;
        const combinedArray5 = fiveCard5.concat(flopCard);
        const combinedArray55 = combinedArray5.concat(turnCards);
        console.log(player5.name +" "+determineHandRanking(combinedArray55));

        updateDealFlag('river');   
        setPlayerSelectedAmt(false)

    }else if(dealFlag=='river'){
      let riverCards=shuffledDeck.slice(16, 17);
      setRiverCard(riverCards);
      updateDealFlag('hold');   

      let bet0 = 15;let bet1 = 15;let bet2 = 15;
      let bet3 = 15;let bet4 = 15;let bet5 = 15;

      updatePlayer0(flopPlayerUpdate(player0,action0,bet0));
      updatePlayer1(flopPlayerUpdate(player1,action1,bet1));
      updatePlayer2(flopPlayerUpdate(player2,action2,bet2));
      updatePlayer3(flopPlayerUpdate(player3,action3,bet3));
      updatePlayer4(flopPlayerUpdate(player4,action4,bet4));
      updatePlayer5(flopPlayerUpdate(player5,'',0));

    console.log("HAND AFTER RIVER CARDS");
    
    let fiveCard0 = player0.cards;
    const combinedArray0 = fiveCard0.concat(flopCard);
    const combinedArray00 = combinedArray0.concat(turnCard).concat(riverCard);
    console.log(player0.name +" "+determineHandRanking(combinedArray00));
    let fiveCard1 = player1.cards;
    const combinedArray1 = fiveCard1.concat(flopCard);
    const combinedArray11 = combinedArray1.concat(turnCard).concat(riverCard);
    console.log(player1.name +" "+determineHandRanking(combinedArray11));
    let fiveCard2 = player2.cards;
    const combinedArray2 = fiveCard2.concat(flopCard);
    const combinedArray22 = combinedArray2.concat(turnCard).concat(riverCard);
    console.log(player2.name +" "+determineHandRanking(combinedArray22));
    let fiveCard3 = player3.cards;
    const combinedArray3 = fiveCard3.concat(flopCard);
    const combinedArray33 = combinedArray3.concat(turnCard).concat(riverCard);
    console.log(player3.name +" "+determineHandRanking(combinedArray33));
    let fiveCard4 = player4.cards;
    const combinedArray4 = fiveCard4.concat(flopCard);
    const combinedArray44 = combinedArray4.concat(turnCard).concat(riverCard);
    console.log(player4.name +" "+determineHandRanking(combinedArray44));
    let fiveCard5 = player5.cards;
    const combinedArray5 = fiveCard5.concat(flopCard);
    const combinedArray55 = combinedArray5.concat(turnCard).concat(riverCard);
    console.log(player5.name +" "+determineHandRanking(combinedArray55));


    // updatePlayer0(riverPlayerUpdate(player0,action0,bet0));
    // updatePlayer1(riverPlayerUpdate(player1,action1,bet1));
    // updatePlayer2(riverPlayerUpdate(player2,action2,bet2));
    // updatePlayer3(riverPlayerUpdate(player3,action3,bet3));
    // updatePlayer4(riverPlayerUpdate(player4,action4,bet4));
    // updatePlayer5(riverPlayerUpdate(player5,action5,bet5));

    //  let p0_bet = 20;
    //  updatePlayer0(playerAfterBet(player0, shuffledDeck.slice(0, 2), player0.totalAmt, player0.currentAmt, p0_bet));
    //  console.log(player0.name + " bet:", p0_bet, "in [100,10,5] ", getChips(p0_bet));
  }
 
  };

  function getBets(player){

    if(player.position==0+1){ // dealer
        return 40;
    }
    if(player.position==1+1){ // small blind
      return 10;
    }
    if(player.position==2+1){ // big blind
      return 20;
    }
    if(player.position==3+1){ // low jack
      return 40;
    }
    if(player.position==5){ // high jack
      return 40;
    }
    if(player.position==0){ // cut off
      return 0;
    }
  }

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
    
      if(position==1||position==2){
        return 'RAISE';
      }

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
      const a0 = getActionText(player0, player0.position, player0.cards);
      const a1 = getActionText(player1, player1.position, player1.cards);
      const a2 = getActionText(player2, player2.position, player2.cards);
      const a3 = getActionText(player3, player3.position, player3.cards);
      const a4 = getActionText(player4, player4.position, player4.cards);
      const a5 = getActionText(player5, player5.position, player5.cards);
	  
	  setAction0(a0);
	  setAction1(a1);
	  setAction2(a2);
	  setAction3(a3);
	  setAction4(a4);
	  setAction5(a5);

    }
    if(player0.cards.length > 0) {
      updateActions();
    }
  }, [fetchData, player0, player1, player2, player3, player4, player5]);

  const handlePlayerMatch = () => {
    let betActionList = [
      {a:action0,pb:player0.bet},{a:action1,pb:player1.bet},
      {a:action2,pb:player2.bet},{a:action3,pb:player3.bet},
      {a:action4,pb:player4.bet},{a:myAction,pb:player5.bet}]
      let amt =0;
      betActionList.map(obj=>{
        if(obj.pb>amt && obj.a!=='FOLD'){
          amt=obj.pb;
        }
      })

    setmaxAmt(amt);

    updatePlayer0(matchPlayerUpdate(player0,action0,amt));
    updatePlayer1(matchPlayerUpdate(player1,action1,amt));
    updatePlayer2(matchPlayerUpdate(player2,action2,amt));
    updatePlayer3(matchPlayerUpdate(player3,action3,amt));
    updatePlayer4(matchPlayerUpdate(player4,action4,amt));
    updatePlayer5(matchPlayerUpdate(player5,action5,amt));

    let ps0 = matchPotSize(player0,action0,amt);
    let ps1 = matchPotSize(player1,action1,amt);
    let ps2 = matchPotSize(player2,action2,amt);
    let ps3 = matchPotSize(player3,action3,amt);
    let ps4 = matchPotSize(player4,action4,amt);
    let ps5 = matchPotSize(player5,action5,amt);

    let newPS = ps0+ps1+ps2+ps3+ps4+ps5;

    setPotSize(potSize+newPS);

  };

  function matchPotSize(player,action, amt){

    let yourBet = player.bet;
    let matchAmt = amt-yourBet;

    if(action==='FOLD'){
      matchAmt =0;
    }
    return matchAmt;
  }

  function matchPlayerUpdate(player, action, amt) {

    let yourBet = player.bet;
    let matchAmt = amt-yourBet;

    if(action==='FOLD'){
      matchAmt =0;
    }
    let playerx= {name:player.name, position:player.position,
      ptype: player.ptype, cards:player.cards, 
      totalAmt:player.totalAmt-matchAmt, currentAmt:player.currentAmt+matchAmt,
      bet:player.bet+matchAmt,
      action:action, play:player.play}  

      return playerx;
  }

  
  const handlePlayerRaise = () => {
    
    let amt = 60;

    console.log("Press Raise");
    setAction5('RAISE');
    setMyAction('RAISE')
    setPlayerSelectedAmt(true);
    let playerx= {name:player5.name, position:player5.position,
      ptype: player5.ptype, cards:player5.cards, 
      totalAmt:player5.totalAmt-amt, currentAmt:player5.currentAmt+amt,
      bet:amt,
      action:'RAISE', play:true}  
    updatePlayer5(playerx)

  setPotSize(potSize+calculatePotSize("RAISE", amt));

};

const handlePlayerFold = () => {
  
  console.log("Press FOLD");
  setAction5('FOLD');
  setPlayerSelectedAmt(true);
    let playerx= {name:player5.name,position:player5.position,ptype: player5.ptype,
      cards:player5.cards, 
      totalAmt:player5.totalAmt, currentAmt:player5.currentAmt,
      bet:0,
      action:'FOLD', play:false}  
    updatePlayer5(playerx)

    setPotSize(calculatePotSize("FOLD", 0));
};

const handlePlayerArrow = () => {
  navigate('/raise-amt');
};

const handlePlayerCheck = () => {

};

const handleMenuClick = () => {
    navigate('/profile');
};

function calculatePotSize(myAction, amt) {

  let pts = 0;

  if(action0!=='FOLD'){
    pts=pts+player0.currentAmt;
  }
  if(action1!=='FOLD'){
    pts=pts+player1.currentAmt;
  }
  if(action2!=='FOLD'){
    pts=pts+player2.currentAmt;
  }
  if(action3!=='FOLD'){
    pts=pts+player3.currentAmt;
  }
  if(action4!=='FOLD'){
    pts=pts+player4.currentAmt;
  }
  if(myAction==='RAISE'){
    pts=pts+amt;
  }
  return pts;
}

  function holdPlayerUpdate(player,shuffledDeck,i,j) {

    const bet =  getBets(player);

    if(bet>maxAmt){
      setmaxAmt(bet)
    }

    let playerx= {name:player.name,position: (player.position+5)%6,ptype: player.ptype,
        cards:shuffledDeck.slice(i, j), 
        totalAmt:player.totalAmt-bet, 
        currentAmt:player.currentAmt+bet,
        bet:bet,
        action:player.action, play:true
      }
    
    return playerx;
  }

  function flopPlayerUpdate(player, action, bet) {
    
    let playerx;
    if(action=='FOLD'){
      playerx= {name:player.name,position:player.position,ptype: player.ptype,
        cards:player.cards, 
        totalAmt:player.totalAmt, currentAmt:0,
        bet:bet,
        action:action, play:false}  
    }else{
      playerx= {name:player.name,position:player.position,ptype: player.ptype,
        cards:player.cards, 
        totalAmt:player.totalAmt-bet, currentAmt:bet,
        bet:bet,
        action:action, play:true} 
    }
    return playerx;
  }

  function riverPlayerUpdate(player, action, bet) {
    
    let playerx;
    if(action=='FOLD'){
      playerx= {name:player.name,position:player.position,ptype: player.ptype,
        cards:player.cards, 
        totalAmt:850, currentAmt:0,
        action:action, play:false}  
    }else{
      playerx= {name:player.name,position:player.position,ptype: player.ptype,
        cards:player.cards, 
        totalAmt:player.totalAmt-bet, currentAmt:0,
        action:action, play:true} 
    }
    return playerx;
  }
  function determineHandRanking(cards) {
    // Check for a flush
    const suits = cards.map(card => card.name.charAt(1));
    const isFlush = suits.every(suit => suit === suits[0]);
  
    // Create a map of card ranks and their occurrences
    const ranks = {};
    cards.forEach(card => {
      const rank = card.name.charAt(0);
      ranks[rank] = (ranks[rank] || 0) + 1;
    });
  
    // Check for a straight
    const sortedRanks = Object.keys(ranks).sort((a, b) => ('23456789TJQKA'.indexOf(a) - '23456789TJQKA'.indexOf(b)));
    const isStraight = sortedRanks.every((rank, index) => index === 0 || '23456789TJQKA'.indexOf(rank) === '23456789TJQKA'.indexOf(sortedRanks[index - 1]) + 1);
  
    // Check for straight flush and royal flush
    const isStraightFlush = isFlush && isStraight;
    const isRoyalFlush = isStraightFlush && sortedRanks[0] === 'T';
  
    // Check for other hand rankings
    const rankValues = Object.values(ranks);
    const isFourOfAKind = rankValues.includes(4);
    const isFullHouse = rankValues.includes(3) && rankValues.includes(2);
    const isThreeOfAKind = rankValues.includes(3);
    const isTwoPair = rankValues.filter(val => val === 2).length === 2;
    const isOnePair = rankValues.includes(2);
  
    // Determine the hand ranking
    if (isRoyalFlush) return "Royal Flush";
    if (isStraightFlush) return "Straight Flush";
    if (isFourOfAKind) return "Four of a Kind";
    if (isFullHouse) return "Full House";
    if (isFlush) return "Flush";
    if (isStraight) return "Straight";
    if (isThreeOfAKind) return "Three of a Kind";
    if (isTwoPair) return "Two Pair";
    if (isOnePair) return "One Pair";
    return "High Card";
  }

  function updateActionInPlayer(player, action,bet){

    let playerx;
    if(action=='FOLD'){
      playerx= {name:player.name,position:player.position,ptype: player.ptype,
        cards:player.cards, 
        totalAmt:player.totalAmt, currentAmt:0,
        action:action, play:false}  
    }else{
      playerx= {name:player.name,position:player.position,ptype: player.ptype,
        cards:player.cards, 
        totalAmt:player.totalAmt-bet, currentAmt:player.currentAmt+bet,
        action:action, play:true} 
    }
    return playerx;
  }
  
  function printDetails(player) {

    let printStr = player.name+" "+player.position+" "+positions[player.position]+" "+player.ptype+" ";
    if(player.cards.length!==0){
      printStr = printStr + player0.cards[0].name+" "+player0.cards[1].name+" ";
    }
    printStr = printStr + player.totalAmt+" "+player.currentAmt+" "+player.bet+" ";
    printStr = printStr + player.action +" "+player.play;
    console.log(printStr);
  
  }
  return (
    <div>

    {/* {printDetails(player0, bet0)}
    {printDetails(player1, bet1)}
    {printDetails(player2, bet2)}
    {printDetails(player3, bet3)}
    {printDetails(player4, bet4)}
    {printDetails(player5, bet5)} */}

    {printDetails(player0)}
    {printDetails(player1)}
    {printDetails(player2)}
    {printDetails(player3)}
    {printDetails(player4)}
    {printDetails(player5)} 


      {flopCard.length!==0 && console.log("Flop : "+flopCard[0].name +" "+flopCard[1].name+" "+flopCard[2].name)}
      {turnCard.length!==0 && console.log("Turn : "+turnCard[0].name)}
      {riverCard.length!==0 && console.log("River : "+riverCard[0].name)}
      {console.log("Pot Size : "+potSize)}

    <Main1>
 
      {/* <Rectangle15>
      </Rectangle15> */}
      {/* Table  */}
      <Rectangle15 src={Rectangle15Image} loading='lazy' alt={"Rectangle 15"}></Rectangle15>
      {/* Dealer token, timer , Deal */}
    
      <Ellipse12 src={Ellipse12Image} loading='lazy' alt={"Ellipse 12"}/>
      <button onClick={handleDealClick}>
        <Ellipse14 src={Ellipse14Image} loading='lazy' alt={"Ellipse 14"}/>
        <Deal>{`Deal`}</Deal>
      </button>

      {/* Deal that moves and letter  */}
      {/* <D>{`D`}</D> */}
      {player0.cards.length==0 && <Ellipse15_0 src={Ellipse15Image} loading='lazy' alt={"Ellipse 15"}/>}
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
    
      <button onClick={handlePlayerRaise}>{/* PRESS RAISE */}
      <Rectangle9></Rectangle9>
      <Raise>{`Raise`}</Raise>
      </button>
      <button onClick={handlePlayerMatch}>{/* PRESS Match */}
      <Rectangle9a></Rectangle9a>
      <Match>{`Match`}</Match>
      </button>
      <button onClick={() => handlePlayerArrow()}>  {/* UP ARROW */}
      <Rectangle60></Rectangle60>
      </button>
      <button onClick={() => handlePlayerCheck()}> {/* PRESS CHECK */}
      <Rectangle11></Rectangle11>
      <Check>{`Check`}</Check>
      </button>
      <button onClick={handlePlayerFold}> {/* PRESS FOLD */}
      <Rectangle10></Rectangle10>
      <Fold>{`Fold`}</Fold>
      </button>
    
   
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
      {action1!=='FOLD'&& <div>${player1.totalAmt}</div>}  
      </Q850>
      <Q8501>
      {action2!=='FOLD'&& <div>${player2.totalAmt}</div>} 
      </Q8501>
      <Q8502>
      {action3!=='FOLD'&& <div>${player3.totalAmt}</div>} 
      </Q8502> 
       <Q8503>
       {action4!=='FOLD'&& <div>${player4.totalAmt}</div>} 
      </Q8503>
       <Q8504>
       {action0!=='FOLD'&& <div>${player0.totalAmt}</div>} 
      </Q8504>
      <Q8505>
       {<div>${player5.totalAmt}</div>} 
      </Q8505>
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

        {console.log("PS :"+ps+" " +potSize)}
      <ActionView position={{x:"250px", y:"600px"}} data={`PotSize : `+potSize}/>

      {/* Poker Chips */}
      {player0.cards.length>0 && 
      <div>
      { action0!=='FOLD' && <PokerChips0 src={PokerChipsImage} loading='lazy' alt={"poker-chips 1"}/>}
      { action1!=='FOLD' && <PokerChips1 src={PokerChipsImage} loading='lazy' alt={"poker-chips 1"}/>}
      { action2!=='FOLD' && <PokerChips2 src={PokerChipsImage} loading='lazy' alt={"poker-chips 1"}/>}
      { action3!=='FOLD' && <PokerChips3 src={PokerChipsImage} loading='lazy' alt={"poker-chips 1"}/>}
      { action4!=='FOLD' && <PokerChips4 src={PokerChipsImage} loading='lazy' alt={"poker-chips 1"}/>}
      { playerSelectedAmt===true && <PokerChips5 src={PokerChipsImage} loading='lazy' alt={"poker-chips 1"}/>}
      </div>}


  { player0.cards.length>0 && 
  <div>
  <PokerAmtView  position={{y:"458px", x:"91px"}} data={player0.currentAmt} action={action0}/>
  <PokerAmtView  position={{y:"303px", x:"117px"}} data={player1.currentAmt} action={action1}/>
  <PokerAmtView  position={{y:"265px", x:"187px"}} data={player2.currentAmt} action={action2}/>
  <PokerAmtView  position={{y:"303px", x:"256px"}} data={player3.currentAmt} action={action3}/>
  <PokerAmtView  position={{y:"458px", x:"284px"}} data={player4.currentAmt} action={action4}/>
  {playerSelectedAmt===true && <PokerAmtView  position={{y:"581px", x:"180px"}} data={player5.currentAmt} action={myAction}/>}
  </div>}
  
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
    // <PokerChipView src={PokerChipsImage} loading='lazy' alt={"poker-chips 1"} position={{x:"458px", y:"91px"}} data={player0.currentAmt}/>

    function PokerChipView(props) {
      const position = props.position;
      const currentAmt = props.data;
      const image = props.src;
      
      return (
          <div style={{
            height: `30px`,
            width: `18px`,
            src:image,
            objectFit: `cover`,
            position: `absolute`,
            left: position.x,
            top: position.y,
        }}>
           {currentAmt} 
        </div>
      );
      }
      function PokerAmtView(props) {
        const position = props.position;
        const currentAmt = props.data;
        const image = props.src;
        const action = props.action;
        if(action!=='FOLD'){
          return (
            <div style={{
              height: `30px`,
              width: `18px`,
              position: `absolute`,
              fontSize: "12px",
              color : "#FFFFFF",
              left: position.x,
              top: position.y,
          }}>
             {currentAmt} 
          </div>
        );
        }else{
          return(<div></div>);
        }
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