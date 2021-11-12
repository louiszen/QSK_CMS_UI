// eslint-disable-next-line no-unused-vars
import { CSSProperties } from 'react';
import { Typography } from '@material-ui/core';
import { ColorX } from 'IZOArc/STATIC';
import { ProjectName } from './Config';

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
  fontFamily: "Palanquin", 
  color: ColorX.GetColorCSS(IZOTheme.menuFG) 
  }}>
  {ProjectName}
</Typography>);

/**
 * @type {{
 *  src: String,
 *  style: CSSProperties,
 *  preRender: JSX.Element,
 *  postRender: JSX.Element
 * }}
 */
export const GateDis = {
  src: "/Images/QSK.png",
  style: {
    height: "90%",
    marginTop: "10%",
    marginLeft: "-20%"
  }
};

/**
 * @type {{
 *  src: String,
 *  style: CSSProperties,
 *  preRender: JSX.Element,
 *  postRender: JSX.Element
 * }}
 */
export const NavbarDis = {
  src: "/Images/navbar.png",
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
  src: "",
  style: {},
};