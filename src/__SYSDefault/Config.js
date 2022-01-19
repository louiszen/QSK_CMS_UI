/**
 * @type {{
 *  Project: {
 *    Name: String,
 *    ID: String,
 *    StartDate: String,
 *    FirstPage: String
 *  },
 *  Settings: {
 *    hasContainer: Boolean,
 *    serverCheck: Boolean,
 *    loginSys: Boolean
 *  }
 * }}
 */
export const SysConfig = {
  Project: {
    Name: "Quick Starter Kit (UI)",
    ID: "QSK",
    StartDate: process.env.REACT_APP_STARTDATE || "2021-02",
    FirstPage: "/Dashboard"
  },
  Settings: {
    hasContainer: true,
    serverCheck: true,
    loginSys: true
  }
};

