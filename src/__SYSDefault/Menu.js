import { Dashboard } from "@material-ui/icons";
import { Publish, Description } from "@mui/icons-material";
import { LocaleX } from "IZOArc/STATIC";

/**
 * @typedef {{
 *    caption: String | (() => String),
 *    link: String,
 *    faIcon: JSX.Element | String,
 *    auth?: String,
 *    level?: Number,
 *    group?: String,
 *    role?: String,
 *    disabled?: Boolean,
 *    submenu?: [Menu]
 * }} Menu

 * @type {[Menu]}
 */
export const MenuConfig = [
  {
    caption: () => LocaleX.Get("Menu.Dashboard"),
    link: "/Dashboard",
    faIcon: <Dashboard/>,
    auth: "Dashboard"
  },
  {
    caption: () => LocaleX.Get("Menu.SubmitPermit"),
    link: "/SubmitPermit",
    faIcon: <Publish/>,
    auth: "SubmitPermit"
  },
  {
    caption: () => LocaleX.Get("Menu.Submission"),
    link: "/Submission",
    faIcon: <Description/>,
    auth: "Submission"
  },
  {
    caption: () => LocaleX.Get("__IZO.MenuBar.System"),
    link: "/System",
    faIcon: "fas fa-cog fa-lg",
    auth: "System",
  },
];