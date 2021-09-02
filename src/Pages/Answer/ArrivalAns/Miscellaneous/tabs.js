import { Typography } from "@material-ui/core";
import { HStack, Spacer } from "IZOArc/LabIZO/Stackizo";
import Tips from "./Tips/Tips";
import Footnote from "./Footnote/Footnote";
import IconDocs from "./IconDocs/IconDocs";

const tabs = [
  {
    label: <HStack spacing={5}><i className="far fa-sticky-note fa-lg"/><Typography style={{textTransform: 'none'}}>{"Footnotes"}</Typography><Spacer/></HStack>,
    icon: null,
    reqAuth: "Answer.ArrivalAns.Miscellaneous.Footnote",
    render: <Footnote/>
  },
  {
    label: <HStack spacing={5}><i className="far fa-clipboard fa-lg"/><Typography style={{textTransform: 'none'}}>{"Tips"}</Typography><Spacer/></HStack>,
    icon: null,
    reqAuth: "Answer.ArrivalAns.Miscellaneous.Tips",
    render: <Tips/>
  },
  {
    label: <HStack spacing={5}><i className="fas fa-icons fa-lg"/><Typography style={{textTransform: 'none'}}>{"Icons"}</Typography><Spacer/></HStack>,
    icon: null,
    reqAuth: "Answer.ArrivalAns.Miscellaneous.IconDocs",
    render: <IconDocs/>
  }
];

export default tabs;
