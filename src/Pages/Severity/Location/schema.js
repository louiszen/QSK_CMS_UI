import { HStack } from "IZOArc/LabIZO/Stackizo";
import { Check, Close } from "@material-ui/icons";
import { LANGUAGES } from "__Base/config";
import _ from "lodash";

const Table = [
  {
    label: "Ref. ID",
    name: "refID"
  },
  {
    label: "External ID",
    name: "externalID"
  },
  {
    label: "in China",
    name: "inChina",
    width: 100,
    Cell: (row, field, addOns) => <HStack>{field? <Check/> : <Close/>}</HStack>
  },
  () => _.map(LANGUAGES, (o, i) => {
    return [
      {
        label: "Display (" + o + ")",
        name: "display." + o 
      },
      {
        label: "DspSeq (" + o + ")",
        name: "priority." + o 
      }
    ]
  }),
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
    label: "External ID",
    name: "externalID",
    format: "text"
  },
  {
    label: "in China?",
    name: "inChina",
    format: "bool",
    boolStyle: "switch"
  },
  {
    tabs: _.map(LANGUAGES, (o, i) => {
      return {
        label: o,
        page: [
          {
            label: "Display Name",
            name: "display." + o,
            format: "text"
          },
          {
            label: "Display Sequence",
            name: "priority." + o,
            format: "number"
          }
        ]
      }
    }),
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
    dateType: "datetime",
  }
]

const Add = [
  {
    label: "Ref. ID",
    name: "refID",
    format: "text",
    validate: ["required"]
  },
  ...Tail
];

const Info = [
  {
    label: "Ref. ID",
    name: "refID",
    format: "text"
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
  {
    label: "Ref. ID",
    name: "refID",
    format: "text",
    readOnly: true
  },
  ...Info
];

const Export = [
  {
    label: "Ref. ID",
    name: "refID"
  },
  {
    label: "External ID",
    name: "externalID",
  },
  {
    label: "in China?",
    name: "inChina",
    format: "bool"
  },
  _.map(LANGUAGES, (o, i) => {
    return [
      {
        label: "Display Name (" + o + ")",
        name: "display." + o,
        format: "text"
      },
      {
        label: "Display Sequence (" + o + ")",
        name: "priority." + o,
        format: "number"
      }
    ]
  }),
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