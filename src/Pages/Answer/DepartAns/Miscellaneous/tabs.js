import { Explore, Link, LocalHospital } from "@material-ui/icons";
import DepartAnsLink from "./Link/DepartAnsLink";
import DepartAnsLoc from "./Loc/DepartAnsLoc";
import DepartAnsTest from "./VTest/DepartAnsTest";

const tabs = [
  {
    label: "Travel Advisories by Destinations",
    icon: <Explore/>,
    reqAuth: "Answer.DepartAns.Miscellaneous.Loc",
    render: <DepartAnsLoc/>,
    iconPos: "left",
    noTransform: true,
    alignment: "left",
    width: 300
  },
  {
    label: "Useful Links",
    icon: <Link/>,
    reqAuth: "Answer.DepartAns.Miscellaneous.Link",
    render: <DepartAnsLink/>,
    iconPos: "left",
    noTransform: true,
    alignment: "left"
  },
  {
    label: "Virus Test Centres",
    icon: <LocalHospital/>,
    reqAuth: "Answer.DepartAns.Miscellaneous.VirusTest",
    render: <DepartAnsTest/>,
    iconPos: "left",
    noTransform: true,
    alignment: "left"
  }
];

export default tabs;