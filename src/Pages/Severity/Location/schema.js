import { HStack } from "@IZOArc/LabIZO/Stackizo";
import { Check, Close } from "@material-ui/icons";

const Table = [
  {
    label: "Ref. ID",
    name: "refID"
  },
  {
    label: "in China",
    name: "inChina",
    Cell: (row, field, addOns) => <HStack>{field? <Check/> : <Close/>}</HStack>
  },
  {
    label: "Display Sequence",
    name: "priority"
  },
  {
    label: "Display (EN)",
    name: "display.EN"
  },
  {
    label: "Display (TC)",
    name: "display.TC"
  },
  {
    label: "Display (SC)",
    name: "display.SC"
  },
  {
    label: "Effective Start Date",
    name: "effective.Start",
    transform: "datetime",
    dateFormat: "YYYY/MM/DD"
  },
  {
    label: "Effective End Date",
    name: "effective.End",
    transform: "datetime",
    dateFormat: "YYYY/MM/DD",
    fallback: " "
  },
  {
    label: "Last Update",
    name: "lastUpdate",
    transform: "datetime",
    dateFormat: "YYYY/MM/DD HH:mm:ss"
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
    label: "Display Sequence",
    name: "priority",
    format: "number"
  },
  {
    label: "Display Name (EN)",
    name: "display.EN",
    format: "text"
  },
  {
    label: "Display Name (TC)",
    name: "display.TC",
    format: "text"
  },
  {
    label: "Display Name (SC)",
    name: "display.SC",
    format: "text"
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
    label: "Display Sequence",
    name: "priority",
    format: "number"
  },
  {
    label: "Display Name (EN)",
    name: "display.EN"
  },
  {
    label: "Display Name (TC)",
    name: "display.TC"
  },
  {
    label: "Display Name (SC)",
    name: "display.SC"
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