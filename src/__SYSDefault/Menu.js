import { Dashboard } from "@material-ui/icons";
import { LocaleX } from "IZOArc/STATIC";

/**
 * @typedef {{
 *   caption: String | (() => String),
 *   link: String,
 *   faIcon: JSX.Element | String,
 *   uth?: String,
 *   level?: Number,
 *   group?: String,
 *   role?: String,
 *   disabled?: Boolean,
 *   submenu?: [Menu]
 * }} Menu 
 */

/**
 * @type {[Menu]}
 */
export const UpperMenu = [
  {
    caption: () => LocaleX.Get("Menu.Dashboard"),
    link: "/Dashboard",
    faIcon: <Dashboard/>,
    auth: "Dashboard"
  }
];

/**
 * @type {[Menu]}
 */
export const MainMenu = [

];

/**
 * @type {[Menu]}
 */
export const LowerMenu = [
  {
    caption: () => LocaleX.Get("__IZO.MenuBar.System"),
    link: "/System",
    faIcon: "fas fa-cog fa-lg",
    auth: "System",
  }
];