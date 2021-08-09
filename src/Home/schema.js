const loginName = [
  {
    label: "User ID",
    name: "username",
    format: "text",
    validate: ["required"],
    autoFocus: true,
  },
];

const loginPassword = [
  {
    label: "Password",
    name: "password",
    format: "password",
    autoFocus: true,
  },
];

const initial = [
  {
    label: "RemoteDB same as BaseDB?",
    name: "sameAsBaseDB",
    format: "bool",
    boolStyle: "switch",
    defaultValue: true,
  },
  {
    control: "sameAsBaseDB",
    inverse: true,
    fold: [
      {
        label: "BASE",
        name: "CouchDB.BASE",
        format: "text",
      },
      {
        label: "USERNAME",
        name: "CouchDB.USERNAME",
        format: "text",
      },
      {
        label: "PASSWORD",
        name: "CouchDB.PASSWORD",
        format: "text",
      },
      {
        label: "URL",
        name: "CouchDB.URL",
        format: "text",
      },
    ],
  },
  {
    label: "Initial Watsons also?",
    name: "initialwatsons",
    format: "bool",
    boolStyle: "switch",
    defaultValue: true,
  },
  {
    label: "Use Default Watsons Workspace?",
    name: "defaultwatsons",
    format: "bool",
    boolStyle: "switch",
    defaultValue: true,
  },
  {
    control: "defaultwatsons",
    inverse: true,
    fold: [
      {
        label: "URL",
        name: "Watsons.URL",
        format: "text",
      },
      {
        label: "APIKEY",
        name: "Watsons.APIKEY",
        format: "text",
      },
      {
        label: "Version",
        name: "Watsons.VERSION",
        format: "text",
      },
      {
        label: "EN",
        name: "Watsons.EN",
        format: "text",
      },
      {
        label: "TC",
        name: "Watsons.TC",
        format: "text",
      },
      {
        label: "SC",
        name: "Watsons.SC",
        format: "text",
      },
    ],
  },
];

let schema = {
  loginName,
  loginPassword,
  initial,
};

export default schema;
