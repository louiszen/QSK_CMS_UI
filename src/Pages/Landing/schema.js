import _ from "lodash";
import { LANGUAGES } from "__Base/config";

const Landing = [
  {
    label: "Under Maintenance?",
    name: "Config.underMaintenance",
    format: "bool",
    boolStyle: "switch"
  },
  {
    tabs: _.map(LANGUAGES, (o, i) => {
      return {
        label: o,
        page: [
          {
            label: "Page Title",
            name: "Config.PageTitle." + o,
            format: "text"
          },
          {
            header: "Maintenance Page"
          },
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
          },
          {
            header: "Arrival"
          },
          {
            label: "Title",
            name: "Config.Arrival.title." + o,
            format: "text"
          },
          {
            label: "Content",
            name: "Config.Arrival.content." + o,
            format: "textarea"
          },
          {
            header: "Departure"
          },
          {
            label: "Title",
            name: "Config.Departure.title." + o,
            format: "text"
          },
          {
            label: "Content",
            name: "Config.Departure.content." + o,
            format: "textarea"
          },
          {
            header: "Transit"
          },
          {
            label: "Title",
            name: "Config.Transit.title." + o,
            format: "text"
          },
          {
            label: "Content",
            name: "Config.Transit.content." + o,
            format: "textarea"
          },
          {
            header: "Footer"
          },
          {
            label: "Image Banner",
            name: "Config.ImageBanner." + o,
            format: "textarea"
          },
          {
            header: "Notice"
          },
          {
            label: "Title",
            name: "Config.Notice.title." + o,
            format: "text"
          },
          {
            label: "Content",
            name: "Config.Notice.content." + o,
            format: "textarea"
          },
          {
            header: "Arrival Disclaimer"
          },
          {
            label: "Title",
            name: "Config.ArrivalDisclaimer.title." + o,
            format: "text"
          },
          {
            label: "Content",
            name: "Config.ArrivalDisclaimer.content." + o,
            format: "textarea"
          },
        ]
      }
    })
  }
];

let schema = {
  Landing
};

export default schema;
