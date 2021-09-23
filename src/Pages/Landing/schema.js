import _ from "lodash";
import { LANGUAGES } from "__Base/config";

const Landing = [
  _.map(LANGUAGES, (o, i) => {
    return {
      label: "Page Title (" + o + ")",
      name: "Config.PageTitle." + o,
      format: "text",
      validate: ["required"]
    }
  }),
  {
    label: "Under Maintenance?",
    name: "Config.underMaintenance",
    format: "bool",
    boolStyle: "switch"
  },
  {
    tabs: [
      {
        label: "Maintenance Page",
        noTransform: true,
        page: [
          {
            tabs: _.map(LANGUAGES, (o, i) => {
              return {
                label: o,
                page: [
                  {
                    label: "Title",
                    name: "Config.Maintenance.title." + o,
                    format: "text"
                  },
                  {
                    label: "Content",
                    name: "Config.Maintenance.content." + o,
                    format: "textarea"
                  },
                  {
                    label: "Image / HTML5",
                    name: "Config.Maintenance.image." + o,
                    format: "textarea"
                  }
                ]
              };
            })
          }
        ]
      },
      {
        label: "Arrival",
        noTransform: true,
        page: [
          {
            tabs: _.map(LANGUAGES, (o, i) => {
              return {
                label: o,
                page: [
                  {
                    label: "Title",
                    name: "Config.Arrival.title." + o,
                    format: "text"
                  },
                  {
                    label: "Content",
                    name: "Config.Arrival.content." + o,
                    format: "textarea"
                  }
                ]
              };
            })
          }
        ]
      },
      {
        label: "Departure",
        noTransform: true,
        page: [
          {
            tabs: _.map(LANGUAGES, (o, i) => {
              return {
                label: o,
                page: [
                  {
                    label: "Title",
                    name: "Config.Departure.title." + o,
                    format: "text"
                  },
                  {
                    label: "Content",
                    name: "Config.Departure.content." + o,
                    format: "textarea"
                  }
                ]
              };
            })
          }
        ]
      },
      {
        label: "Transit",
        noTransform: true,
        page: [
          {
            tabs: _.map(LANGUAGES, (o, i) => {
              return {
                label: o,
                page: [
                  {
                    label: "Title",
                    name: "Config.Transit.title." + o,
                    format: "text"
                  },
                  {
                    label: "Content",
                    name: "Config.Transit.content." + o,
                    format: "textarea"
                  }
                ]
              };
            })
          }
        ]
      },
      {
        label: "ImageBanner",
        noTransform: true,
        page: [
          {
            tabs: _.map(LANGUAGES, (o, i) => {
              return {
                label: o,
                page: [
                  {
                    label: "Content",
                    name: "Config.ImageBanner." + o,
                    format: "textarea"
                  }
                ]
              };
            })
          }
        ]
      },
      {
        label: "Notice",
        noTransform: true,
        page: [
          {
            tabs: _.map(LANGUAGES, (o, i) => {
              return {
                label: o,
                page: [
                  {
                    label: "Title",
                    name: "Config.Notice.title." + o,
                    format: "text"
                  },
                  {
                    label: "Content",
                    name: "Config.Notice.content." + o,
                    format: "textarea",
                    rows: 8
                  }
                ]
              };
            })
          }
        ]
      },
      {
        label: "Arrival Disclaimer",
        noTransform: true,
        page: [
          {
            tabs: _.map(LANGUAGES, (o, i) => {
              return {
                label: o,
                page: [
                  {
                    label: "Title",
                    name: "Config.ArrivalDisclaimer.title." + o,
                    format: "text"
                  },
                  {
                    label: "Content",
                    name: "Config.ArrivalDisclaimer.content." + o,
                    format: "textarea",
                    rows: 8
                  }
                ]
              };
            })
          }
        ]
      },
      {
        label: "Sharing Text",
        noTransform: true,
        page: [
          {
            tabs: _.map(LANGUAGES, (o, i) => {
              return {
                label: o,
                page: [
                  {
                    label: "Title",
                    name: "Config.SharingText.title." + o,
                    format: "text"
                  },
                  {
                    label: "Content",
                    name: "Config.SharingText.content." + o,
                    format: "textarea"
                  }
                ]
              };
            })
          }
        ]
      },
    ]
  }
];

let schema = {
  Landing
};

export default schema;
