import Footnote from "./Footnote/Footnote";

const tabs = [
  {
    label: "Footnotes",
    icon: <i className="far fa-sticky-note fa-lg"/>,
    reqAuth: "Answer.ArrivalAns.Miscellaneous.Footnote",
    render: <Footnote/>,
    iconPos: "left",
    noTransform: true,
    alignment: "left"
  }
];

export default tabs;
