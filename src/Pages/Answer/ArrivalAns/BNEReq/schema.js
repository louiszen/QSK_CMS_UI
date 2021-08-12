const Table = [
  {
    label: "Order",
    name: "order",
    width: 70
  },
  {
    label: "Description",
    name: "description"
  },
  {
    label: "Content (EN)",
    name: "component.content.EN"
  },
  {
    label: "Content (TC)",
    name: "component.content.TC"
  },
  {
    label: "Content (SC)",
    name: "component.content.SC"
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
    label: "Description",
    name: "description",
    format: "textarea"
  },
  {
    label: "Content (EN)",
    name: "component.content.EN",
    format: "textarea"
  },
  {
    label: "Content (TC)",
    name: "component.content.TC",
    format: "textarea"
  },
  {
    label: "Content (SC)",
    name: "component.content.SC",
    format: "textarea"
  },
  {
    label: "Last Update",
    name: "lastUpdate",
    format: "date",
    dateType: "datetime",
    readOnly: true
  }
];

const Add = [
  ...Tail
];

const Info = [
  {
    label: "Order",
    name: "order",
    format: "text",
    readOnly: true
  },
  ...Tail
];

const Edit = [
  ...Info
];

const Export = [
  {
    label: "Order",
    name: "order",
    format: "number"
  },
  {
    label: "Description",
    name: "description"
  },
  {
    label: "Content (EN)",
    name: "component.content.EN"
  },
  {
    label: "Content (TC)",
    name: "component.content.TC"
  },
  {
    label: "Content (SC)",
    name: "component.content.SC"
  },
  {
    label: "Last Update",
    name: "lastUpdate",
    dateFormat: "YYYY/MM/DD HH:mm:ss",
    format: "datetime",
  }
];

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