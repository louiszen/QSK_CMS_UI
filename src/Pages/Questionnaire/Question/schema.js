import _ from 'lodash';
import { LANGUAGES } from "__SYSDefault/DEF";

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
    format: "text",
    validate: ["required"]
  },
  {
    label: "Description",
    name: "description",
    format: "textarea"
  },
  {
    tabs: _.map(LANGUAGES, (o, i) => {
      return {
        label: o,
        page: [
          {
            label: "Question",
            name: "question." + o,
            format: "text"
          },
          {
            label: "Subtitle",
            name: "subtitle." + o,
            format: "text"
          },
          {
            label: "Verdict Text (Yes)",
            name: "verdict.yes." + o,
            format: "text"
          },
          {
            label: "Verdict Text (No)",
            name: "verdict.no." + o,
            format: "text"
          }
        ]
      };
    })
  },
  {
    label: "Show Info?",
    name: "showInfo",
    format: "bool"
  },
  {
    control: "showInfo",
    fold: [
      {
        tabs: _.map(LANGUAGES, (o, i) => {
          return {
            label: o,
            page: [
              {
                label: "Info Content",
                name: "infoContent." + o,
                format: "textarea"
              },
            ]
          };
        })
      },
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