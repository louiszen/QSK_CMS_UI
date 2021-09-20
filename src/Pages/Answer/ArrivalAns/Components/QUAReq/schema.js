import _ from "lodash";
import { LANGUAGES } from "__Base/config";

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
    tabs: _.map(LANGUAGES, (o, i) => {
      return {
        label: o,
        page: [
          {
            label: "Title",
            name: "display.title." + o,
            format: "text"
          },
          {
            label: "Content",
            name: "display.content." + o,
            format: "textarea"
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
    dateType: "datetime"
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