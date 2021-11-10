import { ColorX, LocaleX } from "IZOArc/STATIC";
import { Typography } from "@material-ui/core";
import { Dashboard, ReplyAll } from "@material-ui/icons";
import _ from "lodash";
import { AppSettingsAlt } from "@mui/icons-material";
import EN from "Locale/EN";
import TC from "Locale/TC";

export const IZOTheme = {
  homeBG: "aliceblue",
  menuBG: "black",
  menuFG: "greyOut",
  btnHover: "grey",
};

export const Project = (
  <Typography style={{ 
    fontFamily: "Palanquin", 
    color: ColorX.GetColorCSS(IZOTheme.menuFG) 
    }}>
    {"Quick Starter Kit"}
  </Typography>);
export const hasContainer = true;
export const serverCheck = true;
export const loginSys = true;

export const Locale = [
  {
    code: "EN",
    caption: "English",
    lib: EN
  },
  {
    code: "TC",
    caption: "繁體中文",
    lib: TC
  }
]

export const IZODis = {
  src: "/Images/izo.png",
  style: {
    width: 150,
    marginTop: 0,
    opacity: 0.15
  }
}

export const GateDis = {
  src: "/Images/QSK.png",
  style: {
    height: "90%",
    marginTop: "10%"
  }
};

export const NavbarDis = {
  src: "/Images/navbar.png",
  style: {
    width: 95,
    marginX: 3,
    right: 160,
    top: 0,
    opacity: 0.2,
  },
};

export const StartDate = process.env.REACT_APP_STARTDATE || "2021-02";

export const _domain = {
  dev: "<dev domain>",
  test: "http://localhost:7777",
  uat: "http://localhost:7777",
};

export const DOMAIN = process.env.NODE_ENV === "production" ? 
  (_.isEmpty(process.env.REACT_APP_DOMAIN) ? 
  _domain[process.env.REACT_APP_STAGE] 
  : process.env.REACT_APP_DOMAIN) : _domain.test;

export const MenuConfig = [
  {
    caption: "DashBoard",
    link: "/Dashboard",
    faIcon: <Dashboard />,
    auth: "Dashboard",
    disabled: true,
  },
  {
    caption: "Icons",
    link: "/IconDocs",
    faIcon: <i className="fas fa-icons fa-lg" />,
    auth: "IconDocs",
  },
  {
    caption: "App Settings",
    link: "/Landing",
    faIcon: <AppSettingsAlt />,
    auth: "Landing",
  },
  {
    caption: "Severity",
    link: "/Severity",
    faIcon: "fas fa-map-marked-alt fa-lg",
    auth: "Severity",
  },
  {
    caption: "Answer",
    link: "/Answer",
    faIcon: <ReplyAll />,
    auth: "Answer",
    disabled: true,
    submenu: [
      {
        caption: "Arrival",
        link: "/Answer/ArrivalAns",
        faIcon: "fas fa-plane-arrival fa-lg",
        auth: "Answer.ArrivalAns",
        disabled: true,
        submenu: [
          {
            caption: "Miscellaneous",
            link: "/Answer/ArrivalAns/Miscellaneous",
            faIcon: "fas fa-cubes fa-lg",
            auth: "Answer.ArrivalAns.Miscellaneous",
          },
          {
            caption: "Components",
            link: "/Answer/ArrivalAns/Components",
            faIcon: "fas fa-shapes fa-lg",
            auth: "Answer.ArrivalAns.Components",
          },
          {
            caption: "Template",
            link: "/Answer/ArrivalAns/Template",
            faIcon: "far fa-file-alt fa-lg",
            auth: "Answer.ArrivalAns.Template",
          },
        ],
      },
      {
        caption: "Departure",
        link: "/Answer/DepartAns",
        faIcon: "fas fa-plane-departure fa-lg",
        auth: "Answer.DepartAns",
        disabled: true,
        submenu: [
          {
            caption: "Miscellaneous",
            link: "/Answer/DepartAns/Miscellaneous",
            faIcon: "fas fa-cubes fa-lg",
            auth: "Answer.DepartAns.Miscellaneous",
          },
          {
            caption: "Components",
            link: "/Answer/DepartAns/Components",
            faIcon: "fas fa-shapes fa-lg",
            auth: "Answer.DepartAns.Components",
          },
          {
            caption: "Template",
            link: "/Answer/DepartAns/Template",
            faIcon: "far fa-file-alt fa-lg",
            auth: "Answer.DepartAns.Template",
          },
        ],
      },
      {
        caption: "Transition",
        link: "/Answer/TransitAns",
        faIcon: "fas fa-project-diagram fa-lg",
        auth: "Answer.TransitAns",
        disabled: true,
        submenu: [
          {
            caption: "Components",
            link: "/Answer/TransitAns/Components",
            faIcon: "fas fa-shapes fa-lg",
            auth: "Answer.TransitAns.Components",
          },
          {
            caption: "Template",
            link: "/Answer/TransitAns/Template",
            faIcon: "far fa-file-alt fa-lg",
            auth: "Answer.TransitAns.Template",
          },
        ],
      },
    ],
  },
  {
    caption: "Questionnaire",
    link: "/Questionnaire",
    faIcon: "fas fa-file-alt fa-lg",
    auth: "Questionnaire",
  },
  {
    caption: () => LocaleX.Get("MenuBar.System"),
    link: "/System",
    faIcon: "fas fa-cog fa-lg",
    auth: "System",
  },
];

export const StartUp = [];
