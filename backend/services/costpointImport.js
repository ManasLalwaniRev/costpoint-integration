
// require("dotenv").config();
const axios = require("axios");
const { create } = require("xmlbuilder2");
const xml2js = require("xml2js");

const COSTPOINT_URL =
  "https://REVOLVEFINTECH-cpd.deltekenterprise.com/cpweb/cprestfulws/cpwwsgenericimport.cps?system=REVOLVEFINTECHDEV&company=1";

  const COSTPOINT_EXPORT_URL =
"https://REVOLVEFINTECH-cpd.deltekenterprise.com/cpweb/cprestfulws/cpwwsgenericexport.cps?system=REVOLVEFINTECHDEV&company=1";

const COSTPOINT_MANAGE_EML_INFO_URL = "https://REVOLVEFINTECH-cpd.deltekenterprise.com/cpweb/cprestfulws/cpwwsgenericexport.cps?system=REVOLVEFINTECHDEV&company=1";

/**
 * Safely return value or default
 */
function safe(value, defaultValue = "") {
  if (value === undefined || value === null || value === "") {
    return defaultValue;
  }
  return value;
}

/**
 * Import Employee into Costpoint via Generic Import
 */
async function importEmployee(data) {
  try {
    // 🔹 Build XML safely using xmlbuilder2
    const xmlDoc = create({ version: "1.0", encoding: "UTF-8" })
      .ele("expsalinfo", {
        xmlns: "http://www.deltek.com/enterprise/integration/expsalinfo",
        "xmlns:xsi": "http://0www.w3.org/2001/XMLSchema-instance",
      })
      .ele("LDM_EMPLLABINFO_CHILD")
      // .ele("ANNL_AMT").txt(safe(data.annl_amt, 0)).up()
      // .ele("CA_REMOTE_WORKER").txt(safe(data.ca_remote_worker, "NOT REMOTE")).up()
      // .ele("CORP_OFCR_FL").txt(safe(data.corp_ofcr_fl, "N")).up()
      // .ele("CRNCY_NAME").txt(safe(data.crncy_name, "U. S. Dollar")).up()
      // .ele("EFFECT_DT").txt(safe(data.effect_dt)).up()
      // .ele("EMPL_CLASS_CD").txt(safe(data.empl_class_cd)).up()
      // .ele("EMPL_ID").txt(safe(data.empl_id)).up()
      // .ele("END_DT").txt(safe(data.end_dt)).up()
      // .ele("EXMPT_FL").txt(safe(data.exmpt_fl, "N")).up()
      // .ele("GENL_LAB_CAT_CD").txt(safe(data.genl_lab_cat_cd)).up()
      // .ele("HRLY_AMT").txt(safe(data.hrly_amt, 0)).up()
      // .ele("LAST_FIRST_NAME").txt(safe(data.last_first_name)).up()
      // .ele("ORG_ID").txt(safe(data.org_id)).up()
      // .ele("SAL_AMT").txt(safe(data.sal_amt, 0)).up()
      // .ele("S_EMPL_STATUS_CD").txt(safe(data.s_empl_status_cd, "ACT")).up()
      // .ele("S_EMPL_TYPE_CD").txt(safe(data.s_empl_type_cd, "R")).up()
      // .ele("S_HRLY_SAL_CD").txt(safe(data.s_hrly_sal_cd, "H")).up()
      // .ele("TRN_CRNCY_CD").txt(safe(data.trn_crncy_cd, "USD")).up()
      // .ele("WORK_STATE_CD").txt(safe(data.work_state_cd)).up()
      // .ele("WORK_YR_HRS_NO").txt(safe(data.work_yr_hrs_no, 2080)).up()
      // .up()
      
// Working values for Testing 

      // .ele("EMPL_ID").txt("10001").up()
      // .ele("EFFECT_DT").txt("2026-04-04").up()
      // .ele("GENL_LAB_CAT_CD").txt("ZZZ").up()
      // .ele("ORG_ID").txt("1.01.02").up()
      // .ele("SEC_ORG_ID").txt("1.01.02").up()
      // .ele("WORK_STATE_CD").txt("IA").up()
      // .ele("ANNL_AMT").txt("60000").up()
      // .ele("S_EMPL_TYPE_CD").txt("R").up()
      // .ele("S_HRLY_SAL_CD").txt("H").up()

// Working values for Testing


// ALL FIELDS

        // .ele("AA_COMMENTS").txt("").up()
        // .ele("AFF_PLAN_CD").txt("").up()
        // .ele("ANNL_AMT").txt("").up()
        // .ele("BILL_LAB_CAT_CD").txt("").up()
        // .ele("CA_REMOTE_WORKER").txt("").up()
        // .ele("COMMENTS").txt("").up()
        // .ele("COMP_PLAN_CD").txt("").up()
        // .ele("CORP_OFCR_FL").txt("").up()
        // .ele("CRNCY_NAME").txt("").up()
        // .ele("DETL_JOB_CD").txt("").up()
        // .ele("DFLT_RT_GRP_ID").txt("").up()
        // .ele("EEO_CD").txt("").up()
        // .ele("EFFECT_DT").txt("").up()
        // .ele("EMPL_CLASS_CD").txt("").up()
        // .ele("EMPL_ID").txt("").up()
        // .ele("END_DT").txt("").up()
        // .ele("EXMPT_FL").txt("").up()
        // .ele("GENL_LAB_CAT_CD").txt("").up()
        // .ele("HIRE_DT_FL").txt("").up()
        // .ele("HRLY_AMT").txt("").up()
        // .ele("HR_ORG_ID").txt("").up()
        // .ele("JOB_GROUP_CD").txt("").up()
        // .ele("LAB_GRP_TYPE").txt("").up()
        // .ele("LAB_LOC_CD").txt("").up()
        // .ele("LAST_FIRST_NAME").txt("").up()
        // .ele("MERIT_PCT_RT").txt("").up()
        // .ele("MGR_EMPL_ID").txt("").up()
        // .ele("MGR_LAST_FIRST_NAME").txt("").up()
        // .ele("ORG_ID").txt("").up()
        // .ele("OVERALL_RT").txt("").up()
        // .ele("PCT_INCR_RT").txt("").up()
        // .ele("PERS_ACT_RSN_CD").txt("").up()
        // .ele("PERS_ACT_RSN_CD_2").txt("").up()
        // .ele("PERS_ACT_RSN_CD_3").txt("").up()
        // .ele("PROMO_PCT_RT").txt("").up()
        // .ele("REASON_DESC").txt("").up()
        // .ele("REASON_DESC_2").txt("").up()
        // .ele("REASON_DESC_3").txt("").up()
        // .ele("REF1_ID").txt("").up()
        // .ele("REF2_ID").txt("").up()
        // .ele("REQ_NO").txt("").up()
        // .ele("REVIEW_FORM_ID").txt("").up()
        // .ele("RT_GRP_DESC").txt("").up()
        // .ele("SAL_AMT").txt("").up()
        // .ele("SAL_GRADE_CD").txt("").up()
        // .ele("SEASON_EMPL_FL").txt("").up()
        // .ele("SEC_ORG_ID").txt("").up()
        // .ele("SPVSR_EMPL_ID").txt("").up()
        // .ele("SPVSR_LAST_FIRST_NAME").txt("").up()
        // .ele("STD_EFFECT_AMT").txt("").up()
        // .ele("STD_EST_HRS").txt("").up()
        // .ele("S_EMPL_STATUS_CD").txt("").up()
        // .ele("S_EMPL_TYPE_CD").txt("").up()
        // .ele("S_HRLY_SAL_CD").txt("").up()
        // .ele("S_STEP_NO").txt("").up()
        // .ele("TC_TS_SCHED_CD").txt("").up()
        // .ele("TC_WORK_SCHED_CD").txt("").up()
        // .ele("TERM_DT_FL").txt("").up()
        // .ele("TITLE_DESC").txt("").up()
        // .ele("TRN_CRNCY_CD").txt("").up()
        // .ele("VARIABLE_HRS_FL").txt("").up()
        // .ele("WORK_STATE_CD").txt("").up()
        // .ele("WORK_YR_HRS_NO").txt("").up()
        .ele("EMPL_ID").txt(safe(data.EMPL_ID)).up()
      .ele("EFFECT_DT").txt(safe(data.EFFECT_DT)).up()
      .ele("GENL_LAB_CAT_CD").txt(safe(data.GENL_LAB_CAT_CD)).up()

      .ele("ORG_ID").txt(safe(data.ORG_ID)).up()
      .ele("SEC_ORG_ID").txt(safe(data.SEC_ORG_ID)).up()

      .ele("WORK_STATE_CD").txt(safe(data.WORK_STATE_CD)).up()
      .ele("WORK_YR_HRS_NO").txt(safe(data.WORK_YR_HRS_NO)).up()

      .ele("S_EMPL_TYPE_CD").txt(safe(data.S_EMPL_TYPE_CD)).up()
      .ele("S_HRLY_SAL_CD").txt(safe(data.S_HRLY_SAL_CD)).up()

      .ele("EXMPT_FL").txt(safe(data.EXMPT_FL)).up()
      .ele("CORP_OFCR_FL").txt(safe(data.CORP_OFCR_FL)).up()

      .ele("HIRE_DT_FL").txt(safe(data.HIRE_DT_FL)).up()
      .ele("TERM_DT_FL").txt(safe(data.TERM_DT_FL)).up()

      .ele("VARIABLE_HRS_FL").txt(safe(data.VARIABLE_HRS_FL)).up()

      .ele("ANNL_AMT").txt(safe(data.ANNL_AMT)).up()
      .ele("HRLY_AMT").txt(safe(data.HRLY_AMT)).up()
      .ele("SAL_AMT").txt(safe(data.SAL_AMT)).up()
      // .ele("Action").txt("UPDATE").up()

      .up()
      .end({ prettyPrint: false });

    console.log("Sending XML to Costpoint...");
    // console.log(xmlDoc); // Uncomment for debugging

    const response = await axios.post(COSTPOINT_URL, xmlDoc, {
      headers: {
        "Content-Type": "application/xml",
      },
      auth: {
        username: process.env.CP_USERNAME,
        password: process.env.CP_PASSWORD,
      },
      timeout: 20000,
    });

    console.log("Raw Costpoint Response:", response.data);

    // 

    // 🔹 Parse XML response
    const parsedResponse = await xml2js.parseStringPromise(response.data);

    return parsedResponse;

  } catch (error) {
    console.error("Costpoint Import Error:");

    if (error.response) {
      console.error("Status:", error.response.status);
      console.error("Response:", error.response.data);
    } else {
      console.error(error.message);
    }

    throw new Error("Costpoint Import Failed");
  }
}

