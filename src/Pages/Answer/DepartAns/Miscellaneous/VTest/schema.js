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
      label: "Title (" + o + ")",
      name: "display.title." + o
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
    label: "Show Map?",
    name: "display.showMap",
    format: "bool",
    boolStyle: "switch"
  },
  {
    label: "Show Service Hours?",
    name: "display.showTime",
    format: "bool",
    boolStyle: "switch"
  },
  {
    label: "Show Phone?",
    name: "display.showTel",
    format: "bool",
    boolStyle: "switch"
  },
  {
    label: "Show URL?",
    name: "display.showURL",
    format: "bool",
    boolStyle: "switch"
  },
  {
    tabs: _.map(LANGUAGES, (o, i) => {
      return {
        label: o,
        page:[
          {
            label: "Title",
            name: "display.title." + o,
            format: "text"
          },
          {
            label: "Map Caption",
            name: "display.map.caption." + o,
            format: "textarea"
          },
          {
            label: "Map URL",
            name: "display.map.url." + o,
            format: "text"
          },
          {
            label: "Service Hours Caption",
            name: "display.service.caption." + o,
            format: "textarea"
          },
          {
            label: "Service Hours Remarks",
            name: "display.service.remarks." + o,
            format: "text"
          },
          {
            label: "Phone Caption",
            name: "display.phone.caption." + o,
            format: "textarea"
          },
          {
            label: "Phone Number",
            name: "display.phone.value." + o,
            format: "text"
          },
          {
            label: "URL",
            name: "display.url." + o,
            format: "text"
          },
        ]
      }
    }),
  },
  {
    label: "Opening Hours",
    name: "display.service.clock",
    canAdd: true,
    canDelete: true,
    array: [
      {
        label: "Start",
        name: "start",
        format: "text"
      },
      {
        label: "End",
        name: "end",
        format: "text"
      }
    ]
  },
  {
    label: "Bullets",
    name: "display.bullets",
    canAdd: true,
    canDelete: true,
    arrayStyle: "card",
    array: _.map(LANGUAGES, (o, i) => {
      return {
        label: o,
        name: o,
        format: "textarea"
      }
    })
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