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
    label: "Display Name",
    name: "display",
    format: "text"
  },
  {
    label: "Severity",
    name: "severity",
    format: "number"
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