import QUAReq from "./QUAReq/QUAReq";
import DOCReq from "./DOCReq/DOCReq";
import ENTReq from "./ENTReq/ENTReq";
import APProc from "./APProc/APProc";
import Tips from "./Tips/Tips";

const tabs = [
  {
    label: "Quarantine Requirements",
    icon: <i className="fas fa-syringe fa-lg"/>,
    reqAuth: "Answer.ArrivalAns.Components.QUAReq",
    render: <QUAReq/>,
    iconPos: "left",
    noTransform: true,
    alignment: "left"
  },
  {
    label: "Document Requirements",
    icon: <i className="far fa-file-alt fa-lg"/>,
    reqAuth: "Answer.ArrivalAns.Components.DOCReq",
    render: <DOCReq/>,
    iconPos: "left",
    noTransform: true,
    alignment: "left"
  },
  {
    label: "Entry Requirements",
    icon: <i className="fas fa-door-open fa-lg"/>,
    reqAuth: "Answer.ArrivalAns.Components.ENTReq",
    render: <ENTReq/>,
    iconPos: "left",
    noTransform: true,
    alignment: "left"
  },
  {
    label: "Airport Procedures",
    icon: <i className="fas fa-plane fa-lg"/>,
    reqAuth: "Answer.ArrivalAns.Components.APProc",
    render: <APProc/>,
    iconPos: "left",
    noTransform: true,
    alignment: "left"
  },
  {
    label: "Tips",
    icon: <i className="far fa-clipboard fa-lg"/>,
    reqAuth: "Answer.ArrivalAns.Miscellaneous.Tips",
    render: <Tips/>,
    iconPos: "left",
    noTransform: true,
    alignment: "left"
  },
];

export default tabs;
