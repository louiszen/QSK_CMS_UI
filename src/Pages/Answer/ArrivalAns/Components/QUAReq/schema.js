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
            format: "text"
          },
          {
            label: "Content",
            name: "display.content.EN",
            format: "textarea"
          },
          {
            label: "Remark",
            name: "display.remark.EN",
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
            format: "text"
          },
          {
            label: "Content",
            name: "display.content.TC",
            format: "textarea"
          },
          {
            label: "Remark",
            name: "display.remark.TC",
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
            format: "text"
          },
          {
            label: "Content",
            name: "display.content.SC",
            format: "textarea"
          },
          {
            label: "Remark",
            name: "display.remark.SC",
            format: "textarea"
          }
        ]
      }
    ]
  },
  {
    label: "Parameters",
    name: "parameters",
    canAdd: true,
    canDelete: true,
    headerStyle: "outlined",
    arrayStyle: "card",
    startDisplayIndex: 1,
    array: [
      {
        label: "Description",
        name: "description",
        format: "text"
      },
      {
        label: "Format",
        name: "format",
        format: "select",
        selectStyle: "dropdown",
        selectRef: "ansFormat",
        selectCap: "",
        selectVal: ""
      },
      {
        label: "Options",
        name: "options",
        canAdd: true,
        canDelete: true,
        headerStyle: "outlined",
        showIndex: true,
        startDisplayIndex: 1,
        array: [
          {
            label: "EN",
            name: "EN",
            format: "text"
          },
          {
            label: "TC",
            name: "TC",
            format: "text"
          },
          {
            label: "SC",
            name: "SC",
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