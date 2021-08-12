const Table = [
  {
    label: "Order",
    name: "order",
    width: 70
  },
  {
    label: "Description",
    name: "description"
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