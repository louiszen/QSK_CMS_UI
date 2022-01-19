import { Dashboard, PermDataSettingRounded, FolderZip, ArticleRounded, ConfirmationNumber, BugReport, Groups } from "@mui/icons-material";
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
    caption: () => LocaleX.Parse({
      EN: "Dashboard",
      TC: "儀表板"
    }),
    link: "/Dashboard",
    faIcon: <Dashboard/>,
    auth: "Dashboard"
  }
];

/**
 * @type {[Menu]}
 */
export const MainMenu = [
  {
    caption: () => LocaleX.Parse({
      EN: "All Users",
      TC: "所有用戶"
    }),
    link: "/AllUsers",
    faIcon: <Groups/>,
    auth: "AllUsers"
  },
  {
    caption: () => LocaleX.Parse({
      EN: "All Projects",
      TC: "所有專案"
    }),
    link: "/AllProjects",
    faIcon: <FolderZip/>,
    auth: "AllProjects"
  },
  {
    caption: () => LocaleX.Parse({
      EN: "Project Settings",
      TC: "專案設定"
    }),
    link: "/Project",
    faIcon: <PermDataSettingRounded/>,
    auth: "Project"
  },
  {
    caption: () => LocaleX.Parse({
      EN: "Project Auth Log",
      TC: "專案授權記錄"
    }),
    link: "/AuthLog",
    faIcon: <ArticleRounded/>,
    auth: "AuthLog"
  },
  {
    caption: () => LocaleX.Parse({
      EN: "Bug Report Tickets",
      TC: "錯誤報告存票"
    }),
    link: "/Tickets",
    faIcon: <ConfirmationNumber/>,
    auth: "Tickets"
  }
];

/**
 * @type {[Menu]}
 */
export const LowerMenu = [
  {
    caption: () => LocaleX.GetIZO("MenuBar.System"),
    link: "/System",
    faIcon: "fas fa-cog fa-lg",
    auth: "System",
  },
  {
    caption: () => LocaleX.GetIZO("MenuBar.BugReport"),
    link: "/BugReport",
    faIcon: <BugReport/>,
    auth: "BugReport",
  }
];