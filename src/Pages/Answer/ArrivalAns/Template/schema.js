import { Typography } from "antd";
import { HStack, Spacer } from "IZOArc/LabIZO/Stackizo";
import { Accessor } from "IZOArc/STATIC";
import _ from "lodash";

const REQDoc = [
  {
    name: "QUAReq",
    caption: "Quarantine Requirements",
    icon: "fas fa-syringe fa-lg"
  },
  {
    name: "DOCReq",
    caption: "Document Requirements",
    icon: "far fa-file-alt fa-lg"
  },
  {
    name: "ENTReq",
    caption: "Entry Requirements",
    icon: "fas fa-door-open fa-lg"
  },
  {
    name: "APProc",
    caption: "Airport Proceed",
    icon: "fas fa-plane fa-lg"
  }
];
 

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
    label: "Eligible to enter HK?",
    name: "canEntry",
    format: "bool",
    boolStyle: "switch"
  },
  {
    control: "canEntry",
    fold: [
      {
        tabs: _.map(REQDoc, (o, i) => {
          return {
            label: o.caption,
            icon: <i className={o.icon}/>,
            iconPos: "left",
            noTransform: true,
            alignment: "left",
            page: [
              {
                label: "Add " + o.caption,
                name: o.name,
                canAdd: true,
                canDelete: true,
                arrayStyle: "card",
                reordering: true,
                array: [
                  {
                    label: "Ref. ID",
                    name: "refID",
                    format: "select",
                    selectStyle: "dropdown",
                    selectRef: o.name,
                    selectCap: "refID",
                    selectVal: "refID",
                    selectTip: "description",
                    showTooltip: true
                  },
                  (formValue, addOns, idx) => {
                    let refID = Accessor.Get(formValue, o.name + "." + idx + ".refID");
                    let doc = addOns[o.name]?.find(o => o.refID === refID);
                    return {
                      label: "Description",
                      name: "",
                      format: "display",
                      Custom: () => <HStack width="100%"><Typography>{doc?.description}</Typography><Spacer/></HStack>
                    };
                  },
                  (formValue, addOns, idx) => {
                    let refID = Accessor.Get(formValue, o.name + "." + idx + ".refID");
                    let doc = addOns[o.name]?.find(o => o.refID === refID);
                    if(doc){
                      return _.map(doc.parameters, (o, i) => {
                        return {
                          label: o.description,
                          name: "parameters." + i,
                          format: "select",
                          selectRef: _.map(o.options, (v, x) => v.EN),
                          selectCap: "",
                          selectVal: ""
                        }
                      });
                    }
                  }
                ]
              },
            ]
          }
        }),
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