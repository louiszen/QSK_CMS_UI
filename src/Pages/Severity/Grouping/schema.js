import { Typography } from "@material-ui/core";
import { Error } from "@material-ui/icons";
import { HStack, Spacer } from "IZOArc/LabIZO/Stackizo";
import { ColorX } from "IZOArc/STATIC";
import _ from "lodash";

const Table = [
  {
    label: "Location Code",
    name: "refID"
  },
  {
    label: "Location",
    name: "<Location>",
    Cell: (row, field, addOns) => {
      let locations = addOns.locations;
      if(locations){
        let thisLoc = _.find(locations, o => o.refID === row.refID);
        if(thisLoc){
          return thisLoc.display;
        }
        return (
          <HStack width="100%">
            <Error style={{color: ColorX.GetColorCSS("gold")}}/>
            <Typography style={{fontSize: 9}}>
              {"Location Code Not Mapped"}
            </Typography>
            <Spacer/>
          </HStack> 
        );
      }
    }
  },
  {
    label: "Group Code",
    name: "group"
  },
  {
    label: "Group",
    name: "<Group>",
    Cell: (row, field, addOns) => {
      let groups = addOns.groups;
      if(groups){
        let thisGrp = _.find(groups, o => o.refID === row.group);
        if(thisGrp){
          return thisGrp.display;
        }
        return (
          <HStack width="100%">
            <Error style={{color: ColorX.GetColorCSS("gold")}}/>
            <Typography style={{fontSize: 9}}>
              {"Group Code Not Mapped"}
            </Typography>
            <Spacer/>
          </HStack> 
        );
      }
    }
  },
  {
    label: "Effective Start Date",
    name: "effective.Start",
    transform: "datetime",
    dateFormat: "YYYY/MM/DD HH:mm:ss",
    filterable: false
  },
  {
    label: "Effective End Date",
    name: "effective.End",
    transform: "datetime",
    dateFormat: "YYYY/MM/DD HH:mm:ss",
    fallback: " ",
    filterable: false
  },
  {
    label: "Last Update",
    name: "lastUpdate",
    transform: "datetime",
    dateFormat: "YYYY/MM/DD HH:mm:ss",
    filterable: false
  }
];

const Tail = [
  {
    label: "Group",
    name: "group",
    format: "select",
    selectStyle: "radio",
    selectRef: "groups",
    selectCap: "display",
    selectVal: "refID",
    validate: ["required"]
  },
  {
    label: "Effective Start Date",
    name: "effective.Start",
    format: "date",
    dateType: "datetime",
    validate: ["required"]
  },
  {
    label: "Effective End Date",
    name: "effective.End",
    format: "date",
    dateType: "datetime"
  }
]

const Add = [
  {
    label: "Location",
    name: "refID",
    format: "select",
    selectStyle: "dropdown",
    selectRef: "locations",
    selectCap: "display",
    selectVal: "refID",
    validate: ["required"]
  },
  ...Tail
];

const Info = [
  {
    label: "Location",
    name: "refID",
    format: "select",
    selectStyle: "dropdown",
    selectRef: "locations",
    selectCap: "display",
    selectVal: "refID",
    readOnly: true
  },
  ...Tail,
  {
    label: "Last Update",
    name: "lastUpdate",
    format: "date",
    dateType: "datetime",
    readOnly: true
  }
];

const Edit = [
  ...Info
];

const Export = [
  {
    label: "Location",
    name: "refID"
  },
  {
    label: "Group",
    name: "group"
  },
  {
    label: "Effective Start Date",
    name: "effective.Start",
    format: "datetime",
    dateFormat: "YYYY/MM/DD HH:mm:ss",
    //dateMod: "startOfDay"
  },
  {
    label: "Effective End Date",
    name: "effective.End",
    format: "datetime",
    dateFormat: "YYYY/MM/DD HH:mm:ss",
    //dateMod: "endOfDay"
  },
  {
    label: "Last Update",
    name: "lastUpdate",
    dateFormat: "YYYY/MM/DD HH:mm:ss",
    format: "datetime",
    readOnly: true
  }
];

const Import = [];

const ImportFormat = [...Export];

const Filter = [];

const AdvFilter = [];

const schema = {
  Table,
  Info,
  Add,
  Edit,
  Export,
  Import,
  ImportFormat,
  Filter,
  AdvFilter
};

export default schema;