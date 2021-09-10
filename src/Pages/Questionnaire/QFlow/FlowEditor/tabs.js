import { Accessor } from "IZOArc/STATIC";
import _ from 'lodash';
import FlowizoWrap from "./_gears/FlowizoWrap";

const tabs = (severity, onDataUpdated, onMounted, addOns, doc) => {
 return _.map(severity, (o, i) => {
  return {
    label: "Severity " + o,
    icon: null,
    render: <FlowizoWrap
      defaultData={Accessor.Get(doc, "flow.sev_" + o)}
      onMounted={(callbacks) => onMounted(severity, callbacks)}
      onDataUpdated={(data) => onDataUpdated(severity, data)}
      controlsProps={{}}
      reactFlowProps={{}}
      addOns={addOns}
      />,
    iconPos: "left",
    noTransform: true,
    alignment: "left"
  }
 }); 
}

export default tabs;