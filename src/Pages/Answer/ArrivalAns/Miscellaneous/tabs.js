import DefaultQ from "./DefaultQ/DefaultQ";
import Footnote from "./Footnote/Footnote";
import IconDocs from "./IconDocs/IconDocs";

const tabs = [
  {
    label: "Default Questions",
    icon: <i className="far fa-question-circle fa-lg"/>,
    reqAuth: "Answer.ArrivalAns.Miscellaneous.DefaultQ",
    render: <DefaultQ/>,
    iconPos: "left",
    noTransform: true,
    alignment: "left"
  },
  {
    label: "Footnotes",
    icon: <i className="far fa-sticky-note fa-lg"/>,
    reqAuth: "Answer.ArrivalAns.Miscellaneous.Footnote",
    render: <Footnote/>,
    iconPos: "left",
    noTransform: true,
    alignment: "left"
  },
  {
    label:"Icons",
    icon: <i className="fas fa-icons fa-lg"/>,
    reqAuth: "Answer.ArrivalAns.Miscellaneous.IconDocs",
    render: <IconDocs/>,
    iconPos: "left",
    noTransform: true,
    alignment: "left"
  }
];

export default tabs;
