import _ from "lodash";
import { LANGUAGES } from "__SYSDefault/DEF";

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
    readOnly: true,
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
    label: "Show Destination List",
    name: "display.showDestinationOptions",
    format: "bool",
    boolStyle: "switch"
  },
  {
    tabs: _.map(LANGUAGES, (o, i) => {
      return {
        label: o,
        page: [
          {
            label: "Button Caption",
            name: "display.btnCaption." + o,
            format: "text"
          },
          {
            label: "Title",
            name: "display.title." + o,
            format: "text"
          },
          {
            label: "Subtitle",
            name: "display.subtitle." + o,
            format: "text"
          },
          {
            label: "Content",
            name: "display.content." + o,
            format: "textarea"
          },
          {
            label: "Include Collapse?",
            name: "display.showCollapse." + o,
            format: "bool",
            boolStyle: "switch"
          },
          {
            control: "display.showCollapse." + o,
            fold: [
              {
                label: "Collapse Content",
                name: "display.collapse." + o,
                format: "textarea"
              }
            ]
          }
        ]
      }
    })
  },
  {
    header: "App Link"
  },
  {
    tabs: _.map(LANGUAGES, (o, i) => {
      return {
        label: o,
        page: [
          {
            label: "Display Last Update",
            name: "displayLastUpdate." + o,
            format: "text"
          },
          {
            label: "Content",
            name: "applink.content." + o,
            format: "text"
          },
          {
            label: "Google",
            name: "applink.google.caption." + o,
            format: "text"
          },
          {
            label: "Apple",
            name: "applink.apple.caption." + o,
            format: "text",
          }
        ]
      }
    })
  },
  {
    label: "Google App URL",
    name: "applink.google.url",
    format: "text"
  },
  {
    label: "Apple App URL",
    name: "applink.apple.url",
    format: "text"
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