// eslint-disable-next-line no-unused-vars
import { CSSProperties } from 'react';
import { Typography } from '@material-ui/core';
import { ColorX } from 'IZOArc/STATIC';
import { ProjectName } from './Config';
import { HStack } from 'IZOArc/LabIZO/Stackizo';
import { Box } from '@mui/system';
import { SITEBASE } from './Domain';

export const IZOFontFamily = "Palanquin";

/**
 * @type {Object.<string, String | {r: Number, g: Number, b: Number, a: Number}>}
 */
 export const IZOTheme = {
  homeBG: "aliceblue",
  menuBG: "black",
  menuFG: "greyOut",
  btnHover: "grey"
};

/**
 * @type {JSX.Element}
 */
 export const ProjectDis = (
  <Typography style={{ 
    fontFamily: IZOFontFamily, 
    color: ColorX.GetColorCSS(IZOTheme.menuFG),
    }}>
    {ProjectName}
  </Typography>
);
  
/**
 * @type {{
 *  src: String,
 *  style: CSSProperties,
 *  imgStyle: CSSProperties,
 *  preRender: JSX.Element,
 *  postRender: JSX.Element
 * }}
 */
export const GateDis = {
  src: SITEBASE + "Images/Gammon_logo.png",
  style: {
    width: 200,
    height: 200
  },
  postRender: 
    <HStack>
      <Typography style={{ 
        fontFamily: IZOFontFamily, 
        color: ColorX.GetColorCSS(IZOTheme.menuFG),
        fontSize: 30,
        fontWeight: "bold",
        userSelect: "none"
        }}>
        {"Gammon Permit-to-Work"}
      </Typography>
      <Box style={{position: "relative", marginTop: -30, marginLeft: -30, userSelect: "none"}}>
        <Box width={75} style={{position: "absolute"}}>
          <img src={SITEBASE + "Images/tick.png"} alt="permit"/>
        </Box>
        <Box width={80} style={{position: "absolute", left: 20}}>
          <img src={SITEBASE + "Images/tick.png"} alt="permit"/>
        </Box>
      </Box>
    </HStack>
};

/**
 * @type {{
 *  src: String,
 *  style: CSSProperties,
 *  imgStyle: CSSProperties,
 *  preRender: JSX.Element,
 *  postRender: JSX.Element
 * }}
 */
export const NavbarDis = {
  src: SITEBASE + "Images/navbar.png",
  style: {
    width: 95,
    marginX: 3,
    right: 160,
    top: 0,
    opacity: 0.2,
  },
};

/**
 * @type {{
 *  src: String,
 *  style: CSSProperties,
 *  imgStyle: CSSProperties,
 *  preRender: JSX.Element,
 *  postRender: JSX.Element
 * }}
 */
export const CompanyDis = {
  src: SITEBASE + "Images/QSK.png",
  style: {
    width: 200,
    margin: 3,
    left: 300,
    opacity: 0.7,
  },
  imgStyle: {
    width: 25,
    margin: 5
  },
  postRender: <Typography style={{ 
    fontFamily: IZOFontFamily, 
    color: ColorX.GetColorCSS(IZOTheme.menuFG),
    fontSize: 14,
    fontWeight: "bold",
    userSelect: "none"
    }}>
    {"QSK"}
  </Typography>
};