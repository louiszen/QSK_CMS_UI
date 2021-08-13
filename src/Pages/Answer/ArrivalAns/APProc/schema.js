const Table = [
  {
    label: "Ref. ID",
    name: "refID"
  },
  {
    label: "Description",
    name: "description"
  },
  {
    label: "Content (EN)",
    name: "content.EN"
  },
  {
    label: "Content (TC)",
    name: "content.TC"
  },
  {
    label: "Content (SC)",
    name: "content.SC"
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
    label: "Description",
    name: "description",
    format: "textarea"
  },
  {
    label: "Content (EN)",
    name: "content.EN",
    format: "textarea"
  },
  {
    label: "Content (TC)",
    name: "content.TC",
    format: "textarea"
  },
  {
    label: "Content (SC)",
    name: "content.SC",
    format: "textarea"
  },
  {
    label: "Last Update",
    name: "lastUpdate",
    format: "date",
    dateType: "datetime",
    readOnly: true
  }
];

const Add = [
  ...Tail
];

const Info = [
  ...Tail
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
    label: "Description",
    name: "description"
  },
  {
    label: "Content (EN)",
    name: "content.EN"
  },
  {
    label: "Content (TC)",
    name: "content.TC"
  },
  {
    label: "Content (SC)",
    name: "content.SC"
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