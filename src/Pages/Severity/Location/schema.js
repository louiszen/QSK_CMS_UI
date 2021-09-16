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
        label: "Priority (" + o + ")",
        name: "priority." + o 
      }
    ]
  }),
  {
    label: "Effective Start Date",
    name: "effective.Start",
    transform: "datetime",
    dateFormat: "YYYY/MM/DD",
    filterable: false
  },
  {
    label: "Effective End Date",
    name: "effective.End",
    transform: "datetime",
    dateFormat: "YYYY/MM/DD",
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
    label: "Ref. ID",
    name: "refID",
    format: "text"
  },
  {
    label: "in China?",
    name: "inChina",
    format: "bool",
    boolStyle: "switch"
  },
  _.map(LANGUAGES, (o, i) => {
    return [
      {
        label: "Display Name (" + o + ")",
        name: "display." + o,
        format: "text"
      },
      {
        label: "Priority (" + o + ")",
        name: "priority." + o,
        format: "number"
      }
    ]
  }),
  {
    label: "Effective Start Date",
    name: "effective.Start",
    format: "date",
    dateType: "date"
  },
  {
    label: "Effective End Date",
    name: "effective.End",
    format: "date",
    dateType: "date"
  }
]

const Add = [
  ...Tail
];

const Info = [
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
    label: "Ref. ID",
    name: "refID"
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
        label: "Priority (" + o + ")",
        name: "priority." + o,
        format: "number"
      }
    ]
  }),
  {
    label: "Effective Start Date",
    name: "effective.Start",
    format: "date",
    dateFormat: "YYYY/MM/DD",
    dateMod: "startOfDay"
  },
  {
    label: "Effective End Date",
    name: "effective.End",
    format: "date",
    dateFormat: "YYYY/MM/DD",
    dateMod: "endOfDay"
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