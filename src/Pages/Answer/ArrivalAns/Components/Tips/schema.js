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
    width: 150
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
    label: "Icon",
    name: "display.icon",
    format: "select",
    selectStyle: "dropdown",
    selectRef: "icons",
    selectVal: "refID",
    selectCap: "refID",
    selectTip: "description",
    showTooltip: true
  },
  {
    tabs: [
      {
        label: "EN",
        page: [
          {
            label: "Title",
            name: "display.title.EN",
            format: "textarea"
          }
        ]
      },
      {
        label: "TC",
        page: [
          {
            label: "Title",
            name: "display.title.TC",
            format: "textarea"
          }
        ]
      },
      {
        label: "SC",
        page: [
          {
            label: "Title",
            name: "display.title.SC",
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