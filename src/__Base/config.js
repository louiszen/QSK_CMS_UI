import { Dashboard } from '@material-ui/icons';
import _ from 'lodash';

export const Project = "QSK";
export const hasContainer = true;
export const serverCheck = true;
export const loginSys = true;

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
    caption: "System",
    link: "/System",
    faIcon: "fas fa-cog fa-lg",
    auth: "System",
  },
];
