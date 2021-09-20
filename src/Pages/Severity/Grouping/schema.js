const Table = [
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
    label: "Location",
    name: "refID",
    format: "select",
    selectStyle: "dropdown",
    selectRef: "locations",
    selectCap: "display",
    selectVal: "refID"
  },
  {
    label: "Group",
    name: "group",
    format: "select",
    selectStyle: "radio",
    selectRef: "groups",
    selectCap: "display",
    selectVal: "refID"
  },
  {
    label: "Effective Start Date",
    name: "effective.Start",
    format: "date",
    dateType: "datetime"
  },
  {
    label: "Effective End Date",
    name: "effective.End",
    format: "date",
    dateType: "datetime"
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