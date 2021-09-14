import { HStack } from "IZOArc/LabIZO/Stackizo";
import { Check, Close } from "@material-ui/icons";

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
  {
    label: "Display (EN)",
    name: "display.EN"
  },
  {
    label: "Priority (EN)",
    name: "priority.EN"
  },
  {
    label: "Display (TC)",
    name: "display.TC"
  },
  {
    label: "Priority (TC)",
    name: "priority.TC"
  },
  {
    label: "Display (SC)",
    name: "display.SC"
  },
  {
    label: "Priority (SC)",
    name: "priority.SC"
  },
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
  {
    label: "Display Name (EN)",
    name: "display.EN",
    format: "text"
  },
  {
    label: "Priority (EN)",
    name: "priority.EN",
    format: "number"
  },
  {
    label: "Display Name (TC)",
    name: "display.TC",
    format: "text"
  },
  {
    label: "Priority (TC)",
    name: "priority.TC",
    format: "number"
  },
  {
    label: "Display Name (SC)",
    name: "display.SC",
    format: "text"
  },
  {
    label: "Priority (SC)",
    name: "priority.SC",
    format: "number"
  },
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
  {
    label: "Display Name (EN)",
    name: "display.EN"
  },
  {
    label: "Priority (EN)",
    name: "priority.EN",
    format: "number"
  },
  {
    label: "Display Name (TC)",
    name: "display.TC"
  },
  {
    label: "Priority (TC)",
    name: "priority.TC",
    format: "number"
  },
  {
    label: "Display Name (SC)",
    name: "display.SC"
  },
  {
    label: "Priority (SC)",
    name: "priority.SC",
    format: "number"
  },
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