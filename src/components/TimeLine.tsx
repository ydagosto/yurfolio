import { Card, Steps } from "antd";
import { LinkedinOutlined, LineChartOutlined } from "@ant-design/icons";
import { FaGraduationCap, FaCircle } from "react-icons/fa";
import "../styles.scss";

const items = [
  {
    title: "Present",
    icon: <FaCircle />,
  },
  {
    title: "LinkedIn",
    subTitle: "GTM Data Science",
    description: "November 2021",
    icon: <LinkedinOutlined />,
  },
  {
    title: "LinkedIn",
    subTitle: "Market Research",
    description: "July 2019",
    icon: <LinkedinOutlined />,
  },
  {
    title: "MScience",
    subTitle: "Equity Research",
    description: "April 2017",
    icon: <LineChartOutlined />,
  },
  {
    title: "University of Oregon",
    icon: <FaGraduationCap />,
  },
];
const TimeLine = (props: any) => {
  const { timelinePointer } = props;
  console.log(timelinePointer);
  return (
    <div className="timeline-container">
      <Steps
        className="steps"
        current={timelinePointer}
        labelPlacement="horizontal"
        items={items}
        direction="vertical"
      />
    </div>
  );
};

export default TimeLine;
