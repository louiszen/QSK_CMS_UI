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
    label: "Document Requirements",
    name: "DOCReq",
    format: "select",
    selectStyle: "checkbox",
    selectRef: ["DOCReq001", "DOCReq002", "DOCReq003", "DOCReq004", "DOCReq005", "DOCReq006", "DOCReq007"],
    selectCap: "",
    selectVal: ""
  },
  {
    label: "Entry Requirements",
    name: "ENTReq",
    format: "select",
    selectStyle: "checkbox",
    selectRef: ["ENTReq001", "ENTReq002"],
    selectCap: "",
    selectVal: ""
  },
  {
    label: "Airport Proceed",
    name: "APProc",
    format: "select",
    selectStyle: "checkbox",
    selectRef: ["APProc001", "APProc002", "APProc003", "APProc004", "APProc005", "APProc006", "APProc007", "APProc008"],
    selectCap: "",
    selectVal: ""
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