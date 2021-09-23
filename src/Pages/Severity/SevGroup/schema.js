const Table = [
  {
    label: "Ref. ID",
    name: "refID"
  },
  {
    label: "Display Name",
    name: "display"
  },
  {
    label: "Severity",
    name: "severity",
    width: 150
  },
  {
    label: "Relevant Periods (Days)",
    name: "period"
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
    label: "Display Name",
    name: "display",
    format: "text",
    validate: ["required"]
  },
  {
    label: "Severity",
    name: "severity",
    format: "number",
    validate: ["required"]
  },
  {
    label: "Relevant Periods (Days)",
    name: "period",
    format: "number",
    min: 0
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
    format: "text",
    readOnly: true,
    validate: ["required"]
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
    label: "Ref. ID",
    name: "refID"
  },
  {
    label: "Display Name",
    name: "display"
  },
  {
    label: "Severity",
    name: "severity",
    format: "number"
  },
  {
    label: "Relevant Period (Days)",
    name: "period",
    format: "number"
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