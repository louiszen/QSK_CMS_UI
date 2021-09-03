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
    label: "Type",
    name: "display.type",
    format: "select",
    selectStyle: "radio",
    selectRef: ["withicon", "circled", "ordered"],
    selectCap: "",
    selectVal: ""
  },
  {
    label: "Icon",
    name: "display.icon",
    format: "text"
  },
  {
    tabs: [
      {
        label: "EN",
        page: [
          {
            label: "Title",
            name: "display.title.EN",
            format: "text"
          },
          {
            label: "Content",
            name: "display.content.EN",
            format: "text"
          },
          {
            label: "Remark",
            name: "display.remark.EN",
            format: "text"
          }
        ]
      },
      {
        label: "TC",
        page: [
          {
            label: "Title",
            name: "display.title.TC",
            format: "text"
          },
          {
            label: "Content",
            name: "display.content.TC",
            format: "text"
          },
          {
            label: "Remark",
            name: "display.remark.TC",
            format: "text"
          }
        ]
      },
      {
        label: "SC",
        page: [
          {
            label: "Title",
            name: "display.title.SC",
            format: "text"
          },
          {
            label: "Content",
            name: "display.content.SC",
            format: "text"
          },
          {
            label: "Remark",
            name: "display.remark.SC",
            format: "text"
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