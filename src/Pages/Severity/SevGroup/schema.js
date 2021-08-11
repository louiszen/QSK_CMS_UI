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

const Add = [];

const Info = [];

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