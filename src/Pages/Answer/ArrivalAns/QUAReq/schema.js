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
    label: "Format",
    name: "format",
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
    label: "Format",
    name: "format",
    format: "select",
    selectStyle: "radio",
    selectRef: "ansFormat",
    selectCap: "",
    selectVal: "",
    selectDirection: "row"
  },
  {
    label: "",
    control: "format",
    controlFunc: (doc, field) => field === "array",
    fold: [
      {
        label: "Separator",
        name: "separator",
        format: "text"
      }
    ]
  },
  {
    label: "",
    control: "format",
    controlFunc: (doc, field) => field === "select",
    fold: [
      {
        label: "Options",
        name: "options",
        canAdd: true,
        canDelete: true,
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