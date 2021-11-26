import { LocaleX } from "IZOArc/STATIC";
import _ from "lodash";

const Table = [
  {
    label: () => LocaleX.Parse({
      EN: "Permit Type",
      TC: "許可証種類"
    }),
    name: "permitRefID",
    Cell: (row, field, addOns) => {
      let doc = _.find(addOns.allPermits, o => o._id === field);
      return LocaleX.Parse(doc.name);
    }
  },
  {
    label: () => LocaleX.Parse({
      EN: "Application ID",
      TC: "申請編號"
    }),
    name: "_id"
  },
  {
    label: () => LocaleX.Parse({
      EN: "Status",
      TC: "狀態"
    }),
    name: "status",
    Cell: (row, field, addOns) => {
      let doc = _.find(addOns.allPermits, o => o._id === row.permitRefID);
      return LocaleX.Parse(doc.steps[field].name);
    }
  }
];

const Add = [];

const Info = [];

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