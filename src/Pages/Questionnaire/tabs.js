import { ContactSupport } from "@material-ui/icons";
import QFlow from "./QFlow/QFlow";
import QOrder from "./QOrder/QOrder";
import Question from "./Question/Question";

const tabs = [
  {
    label: "Questions",
    icon: <ContactSupport/>,
    reqAuth: "Questionnaire.Question",
    render: <Question/>,
    iconPos: "left",
    noTransform: true,
    alignment: "left"
  },
  {
    label: "Question Order",
    icon: <i className="fas fa-sort-amount-down-alt"/>,
    reqAuth: "Questionnaire.QOrder",
    render: <QOrder/>,
    iconPos: "left",
    noTransform: true,
    alignment: "left"
  },
  {
    label: "Question Flow",
    icon: <i className="fas fa-sitemap fa-lg"/>,
    reqAuth: "Questionnaire.QFlow",
    render: <QFlow/>,
    iconPos: "left",
    noTransform: true,
    alignment: "left"
  },
]

export default tabs;