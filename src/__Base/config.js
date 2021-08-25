import { ColorX } from 'IZOArc/STATIC';
import { Typography } from '@material-ui/core';
import { ContactSupport, Dashboard, Public, ReplyAll } from '@material-ui/icons';
import _ from 'lodash';

export const IZOTheme = {
  background: "black",
  foreground: "elainOrange",
  btnHover: "elainOrangeDark",
};

export const Project = 
  <Typography style={{color: ColorX.GetColorCSS(IZOTheme.foreground)}}>
    {"COVID19 MiniSite"}
  </Typography>;
export const hasContainer = true;
export const serverCheck = true;
export const loginSys = true;

export const NavbarDis = {
  src: "/Images/QSK.png",
  style: {
    width: 100,
    marginX: 3,
    right: 160,
    top: 0,
    opacity: 0.2
  }
};

export const StartDate = process.env.REACT_APP_STARTDATE || "2021-02";

export const _domain = {
  dev: "<dev domain>",
  test: "http://localhost:7777",
};

export const DOMAIN = process.env.NODE_ENV === "production" ? 
  (_.isEmpty(process.env.REACT_APP_DOMAIN) ? _domain[process.env.REACT_APP_STAGE] : process.env.REACT_APP_DOMAIN)
  : _domain.test;

export const MenuConfig = [
  {
    caption: "DashBoard",
    link: "/Dashboard",
    faIcon: <Dashboard />,
    auth: "Dashboard",
  },
  {
    caption: "Severity",
    link: "/Severity",
    faIcon: "fas fa-map-marked-alt fa-lg",
    auth: "Severity",
    submenu: [
      {
        caption: "Severity Group",
        link: "/Severity/SevGroup",
        faIcon: "fas fa-th-large fa-lg",
        auth: "Severity.SevGroup"
      },
      {
        caption: "Location",
        link: "/Severity/Location",
        faIcon: <Public/>,
        auth: "Severity.Location"
      },
      {
        caption: "Location Severity",
        link: "/Severity/Grouping",
        faIcon: "far fa-bookmark fa-lg",
        auth: "Severity.Grouping"
      },
    ]
  },
  {
    caption: "Answer",
    link: "/Answer",
    faIcon: <ReplyAll/>,
    auth: "Answer",
    submenu: [
      {
        caption: "Arrival",
        link: "/Answer/ArrivalAns",
        faIcon: "fas fa-plane-arrival fa-lg",
        auth: "Answer.ArrivalAns",
        submenu: [
          {
            caption: "Quarantine Req.",
            link: "/Answer/ArrivalAns/QUAReq",
            faIcon: "fas fa-syringe fa-lg",
            auth: "Answer.ArrivalAns.QUAReq",
          },
          {
            caption: "Document Req.",
            link: "/Answer/ArrivalAns/DOCReq",
            faIcon: "far fa-file-alt fa-lg",
            auth: "Answer.ArrivalAns.DOCReq",
          },
          {
            caption: "Entry Req.",
            link: "/Answer/ArrivalAns/ENTReq",
            faIcon: "fas fa-door-open fa-lg",
            auth: "Answer.ArrivalAns.ENTReq",
          },
          {
            caption: "Airport Proc",
            link: "/Answer/ArrivalAns/APProc",
            faIcon: "fas fa-plane fa-lg",
            auth: "Answer.ArrivalAns.APProc",
          }
        ]
      },
      {
        caption: "Departure",
        link: "/Answer/DepartAns",
        faIcon: "fas fa-plane-departure fa-lg",
        auth: "Answer.DepartAns"
      },
      {
        caption: "Transition",
        link: "/Answer/TransitAns",
        faIcon: "fas fa-project-diagram fa-lg",
        auth: "Answer.TransitAns"
      }
    ]
  },
  {
    caption: "Questionnaire",
    link: "/Questionnaire",
    faIcon: "fas fa-file-alt fa-lg",
    auth: "Questionnaire",
    submenu: [
      {
        caption: "Questions",
        link: "/Questionnaire/Question",
        faIcon: <ContactSupport/>,
        auth: "Questionnaire.Question"
      },
      {
        caption: "Scenarios",
        link: "/Questionnaire/Scenario",
        faIcon: "fas fa-sitemap fa-lg",
        auth: "Questionnaire.Scenario"
      }
    ]
  },
  {
    caption: "System",
    link: "/System",
    faIcon: "fas fa-cog fa-lg",
    auth: "System",
  },
];
