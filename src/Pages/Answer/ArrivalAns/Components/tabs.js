import QUAReq from "./QUAReq/QUAReq";
import DOCReq from "./DOCReq/DOCReq";
import ENTReq from "./ENTReq/ENTReq";
import APProc from "./APProc/APProc";
import { Typography } from "@material-ui/core";
import { HStack, Spacer } from "IZOArc/LabIZO/Stackizo";

const tabs = [
  {
    label: <HStack spacing={5}><i className="fas fa-syringe fa-lg"/><Typography style={{textTransform: 'none'}}>{"Quarantine Requirements"}</Typography><Spacer/></HStack>,
    icon: null,
    reqAuth: "Answer.ArrivalAns.Components.QUAReq",
    render: <QUAReq/>
  },
  {
    label: <HStack spacing={5}><i className="far fa-file-alt fa-lg"/><Typography style={{textTransform: 'none'}}>{"Document Requirements"}</Typography><Spacer/></HStack>,
    icon: null,
    reqAuth: "Answer.ArrivalAns.Components.DOCReq",
    render: <DOCReq/>
  },
  {
    label: <HStack spacing={5}><i className="fas fa-door-open fa-lg"/><Typography style={{textTransform: 'none'}}>{"Entry Requirements"}</Typography><Spacer/></HStack>,
    icon: null,
    reqAuth: "Answer.ArrivalAns.Components.ENTReq",
    render: <ENTReq/>
  },
  {
    label: <HStack spacing={5}><i className="fas fa-plane fa-lg"/><Typography style={{textTransform: 'none'}}>{"Airport Procedures"}</Typography><Spacer/></HStack>,
    icon: null,
    reqAuth: "Answer.ArrivalAns.Components.APProc",
    render: <APProc/>
  }
];

export default tabs;
