import React ,{ useState }from 'react';
import './Main.css';
// import Ellipse12Image from '../../assets/images/Slideroverlay_Ellipse_12.png';
// import Ellipse4Image from 'src/assets/images/Slideroverlay_Ellipse_4.png';
// import Ellipse5Image from 'src/assets/images/Slideroverlay_Ellipse_5.png';
// import Ellipse9Image from 'src/assets/images/Slideroverlay_Ellipse_9.png';
// import Ellipse10Image from 'src/assets/images/Slideroverlay_Ellipse_10.png';
// import Ellipse11Image from 'src/assets/images/Slideroverlay_Ellipse_11.png';
// import ArrowSquareUpImage from 'src/assets/images/Slideroverlay_arrow_square_up.svg';

import SliderImage from '../../assets/images/Slider.png';
import ControlHandleImage1 from '../../assets/images/Slideroverlay__Control_handle.png';
import ControlHandleImage2 from '../../assets/images/Slideroverlay__Control_handle.png';
import ControlHandleImage3 from '../../assets/images/Slideroverlay__Control_handle.png';

// import TooltipImage from '../../assets/images/Slideroverlay_Tooltip.png';
// import Tooltip1Image from '../../assets/images/Slideroverlay_Tooltip.png';
// import Tooltip2Image from '../../assets/images/Slideroverlay_Tooltip.png';

import {styled} from '@mui/material/styles';

// import Menu01 from 'src/components/Menu01/Menu01';
// import PlaySquare from 'src/components/PlaySquare/PlaySquare';

import Close from '../../assets/images/x-close.png';
import { useNavigate } from 'react-router-dom';

