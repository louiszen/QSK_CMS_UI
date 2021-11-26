import { LocaleX, STORE } from "IZOArc/STATIC";
import { Link } from "react-router-dom";

const Table = [
  {
    label: () => LocaleX.Get("SubmitPermit.Table.id"),
    name: "_id",
    width: 200
  },
  {
    label: () => LocaleX.Get("SubmitPermit.Table.name"),
    name: "name",
    Cell: (row, field, addOns) => {
      let disField = field[STORE.lang];
      return (
        <Link to={"/Permit?id=" + row._id}>
          {disField}
        </Link>
      );
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