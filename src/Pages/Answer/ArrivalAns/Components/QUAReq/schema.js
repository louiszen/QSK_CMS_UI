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
            format: "text",
            readOnly: true
          },
          {
            label: "Content",
            name: "display.content.EN",
            format: "text",
            readOnly: true
          },
          {
            label: "Remark",
            name: "display.remark.EN",
            format: "text",
            readOnly: true
          }
        ]
      },
      {
        label: "TC",
        page: [
          {
            label: "Title",
            name: "display.title.TC",
            format: "text",
            readOnly: true
          },
          {
            label: "Content",
            name: "display.content.TC",
            format: "text",
            readOnly: true
          },
          {
            label: "Remark",
            name: "display.remark.TC",
            format: "text",
            readOnly: true
          }
        ]
      },
      {
        label: "SC",
        page: [
          {
            label: "Title",
            name: "display.title.SC",
            format: "text",
            readOnly: true
          },
          {
            label: "Content",
            name: "display.content.SC",
            format: "text",
            readOnly: true
          },
          {
            label: "Remark",
            name: "display.remark.SC",
            format: "text",
            readOnly: true
          }
        ]
      }
    ]
  },
  {
    label: "Parameters",
    name: "parameters",
    headerStyle: "outlined",
    array: [
      {
        label: "Description",
        name: "description",
        format: "text",
        readOnly: true
      },
      {
        label: "Format",
        name: "format",
        format: "select",
        selectStyle: "dropdown",
        selectRef: ["number", "select", "array"],
        selectCap: "",
        selectVal: "",
        readOnly: true
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
    label: "Format",
    name: "format"
  },
  {
    label: "array: Separator",
    name: "separator"
  },
  {
    label: "select: Options",
    name: "options",
    format: "json"
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