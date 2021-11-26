import axios from "axios";

const { STORE } = require("IZOArc/STATIC");
const { DOMAIN } = require("__SYSDefault/Domain");

class PermitAPI {

  static ListTypes = async () => {
    let reqPath = "/Tables/Permits/List"
    let url = DOMAIN + reqPath;
    let payloadOut = {
      JWT: STORE.user.JWT,
      data: {}
    };
    try {
      let res = await axios.post(url, payloadOut);
      console.log(reqPath, res.data);
    
      let { Success, payload } = res.data;
    
      if (Success === true) {
        return payload;
      } else {
        return null;
      }
    } catch (e) {
      return null;
    }
  }

  static GetDoc = async (permitRefID) => {
    let reqPath = "/Tables/Permits/Get";
    let url = DOMAIN + reqPath;
    let payloadOut = {
      JWT: STORE.user.JWT,
      data: {
        docID: permitRefID
      }
    };
    try {
    
      STORE.isLoading(true);
      let res = await axios.post(url, payloadOut);
      STORE.isLoading(false);

      console.log(reqPath, res.data);
    
      let { Success, payload } = res.data;
    
      if (Success === true) {
        return payload;
      } else {
        return null;
      }
    } catch (e) {
      STORE.isLoading(false);
      return null;
    }
  }

}

export default PermitAPI;