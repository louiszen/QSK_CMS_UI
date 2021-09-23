import _ from "lodash";
import { LANGUAGES } from "__Base/config";
import { Typography } from "antd";
import { HStack, Spacer } from "IZOArc/LabIZO/Stackizo";
import { Accessor } from "IZOArc/STATIC";

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
    label: "Show Travel Advisories?",
    name: "showTA",
    format: "bool",
    boolStyle: "switch"
  },
  {
    label: "Show COVID-Tests at HKIA?",
    name: "showCT",
    format: "bool",
    boolStyle: "switch"
  },
  {
    label: "Show Others?",
    name: "showOTH",
    format: "bool",
    boolStyle: "switch"
  },
  {
    tabs: _.map(LANGUAGES, (o, i) => {
      return {
        label: o,
        page: [
          {
            label: "Pre-wordings",
            name: "prewordings." + o,
            format: "textarea"
          },
        ]
      }
    })
  },
  {
    label: "Add Links",
    name: "links",
    canAdd: true,
    canDelete: true,
    arrayStyle: "card",
    array: [
      {
        label: "Ref. ID",
        name: "refID",
        format: "select",
        selectStyle: "dropdown",
        selectRef: "Links",
        selectCap: "refID",
        selectVal: "refID",
        selectTip: "description",
        showTooltip: true
      },
      (formValue, addOns, idx) => {
        let refID = Accessor.Get(formValue, "links." + idx + ".refID");
        let doc = addOns?.Links?.find(o => o.refID === refID);
        return {
          label: "Description",
          name: "",
          format: "display",
          Custom: () => <HStack width="100%"><Typography>{doc?.description}</Typography><Spacer/></HStack>
        };
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