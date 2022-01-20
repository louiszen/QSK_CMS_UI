// eslint-disable-next-line no-unused-vars
import { CSSProperties } from "react";
import { Typography } from "@mui/material";

import { ColorX } from "IZOArc/STATIC";
import { HStack } from "IZOArc/LabIZO/Stackizo";

import { SITEBASE } from "./Domain";
import { SysConfig } from "./Config";

export const IZOFontFamily = "Palanquin";

/**
 * @type {Object.<string, String | {r: Number, g: Number, b: Number, a: Number}>}
 */
 export const IZOTheme = {
  homeBG: "aliceblue",
  menuBG: "black",
  menuFG: "greyOut",
  popupBG: "aliceblue",
  popupFG: "darkBox",
  popupTitleBG: {r:0, g:0, b: 0, a: 0.07},
  popupTitleFG: "dark",
  popupBtnBG: {r:0, g:0, b: 0, a: 0.02},
  btnHover: "grey",
};

/**
 * @type {JSX.Element}
 */
 export const ProjectDis = (
  <Typography style={{ 
    fontFamily: IZOFontFamily, 
    color: ColorX.GetColorCSS(IZOTheme.menuFG),
    }}>
    {SysConfig.Project.Name}
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
  src: SITEBASE + "Images/QSK.png",
  style: {
    width: 900,
    height: 900,
    marginLeft: -140,
    marginTop: 100
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
        {""}
      </Typography>
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
    left: 400,
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