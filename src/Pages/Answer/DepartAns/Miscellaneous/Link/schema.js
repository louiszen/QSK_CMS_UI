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
    header: "Display"
  },
  _.map(LANGUAGES, (o, i) => {
    return {
      label: "Content (" + o + ")",
      name: "display.title." + o,
      format: "textarea"
    }
  }),
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
    label: "Links",
    name: "links",
    canAdd: true,
    canDelete: true,
    arrayStyle: "card",
    array:[
      {
        label: "Language",
        name: "lang",
        format: "select",
        selectStyle: "radio",
        selectDirection: "row",
        selectRef: ["All", ...LANGUAGES],
        selectCap: "",
        selectVal: ""
      },
      {
        label: "URL",
        name: "url",
        format: "text",
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