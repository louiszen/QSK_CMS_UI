import { Apps } from "@material-ui/icons";

import SysGeneral from "./SysGeneral";

const tabs = [
  {
    label: "General",
    icon: <Apps/>,
    reqAuth: "System.General",
    render: <SysGeneral/>,
    iconPos: "left",
    noTransform: true,
    alignment: "left"
  }
];

export default tabs;