// module.exports = { importEmployee };

 async function exportEmployee() {
  try {

    const EXPORT_URL =
      "https://REVOLVEFINTECH-cpd.deltekenterprise.com/cpweb/cprestfulws/cpwwsgenericexport.cps?system=REVOLVEFINTECHDEV&company=1";

    const xmlRequest = `<?xml version='1.0' encoding='UTF-8'?>
<filter id='empl_slsry_exp_2' xmlns='http://www.deltek.com/enterprise/integration/query/empl_slsry_exp_2'>
</filter>`;

    const response = await axios.post(EXPORT_URL, xmlRequest, {
      headers: {
        "Content-Type": "application/xml"
      },
      auth: {
        username: process.env.CP_USERNAME,
        password: process.env.CP_PASSWORD
      },
      timeout: 20000
    });

    console.log("Raw Export Response:", response.data);

    const parsedResponse = await xml2js.parseStringPromise(response.data, {
      explicitArray: false
    });

    return parsedResponse;

  } catch (error) {

    console.error("Costpoint Export Error");

    if (error.response) {
      console.error(error.response.data);
    } else {
      console.error(error.message);
    }

    throw new Error("Costpoint Export Failed");
  }
}       

    async function fetchEmployeeManagementInfo() {
  try {
    // This XML filter might need to be adjusted based on the specific 
    // Data Integration ID set up in your Deltek environment
    const xmlRequest = `<?xml version='1.0' encoding='UTF-8'?>
          <filter id='empl_info' xmlns='http://www.deltek.com/enterprise/integration/query/empl_info'>
                  <LDMEINFO_EMPL/>
          </filter>`;

    const response = await axios.post(COSTPOINT_MANAGE_EML_INFO_URL, xmlRequest, {
      headers: {
        "Content-Type": "application/xml"
      },
      auth: {
        username: process.env.CP_USERNAME,
        password: process.env.CP_PASSWORD
      },
      timeout: 20000
    });

    return await xml2js.parseStringPromise(response.data, { explicitArray: false });
  } catch (error) {
    console.error("Fetch Employee Info Error:", error.message);
    throw new Error("Failed to fetch Employee Management Info");
  }
}

module.exports = { importEmployee, exportEmployee, fetchEmployeeManagementInfo };