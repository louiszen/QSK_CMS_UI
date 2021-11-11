import _ from 'lodash';

/**
 * @type {<Object.<string, String>}
 */
 export const _domain = {
  dev: "<dev domain>",
  test: "http://localhost:7777",
  uat: "http://localhost:7777",
};

/**
 * @readonly
 */
export const DOMAIN = process.env.NODE_ENV === "production" ? 
  (_.isEmpty(process.env.REACT_APP_DOMAIN) ? 
  _domain[process.env.REACT_APP_STAGE] 
  : process.env.REACT_APP_DOMAIN) : _domain.test;