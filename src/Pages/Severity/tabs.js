import { Public } from '@material-ui/icons';
import Grouping from './Grouping/Grouping';
import Location from './Location/Location';
import SevGroup from './SevGroup/SevGroup';

const tabs = (onDataChange, onMountedGrouping) => {
  return [
    {
      label: "Locations",
      icon: <Public/>,
      reqAuth: "Severity.Location",
      render: <Location onDataChange={onDataChange}/>,
      iconPos: "left",
      noTransform: true,
      alignment: "left"
    },
    {
      label: "Severity Groups",
      icon: <i className="fas fa-th-large fa-lg"/>,
      reqAuth: "Severity.SevGroup",
      render: <SevGroup onDataChange={onDataChange}/>,
      iconPos: "left",
      noTransform: true,
      alignment: "left"
    },
    {
      label: "Location Severity",
      icon: <i className="far fa-bookmark fa-lg"/>,
      reqAuth: "Severity.Grouping",
      render: <Grouping onMounted={onMountedGrouping}/>,
      iconPos: "left",
      noTransform: true,
      alignment: "left"
    }
  ]
};

export default tabs;