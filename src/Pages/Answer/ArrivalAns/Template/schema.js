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
    header: "Quarantine Requirements"
  },
  {
    tabs: [
      {
        label: "QUAReq001",
        page: [
          {
            label: "Show?",
            name: "QUAReq.QUAReq001.show",
            format: "bool"
          },
          {
            label: "Parameters",
            name: "QUAReq.QUAReq001.parameters",
            canAdd: true,
            canDelete: true,
            array: [
              {
                label: "",
                name: "",
                format: "text"
              }
            ]
          },
        ]
      },
      {
        label: "QUAReq002",
        page: [
          {
            label: "Show?",
            name: "QUAReq.QUAReq002.show",
            format: "bool"
          },
          {
            label: "Parameters",
            name: "QUAReq.QUAReq002.parameters",
            canAdd: true,
            canDelete: true,
            array: [
              {
                label: "",
                name: "",
                format: "text"
              }
            ]
          },
        ]
      },
      {
        label: "QUAReq003",
        page: [
          {
            label: "Show?",
            name: "QUAReq.QUAReq003.show",
            format: "bool"
          },
          {
            label: "Parameters",
            name: "QUAReq.QUAReq003.parameters",
            canAdd: true,
            canDelete: true,
            array: [
              {
                label: "",
                name: "",
                format: "text"
              }
            ]
          },
        ]
      },
      {
        label: "QUAReq004",
        page: [
          {
            label: "Show?",
            name: "QUAReq.QUAReq004.show",
            format: "bool"
          },
          {
            label: "Parameters",
            name: "QUAReq.QUAReq004.parameters",
            canAdd: true,
            canDelete: true,
            array: [
              {
                label: "",
                name: "",
                format: "text"
              }
            ]
          },
        ]
      }
    ]
  },
  {
    label: "Document Requirements (Before You Fly)",
    name: "DOCReq",
    format: "selectTable",
    selectStyle: "checkbox",
    selectRef: "DOCReq",
    selectIdAccessor: "refID",
    selectSchema: [
      {
        label: "Ref. ID",
        name: "refID",
        width: 150
      },
      {
        label: "Description",
        name: "description"
      }
    ]
  },
  {
    label: "Entry Requirements (Before You Fly)",
    name: "ENTReq",
    format: "selectTable",
    selectStyle: "checkbox",
    selectRef: "ENTReq",
    selectIdAccessor: "refID",
    selectSchema: [
      {
        label: "Ref. ID",
        name: "refID",
        width: 150
      },
      {
        label: "Description",
        name: "description"
      }
    ]
  },
  {
    label: "Airport Proceed (Upon Landing)",
    name: "APProc",
    format: "selectTable",
    selectStyle: "checkbox",
    selectRef: "APProc",
    selectIdAccessor: "refID",
    selectSchema: [
      {
        label: "Ref. ID",
        name: "refID",
        width: 150
      },
      {
        label: "Description",
        name: "description"
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