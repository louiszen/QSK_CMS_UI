import _ from "lodash";
import { LANGUAGES } from "__Base/config";

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
  _.map(LANGUAGES, (o, i) => {
    return {
      label: "Content ("+ o + ")",
      name: "display.content." + o
    }
  }),
  {
    label: "Effective Start Date",
    name: "effective.Start",
    transform: "datetime",
    dateFormat: "YYYY/MM/DD HH:mm:ss",
    filterable: false
  },
  {
    label: "Effective End Date",
    name: "effective.End",
    transform: "datetime",
    dateFormat: "YYYY/MM/DD HH:mm:ss",
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
    format: "text",
    validate: ["required"]
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
    tabs: _.map(LANGUAGES, (o, i) => {
      return {
        label: o,
        page: [
          {
            label: "Content",
            name: "display.content." + o,
            format: "textarea"
          },
          {
            label: "Include Collapsable Section?",
            name: "display.showCollapse." + o,
            format: "bool",
            boolStyle: "switch"
          },
          {
            control: "display.showCollapse." + o,
            fold: [
              {
                label: "Collapsable Content",
                name: "display.collapse." + o,
                format: "textarea"
              }
            ]
          }
        ]
      }
    }),
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
        label: "Include Footnote?",
        name: "incFootnote",
        format: "bool"
      },
      {
        label: "Options",
        name: "options",
        canAdd: true,
        canDelete: true,
        headerStyle: "outlined",
        array: _.map(LANGUAGES, (o, i) => {
          return {
            label: o,
            name: o,
            format: "text"
          }
        })
      }
    ]
  },
  {
    label: "Effective Start Date",
    name: "effective.Start",
    format: "date",
    dateType: "datetime",
    validate: ["required"]
  },
  {
    label: "Effective End Date",
    name: "effective.End",
    format: "date",
    dateType: "datetime"
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