const SliderOverlay1 = styled("div")({
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

const Rectangle62 = styled("div")({
  backgroundColor: `rgba(35, 51, 41, 1)`,
  borderRadius: `5px`,
  width: `26px`,
  height: `27px`,
  position: `absolute`,
  left: `299px`,
  top: `301px`,
});

const Rectangle15 = styled("div")({
  background: `linear-gradient(-89.64deg, rgba(35, 51, 41, 1) 4.1242209425326255%, rgba(99, 212, 113, 1) 99.89351945840635%)`,
  border: `1px solid rgba(243, 170, 69, 1)`,
  boxSizing: `border-box`,
  borderRadius: `1000px`,
  width: `349.94px`,
  height: `229.44px`,
  position: `absolute`,
  left: `373px`,
  top: `558px`,
});

const Ellipse12 = styled("img")({
  height: `51px`,
  width: `51px`,
  position: `absolute`,
  left: `171px`,
  top: `559px`,
});

const Rectangle8 = styled("div")({
  backgroundColor: `rgba(42, 46, 49, 1)`,
  width: `390px`,
  height: `66px`,
  position: `absolute`,
  left: `0px`,
  top: `23px`,
});

// const Menu01 = styled(Menu01)({
//   width: `28px`,
//   height: `28px`,
//   position: `absolute`,
//   left: `345px`,
//   top: `41px`,
// });

const Rectangle9 = styled("div")({
  backgroundColor: `rgba(82, 163, 82, 1)`,
  boxShadow: `0px 4px 4px rgba(243, 170, 69, 1)`,
  borderRadius: `10px`,
  width: `78px`,
  height: `80px`,
  position: `absolute`,
  left: `295px`,
  top: `628px`,
});

const Rectangle60 = styled("div")({
  backgroundColor: `rgba(82, 163, 82, 1)`,
  boxShadow: `0px 4px 4px rgba(243, 170, 69, 1)`,
  borderRadius: `10px`,
  width: `42px`,
  height: `80px`,
  position: `absolute`,
  left: `247px`,
  top: `628px`,
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
  left: `13px`,
  top: `640px`,
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
  left: `51px`,
  top: `654px`,
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
  position: `absolute`,
  left: `301px`,
  top: `659px`,
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
});

const Rectangle13 = styled("div")({
  backgroundColor: `rgba(255, 255, 255, 1)`,
  border: `1px solid rgba(0, 0, 0, 0.47)`,
  boxSizing: `border-box`,
  borderRadius: `10px`,
  width: `100.64px`,
  height: `161.3px`,
  position: `absolute`,
  left: `120px`,
  top: `726px`,
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
  left: `1px`,
  top: `785px`,
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
  left: `183px`,
  top: `576px`,
});

const Rectangle25 = styled("div")({
  backgroundColor: `rgba(243, 170, 69, 1)`,
  width: `31px`,
  height: `41px`,
  position: `absolute`,
  left: `18px`,
  top: `422px`,
});

const Rectangle34 = styled("div")({
  backgroundColor: `rgba(243, 170, 69, 1)`,
  width: `30px`,
  height: `41px`,
  position: `absolute`,
  left: `47px`,
  top: `215px`,
});

const Rectangle44 = styled("div")({
  backgroundColor: `rgba(243, 170, 69, 1)`,
  width: `30px`,
  height: `41px`,
  position: `absolute`,
  left: `171px`,
  top: `173px`,
});

const Rectangle47 = styled("div")({
  backgroundColor: `rgba(243, 170, 69, 1)`,
  width: `30px`,
  height: `41px`,
  position: `absolute`,
  left: `295px`,
  top: `214px`,
});

const Rectangle50 = styled("div")({
  backgroundColor: `rgba(243, 170, 69, 1)`,
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
  left: `58px`,
  top: `131px`,
});

const Jay1 = styled("div")({
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
  left: `336px`,
  top: `340px`,
});

const Rectangle23 = styled("div")({
  backgroundColor: `rgba(255, 255, 255, 1)`,
  borderRadius: `10px`,
  width: `54.28px`,
  height: `84.93px`,
  position: `absolute`,
  left: `108px`,
  top: `362px`,
});

const Rectangle56 = styled("div")({
  backgroundColor: `rgba(255, 255, 255, 1)`,
  borderRadius: `10px`,
  width: `54.28px`,
  height: `84.93px`,
  position: `absolute`,
  left: `171px`,
  top: `362px`,
});

const Rectangle58 = styled("div")({
  backgroundColor: `rgba(255, 255, 255, 1)`,
  borderRadius: `10px`,
  width: `54.28px`,
  height: `84.93px`,
  position: `absolute`,
  left: `136px`,
  top: `457px`,
});

const Rectangle57 = styled("div")({
  backgroundColor: `rgba(255, 255, 255, 1)`,
  borderRadius: `10px`,
  width: `54.28px`,
  height: `84.93px`,
  position: `absolute`,
  left: `233px`,
  top: `362px`,
});

const Rectangle59 = styled("div")({
  backgroundColor: `rgba(255, 255, 255, 1)`,
  borderRadius: `10px`,
  width: `54.28px`,
  height: `84.93px`,
  position: `absolute`,
  left: `198px`,
  top: `457px`,
});

const ArrowSquareUp = styled("img")({
  height: `auto`,
  width: `24px`,
  position: `absolute`,
  left: `256px`,
  top: `659px`,
});

// const PlaySquare = styled(PlaySquare)({
//   width: `24px`,
//   height: `24px`,
//   position: `absolute`,
//   left: `11px`,
//   top: `805px`,
// });

const Rectangle61 = styled("div")({
  backgroundColor: `rgba(255, 255, 255, 0.95)`,
  width: `390px`,
  height: `844px`,
  position: `absolute`,
  left: `0px`,
  top: `0px`,
});


const ControlHandle1 = styled("img")({
  height: `24px`,
  width: `24px`,
  position: `absolute`,
  left: `280px`,
  top: `311px`,
});

const ControlHandle2 = styled("img")({
    height: `24px`,
    width: `24px`,
    position: `absolute`,
    left: `280px`,
    top: `378px`,
  });

  const ControlHandle3 = styled("img")({
    height: `24px`,
    width: `24px`,
    position: `absolute`,
    left: `280px`,
    top: `604px`,
  });
  
const Tooltip = styled("img")({
  height: `34px`,
  width: `43px`,
  position: `absolute`,
  left: `200px`,
  top: `594px`,
});

const Tooltip1 = styled("img")({
  height: `34px`,
  width: `43px`,
  position: `absolute`,
  left: `200px`,
  top: `368px`,
});

const Tooltip2 = styled("img")({
  height: `34px`,
  width: `43px`,
  position: `absolute`,
  left: `200px`,
  top: `301px`,
});

const Q0 = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Outfit`,
  fontWeight: `400`,
  fontSize: `12px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `214px`,
  top: `604px`,
});

