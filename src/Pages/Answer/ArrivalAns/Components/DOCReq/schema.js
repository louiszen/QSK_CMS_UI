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
    label: "Version",
    name: "version"
  },
  {
    label: "Content (EN)",
    name: "display.content.EN"
  },
  {
    label: "Content (TC)",
    name: "display.content.TC"
  },
  {
    label: "Content (SC)",
    name: "display.content.SC"
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
    label: "Description",
    name: "description",
    format: "textarea"
  },
  {
    label: "Version",
    name: "version",
    format: "number"
  },
  {
    header: "Display"
  },
  {
    label: "Content (EN)",
    name: "display.content.EN",
    format: "textarea"
  },
  {
    label: "Content (TC)",
    name: "display.content.TC",
    format: "textarea"
  },
  {
    label: "Content (SC)",
    name: "display.content.SC",
    format: "textarea"
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