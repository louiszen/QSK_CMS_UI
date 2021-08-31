import QUAReq from "./QUAReq/QUAReq";
import DOCReq from "./DOCReq/DOCReq";
import ENTReq from "./ENTReq/ENTReq";
import APProc from "./APProc/APProc";

const tabs = [
  {
    label: "Quaratine Requirements",
    icon: null,
    reqAuth: "Answer.ArrivalAns.Components.QUAReq",
    render: <QUAReq/>
  },
  {
    label: "Document Requirements",
    icon: null,
    reqAuth: "Answer.ArrivalAns.Components.DOCReq",
    render: <DOCReq/>
  },
  {
    label: "Entry Requirements",
    icon: null,
    reqAuth: "Answer.ArrivalAns.Components.ENTReq",
    render: <ENTReq/>
  },
  {
    label: "Aiport Procedures",
    icon: null,
    reqAuth: "Answer.ArrivalAns.Components.APProc",
    render: <APProc/>
  }
];

export default tabs;