const Q75 = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Outfit`,
  fontWeight: `400`,
  fontSize: `12px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `212px`,
  top: `378px`,
});

const AllIn = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Outfit`,
  fontWeight: `400`,
  fontSize: `12px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `207px`,
  top: `311px`,
});

    const XClose = styled("img")({

  width: `28px`,
  height: `28px`,
  position: `absolute`,
  left: `347px`,
  top: `41px`,
});

const PoKer = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `Poker`,
  fontWeight: `400`,
  fontSize: `33px`,
  letterSpacing: `4.29px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `14px`,
  top: `40px`,
});

const Slider = styled("img")({
    height: `24px`,
    width: `320px`,
    alignSelf: `stretch`,
    position: `absolute`,
    left: `428px`,
    top: `477px`,
  });


function SliderOverlay() {

    const navigate = useNavigate();
    const [selectedValue, setSelectedValue] = useState(9);

    const handleCloseClick = () => {
        navigate('/main');
    };
    
    const handleSliderChange = (event) => {
        setSelectedValue(parseInt(event.target.value));
        console.log(parseInt(event.target.value))
      };
    
  return (
    <SliderOverlay1>
       {/* <Rectangle62>
      </Rectangle62>
      <Rectangle15>
      </Rectangle15>
      <Ellipse12 src={Ellipse12Image} loading='lazy' alt={"Ellipse 12"}/> 
      <Rectangle8>
      </Rectangle8>
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
      <Raise>
        {`Raise`}
      </Raise>
      <Check>
        {`Check`}
      </Check>
      <Rectangle12>
      </Rectangle12>
      <Rectangle13>
      </Rectangle13>
     <Ellipse4 src={Ellipse4Image} loading='lazy' alt={"Ellipse 4"}/>
      <Ellipse5 src={Ellipse5Image} loading='lazy' alt={"Ellipse 5"}/>
      <Ellipse9 src={Ellipse9Image} loading='lazy' alt={"Ellipse 9"}/>
      <Ellipse10 src={Ellipse10Image} loading='lazy' alt={"Ellipse 10"}/>
      <Ellipse11 src={Ellipse11Image} loading='lazy' alt={"Ellipse 11"}/>
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
      <Q8501>
        {`$850`}
      </Q8501>
      <Q8502>
        {`$850`}
      </Q8502>
      <Q8503>
        {`$850`}
      </Q8503>
      <Q8504>
        {`$850`}
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
        {`Michael`}
      </Michael>
      <Jay>
        {`Jay`}
      </Jay>
      <Jay1>
        {`Jay`}
      </Jay1>
      <Stan>
        {`Stan`}
      </Stan>
      <Jack>
        {`Jack`}
      </Jack>}
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
      <PlaySquare/>
      <Rectangle61>
      </Rectangle61>*/}
      <Slider src={SliderImage} loading='lazy' alt={"Slider"}/>
      <ControlHandle1 src={ControlHandleImage1} loading='lazy' alt={"_Control handle"}/>
      <ControlHandle2 src={ControlHandleImage2} loading='lazy' alt={"_Control handle"}/>
      <ControlHandle3 src={ControlHandleImage3} loading='lazy' alt={"_Control handle"}/>
      {/* <Tooltip src={TooltipImage} loading='lazy' alt={"Tooltip"}/>
      <Tooltip1 src={Tooltip1Image} loading='lazy' alt={"Tooltip"}/>
      <Tooltip2 src={Tooltip2Image} loading='lazy' alt={"Tooltip"}/> */}
      <Q0>
        {`$0`}
      </Q0>
      <Q75>{`$75`}</Q75>
      <AllIn>{`All-In`}</AllIn>

      {/*<PoKer>
        {`PoKER`}
      </PoKer> */}
      <h1>{selectedValue}</h1>
            <button onClick={handleCloseClick}>
            <XClose src={Close} loading='lazy'/>
            </button>
        
    <input class="vranger"
        type="range"
        min={0}
        max={100}
        value={selectedValue}
        onChange={handleSliderChange}
    />
    
    </SliderOverlay1>);

  }

export default SliderOverlay;

  