import _ from "lodash";

/**
 * @type {<Object.<string, String>}
 */
 export const _domain = {
  local: "http://localhost:7654",
  test: "http://localhost:7777",
  dev: "https://qsk-api-poc.dev.gammonconstruction.com"
};

/**
 * @readonly
 */
export const DOMAIN = process.env.NODE_ENV === "production" ? 
  (_.isEmpty(process.env.REACT_APP_DOMAIN) ? 
  _domain[process.env.REACT_APP_STAGE] 
  : process.env.REACT_APP_DOMAIN) : _domain.test;

/**
 * @type {<Object.<string, String>}
 */
 export const _sitebase = {
  local: "/",
  test: "/",
  dev: "/"
};

/**
 * @readonly
 */
export const SITEBASE = process.env.NODE_ENV === "production" ? 
(_sitebase[process.env.REACT_APP_STAGE] ? _sitebase[process.env.REACT_APP_STAGE] : "/")
  : _sitebase.test;

