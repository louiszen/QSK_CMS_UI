import { LocaleX } from "IZOArc/STATIC";
import { Dashboard, ReplyAll } from "@material-ui/icons";
import { AppSettingsAlt } from "@mui/icons-material";

/**
 * @typedef {{
 *    caption: String | (() => String),
 *    link: String,
 *    faIcon: JSX.Element | String,
 *    auth: String,
 *    disabled: Boolean,
 *    submenu?: [Menu]
 * }} Menu

 * @type {[Menu]}
 */
export const MenuConfig = [
  {
    caption: () => LocaleX.Get("__IZO.MenuBar.System"),
    link: "/System",
    faIcon: "fas fa-cog fa-lg",
    auth: "System",
  },
];