const Table = [
  {
    label: "Ref. ID",
    name: "refID",
    width: 150
  },
  {
    label: "Description",
    name: "description"
  },
  {
    label: "Version",
    name: "version",
    width: 120
  },
  {
    label: "Symbol",
    name: "symbol",
    width: 120
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
    header: "Display"
  },
  {
    label: "Symbol",
    name: "symbol",
    format: "select",
    selectStyle: "dropdown",
    selectRef: ["*", "^", "#"],
    selectCap: "",
    selectVal: ""
  },
  {
    tabs: [
      {
        label: "EN",
        page: [
          {
            label: "Content",
            name: "display.content.EN",
            format: "textarea"
          }
        ]
      },
      {
        label: "TC",
        page: [
          {
            label: "Content",
            name: "display.content.TC",
            format: "textarea"
          }
        ]
      },
      {
        label: "SC",
        page: [
          {
            label: "Content",
            name: "display.content.SC",
            format: "textarea"
          }
        ]
      }
    ]
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

const Export = [];

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