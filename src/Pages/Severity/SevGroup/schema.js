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
    name: "severity"
  },
  {
    label: "Relevant Periods (Days)",
    name: "period"
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
    dateType: "date",
    dateFormat: "UTC"
  },
  {
    label: "Effective End Date",
    name: "effective.End",
    format: "date",
    dateType: "date",
    dateFormat: "UTC"
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
    readOnly: true,
    dateFormat: "UTC"
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
    dateMod: "startOfDay"
  },
  {
    label: "Effective End Date",
    name: "effective.End",
    format: "date",
    dateMod: "endOfDay"
  },
  {
    label: "Last Update",
    name: "lastUpdate",
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