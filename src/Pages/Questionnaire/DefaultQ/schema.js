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
    format: "select",
    selectStyle: "dropdown",
    selectRef: "defaultQs",
    selectVal: "refID",
    selectCap: "refID",
    showTooltip: true,
    selectTip: "description"
  },
  {
    label: "Description",
    name: "description",
    format: "textarea"
  },
  {
    tabs: [
      {
        label: "EN",
        page: [
          {
            label: "Question",
            name: "question.EN",
            format: "text"
          },
          {
            label: "Subtitle",
            name: "subtitle.EN",
            format: "text"
          }
        ]
      },
      {
        label: "TC",
        page: [
          {
            label: "Question",
            name: "question.TC",
            format: "text"
          },
          {
            label: "Subtitle",
            name: "subtitle.TC",
            format: "text"
          }
        ]
      },
      {
        label: "SC",
        page: [
          {
            label: "Question",
            name: "question.SC",
            format: "text"
          },
          {
            label: "Subtitle",
            name: "subtitle.SC",
            format: "text"
          }
        ]
      },
    ]
  },
  {
    label: "Effective Start Date",
    name: "effective.Start",
    format: "date",
    dateType: "datetime"
  },
  {
    label: "Effective End Date",
    name: "effective.End",
    format: "date",
    dateType: "datetime"
  }
];

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