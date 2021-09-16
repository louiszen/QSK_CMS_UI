import { Explore, LocalHospital } from "@material-ui/icons";
import CT from "./CT/CT";
import TA from "./TA/TA";

const tabs = [
  {
    label: "Travel Advisories",
    icon: <Explore/>,
    reqAuth: "Answer.DepartAns.Components.TA",
    render: <TA/>,
    iconPos: "left",
    noTransform: true,
    alignment: "left"
  },
  {
    label: "COVID-19 Tests at HKIA",
    icon: <LocalHospital/>,
    reqAuth: "Answer.DepartAns.Components.CT",
    render: <CT/>,
    iconPos: "left",
    noTransform: true,
    alignment: "left"
  }
];

export default tabs;