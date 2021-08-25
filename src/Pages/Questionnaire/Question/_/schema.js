const Table = [];

const Tail = [
  {
    label: "Ref. ID",
    name: "refID",
    format: "text"
  },
  {
    label: "Type",
    name: "type",
    format: "select",
    selectStyle: "dropdown",
    selectRef: ["question", "verdict"],
    selectCap: "",
    selectVal: ""
  },
  {
    label: "Description",
    name: "description",
    format: "text"
  },
  {
    label: "",
    control: "type",
    controlFunc: (doc, field) => field === "question",
    fold: [
      {
        label: "Conditions:",
        name: "conditions.$or",
        canAdd: true,
        canDelete: true,
        array: [
          {
            label: "Cases",
            name: "$and",
            canAdd: true,
            canDelete: true,
            array: [
              {
                label: "Ref",
                name: "ref",
                format: "text"
              },
              {
                label: "=",
                name: "$eq",
                format: "text"
              }
            ]
          }
        ]
      },
      {
        label: "Question Title (EN)",
        name: "question.title.EN",
        format: "text"
      },
      {
        label: "Question Title (TC)",
        name: "question.title.TC",
        format: "text"
      },
      {
        label: "Question Title (SC)",
        name: "question.title.SC",
        format: "text"
      },
      {
        label: "Question Subtitle (EN)",
        name: "question.subtitle.EN",
        format: "text"
      },
      {
        label: "Question Subtitle (TC)",
        name: "question.subtitle.TC",
        format: "text"
      },
      {
        label: "Question Subtitle (SC)",
        name: "question.subtitle.SC",
        format: "text"
      }
    ]
  }
  
];

const Add = [
  ...Tail
];

const Info = [
  ...Tail
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