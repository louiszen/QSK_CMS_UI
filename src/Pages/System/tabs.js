import { Apps, Group } from "@material-ui/icons";

import SysGeneral from "./SysGeneral/SysGeneral";
import SysUser from "./SysUser/SysUser";

const tabs = [
  {
    label: "General",
    icon: <Apps/>,
    reqAuth: "System.General",
    render: <SysGeneral/>,
    iconPos: "left",
    noTransform: true,
    alignment: "left"
  },
  {
    label: "User Access Control",
    icon: <Group/>,
    reqAuth: "System.User",
    render: <SysUser/>,
    iconPos: "left",
    noTransform: true,
    alignment: "left"
  }
];

export default tabs;