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
    tabs: [
      {
        label: "Components",
        icon: <i className="fas fa-shapes fa-lg"/>,
        iconPos: "left",
        noTransform: true,
        alignment: "left",
        page: [
          {
            label: "Add Component",
            name: "Components",
            canAdd: true,
            canDelete: true,
            arrayStyle: "card",
            array: [
              {
                label: "Ref. ID",
                name: "refID",
                format: "select",
                selectStyle: "dropdown",
                selectRef: "Components",
                selectCap: "refID",
                selectVal: "refID",
                selectTip: "description",
                showTooltip: true
              },
              (formValue, addOns, idx) => {
                let refID = Accessor.Get(formValue, "Components." + idx + ".refID");
                let doc = addOns?.Components?.find(o => o.refID === refID);
                return {
                  label: "Description",
                  name: "",
                  format: "display",
                  Custom: () => <HStack width="100%"><Typography>{doc?.description}</Typography><Spacer/></HStack>
                };
              }
            ]
          }
        ]
      },
    ],
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