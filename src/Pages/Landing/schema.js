import _ from "lodash";
import { DOMAIN } from "__Base/config";
import { Accessor } from "IZOArc/STATIC";
import { LANGUAGES } from "__Base/def";

const SECTIONS = [
  {
    label: "Quarantine Req.",
    name: "QUAReq"
  },
  {
    label: "Before You Fly",
    name: "DOCReq"
  },
  {
    label: "Upon Landing",
    name: "APProc"
  },
  {
    label: "Tips",
    name: "Tips"
  }
]

const Landing = [
  {
    label: "Under Maintenance?",
    name: "Config.underMaintenance",
    format: "bool",
    boolStyle: "switch"
  },
  {
    label: "Default Severity",
    name: "Config.defaultSeverity",
    format: "number"
  },
  {
    label: "Default Relevant Period",
    name: "Config.defaultRelevantPeriod",
    format: "number"
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
        label: "Landing Page",
        noTransform: true,
        page: [
          _.map(LANGUAGES, (o, i) => {
            return {
              label: "Page Title (" + o + ")",
              name: "Config.PageTitle." + o,
              format: "text",
              validate: ["required"]
            }
          }),
          {
            tabs: [
              {
                label: "Arrival",
                noTransform: true,
                page: [
                  {
                    inline: [
                      {
                        label: "Icon",
                        name: "Config.Arrival.icon",
                        format: "select",
                        selectStyle: "dropdown",
                        selectRef: "icons",
                        selectVal: "refID",
                        selectCap: "refID",
                        selectTip: "description",
                        showTooltip: true
                      },
                      {
                        label: "Preview",
                        name: "Config.Arrival.icon",
                        format: "display",
                        noLabelGrid: true,
                        width: 400,
                        Custom: (row, field, addOns) => {
                          let icons = Accessor.Get(addOns, "icons");
                          let iconDoc = _.find(icons, o => o.refID === field);
                          if(iconDoc){
                            return (
                              <img src={DOMAIN + "/" + iconDoc.link} alt=""/>
                            );
                          }
                        }
                      },
                    ]
                  },
                  {
                    tabs: _.map(LANGUAGES, (o, i) => {
                      return {
                        label: o,
                        page: [
                          {
                            label: "Page Title",
                            name: "Config.Arrival.pageTitle." + o,
                            format: "text"
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
                            label: "Headerline Disclaimer",
                            name: "Config.Arrival.disclaimerLine." + o,
                            format: "textarea"
                          },
                          {
                            label: "Popup Disclaimer Title",
                            name: "Config.Arrival.disclaimerTitle." + o,
                            format: "textarea"
                          },
                          {
                            label: "Popup Disclaimer Content",
                            name: "Config.Arrival.disclaimerContent." + o,
                            format: "textarea",
                            rows: 8
                          },
                          {
                            label: "Verdict Message (YES)",
                            name: "Config.Arrival.verdictYes." + o,
                            format: "textarea",
                          },
                          {
                            label: "Verdict Message (NO)",
                            name: "Config.Arrival.verdictNo." + o,
                            format: "textarea",
                          },
                          {
                            label: "Verdict Note",
                            name: "Config.Arrival.verdictNote." + o,
                            format: "textarea",
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
                    inline: [
                      {
                        label: "Icon",
                        name: "Config.Departure.icon",
                        format: "select",
                        selectStyle: "dropdown",
                        selectRef: "icons",
                        selectVal: "refID",
                        selectCap: "refID",
                        selectTip: "description",
                        showTooltip: true
                      },
                      {
                        label: "Preview",
                        name: "Config.Departure.icon",
                        format: "display",
                        noLabelGrid: true,
                        width: 400,
                        Custom: (row, field, addOns) => {
                          let icons = Accessor.Get(addOns, "icons");
                          let iconDoc = _.find(icons, o => o.refID === field);
                          if(iconDoc){
                            return (
                              <img src={DOMAIN + "/" + iconDoc.link} alt=""/>
                            );
                          }
                        }
                      },
                    ]
                  },
                  {
                    tabs: _.map(LANGUAGES, (o, i) => {
                      return {
                        label: o,
                        page: [
                          {
                            label: "Page Title",
                            name: "Config.Departure.pageTitle." + o,
                            format: "text"
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
                            label: "Select Destination Page Title",
                            name: "Config.Departure.selectLoc." + o,
                            format: "text"
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
                    inline: [
                      {
                        label: "Icon",
                        name: "Config.Transit.icon",
                        format: "select",
                        selectStyle: "dropdown",
                        selectRef: "icons",
                        selectVal: "refID",
                        selectCap: "refID",
                        selectTip: "description",
                        showTooltip: true
                      },
                      {
                        label: "Preview",
                        name: "Config.Transit.icon",
                        format: "display",
                        noLabelGrid: true,
                        width: 400,
                        Custom: (row, field, addOns) => {
                          let icons = Accessor.Get(addOns, "icons");
                          let iconDoc = _.find(icons, o => o.refID === field);
                          if(iconDoc){
                            return (
                              <img src={DOMAIN + "/" + iconDoc.link} alt=""/>
                            );
                          }
                        }
                      },
                    ]
                  },
                  {
                    tabs: _.map(LANGUAGES, (o, i) => {
                      return {
                        label: o,
                        page: [
                          {
                            label: "Page Title",
                            name: "Config.Transit.pageTitle." + o,
                            format: "text"
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
            ]
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
      {
        label: "Answer Sections",
        noTransform: true,
        page: [
          {
            header: "Caption"
          },
          {
            tabs: _.map(LANGUAGES, (o, i) => {
              return {
                label: o,
                page: _.map(SECTIONS, (v, w) => {
                  return {
                    label: v.label,
                    name: "Config.Answer."+ v.name +".caption." + o,
                    format: "text"
                  };
                })
              };
            })
          },
          {
            header: "Icons"
          },
          _.map(SECTIONS, (o, i) => {
            return [
              {
                inline: [
                  {
                    label: o.label,
                    name: "Config.Answer." + o.name + ".icon",
                    format: "select",
                    selectStyle: "dropdown",
                    selectRef: "icons",
                    selectVal: "refID",
                    selectCap: "refID",
                    selectTip: "description",
                    showTooltip: true
                  },
                  {
                    label: "Preview",
                    name: "Config.Answer." + o.name + ".icon",
                    format: "display",
                    noLabelGrid: true,
                    width: 400,
                    Custom: (row, field, addOns) => {
                      let icons = Accessor.Get(addOns, "icons");
                      let iconDoc = _.find(icons, o => o.refID === field);
                      if(iconDoc){
                        return (
                          <img src={DOMAIN + "/" + iconDoc.link} alt=""/>
                        );
                      }
                    }
                  },
                ]
              },
              {
                inline: [
                  {
                    label: o.label + " (Selected)",
                    name: "Config.Answer." + o.name + ".icon_selected",
                    format: "select",
                    selectStyle: "dropdown",
                    selectRef: "icons",
                    selectVal: "refID",
                    selectCap: "refID",
                    selectTip: "description",
                    showTooltip: true
                  },
                  {
                    label: "Preview",
                    name: "Config.Answer." + o.name + ".icon_selected",
                    format: "display",
                    noLabelGrid: true,
                    width: 400,
                    Custom: (row, field, addOns) => {
                      let icons = Accessor.Get(addOns, "icons");
                      let iconDoc = _.find(icons, o => o.refID === field);
                      if(iconDoc){
                        return (
                          <img src={DOMAIN + "/" + iconDoc.link} alt=""/>
                        );
                      }
                    }
                  },
                ]
              }
              
            ]
          }).flat(Infinity)
        ]
      }
    ]
  }
];

let schema = {
  Landing
};

export default schema;
