import { LocaleX } from "IZOArc/STATIC"

const Application = [
  {
    header: () => LocaleX.Parse({
      EN: "Basic Information for Application",
      TC: "基本申請資料"
    })
  },
  {
    label: () => LocaleX.Parse({
      EN: "Date of Application",
      TC: "申請日期"
    }),
    name: "applyDate",
    format: "date"
  },
  {
    label: () => LocaleX.Parse({
      EN: "Name of Company",
      TC: "公司名稱"
    }),
    name: "companyName",
    format: "text"
  },
  {
    label: () => LocaleX.Parse({
      EN: "Types of Equipment",
      TC: "工具類別"
    }),
    name: "eqType",
    format: "text"
  },
  {
    label: () => LocaleX.Parse({
      EN: "Works Involved",
      TC: "涉及工序"
    }),
    name: "worksInvolved",
    format: "text"
  },
  {
    label: () => LocaleX.Parse({
      EN: "Reasons to use 220V Equipment",
      TC: "使用220V工具的原因"
    }),
    name: "reasons",
    format: "textarea"
  },
  {
    label: () => LocaleX.Parse({
      EN: "Name of Applicant",
      TC: "申請人姓名"
    }),
    name: "applicantName",
    format: "text"
  },
]

const Acknowledgement = [
  
]

const Coordination = [
  
]

const Approval = [
  
]

const Installation = [
  
]

const Acceptance = [
  
]

const Cancellation = [
  
]

let F416Forms = {
  Application,
  Acknowledgement,
  Coordination,
  Approval,
  Installation,
  Acceptance,
  Cancellation
};

export default F416Forms;