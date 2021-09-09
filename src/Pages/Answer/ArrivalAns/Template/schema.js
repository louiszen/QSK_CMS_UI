import { Typography } from "antd";
import { HStack, Spacer } from "IZOArc/LabIZO/Stackizo";
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
    tabs: [
      {
        label: "Quarantine Requirements",
        icon: <i className="fas fa-syringe fa-lg"/>,
        iconPos: "left",
        noTransform: true,
        alignment: "left",
        page: [
          {
            label: "Add Quarantine Requirements",
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
      },
      {
        label: "Document Requirements",
        icon: <i className="far fa-file-alt fa-lg"/>,
        iconPos: "left",
        noTransform: true,
        alignment: "left",
        page: [
          {
            label: "Add Document Requirements (Before You Fly)",
            name: "DOCReq",
            canAdd: true,
            canDelete: true,
            arrayStyle: "card",
            array: [
              {
                label: "Ref. ID",
                name: "refID",
                format: "select",
                selectStyle: "dropdown",
                selectRef: "DOCReq",
                selectCap: "refID",
                selectVal: "refID",
                selectTip: "description",
                showTooltip: true
              },
              (formValue, addOns, idx) => {
                let refID = Accessor.Get(formValue, "DOCReq." + idx + ".refID");
                let doc = addOns?.DOCReq?.find(o => o.refID === refID);
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
      {
        label: "Entry Requirements",
        icon: <i className="fas fa-door-open fa-lg"/>,
        iconPos: "left",
        noTransform: true,
        alignment: "left",
        page: [
          {
            label: "Add Entry Requirements (Before You Fly)",
            name: "ENTReq",
            canAdd: true,
            canDelete: true,
            arrayStyle: "card",
            array: [
              {
                label: "Ref. ID",
                name: "refID",
                format: "select",
                selectStyle: "dropdown",
                selectRef: "ENTReq",
                selectCap: "refID",
                selectVal: "refID",
                selectTip: "description",
                showTooltip: true
              },
              (formValue, addOns, idx) => {
                let refID = Accessor.Get(formValue, "ENTReq." + idx + ".refID");
                let doc = addOns?.ENTReq?.find(o => o.refID === refID);
                return {
                  label: "Description",
                  name: "",
                  format: "display",
                  Custom: () => <HStack width="100%"><Typography>{doc?.description}</Typography><Spacer/></HStack>
                };
              }
            ]
          },
        ]
      },
      {
        label: "Airport Proceed",
        icon: <i className="fas fa-plane fa-lg"/>,
        iconPos: "left",
        noTransform: true,
        alignment: "left",
        page: [
          {
            label: "Add Airport Proceed (Upon Landing)",
            name: "APProc",
            canAdd: true,
            canDelete: true,
            arrayStyle: "card",
            array: [
              {
                label: "Ref. ID",
                name: "refID",
                format: "select",
                selectStyle: "dropdown",
                selectRef: "APProc",
                selectCap: "refID",
                selectVal: "refID",
                selectTip: "description",
                showTooltip: true
              },
              (formValue, addOns, idx) => {
                let refID = Accessor.Get(formValue, "APProc." + idx + ".refID");
                let doc = addOns?.APProc?.find(o => o.refID === refID);
                return {
                  label: "Description",
                  name: "",
                  format: "display",
                  Custom: () => <HStack width="100%"><Typography>{doc?.description}</Typography><Spacer/></HStack>
                };
              }
            ]
          },
        ]
      },
    ]
  },
  /* 
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
  */
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