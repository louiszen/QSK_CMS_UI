import { Accessor } from "IZOArc/STATIC";
import _ from "lodash";

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
    label: "Quarantine Requirements",
    name: "QUAReq",
    canAdd: true,
    canDelete: true,
    arrayStyle: "card",
    array: [
      {
        label: "Ref. ID",
        name: "refID",
        format: "select",
        selectStyle: "dropdown",
        selectRef: "QUAReq",
        selectCap: "refID",
        selectVal: "refID",
        selectTip: "description",
        showTooltip: true
      },
      (formValue, addOns, idx) => {
        let refID = Accessor.Get(formValue, "QUAReq." + idx + ".refID");
        let doc = addOns.QUAReq.find(o => o.refID === refID);
        console.log(doc)
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