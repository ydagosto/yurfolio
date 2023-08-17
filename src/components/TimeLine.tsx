import { Card, Steps } from "antd";
import { LinkedinOutlined, LineChartOutlined } from "@ant-design/icons";
import { FaGraduationCap, FaCircle } from "react-icons/fa";

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
    <div
      className="timeline-container"
      style={{
        display: "flex",
        width: "270px",
        alignItems: "flex-start",
      }}
    >
      <Steps
        className="steps"
        style={{ height: "100vh", width: "100%", position: "sticky" }}
        current={timelinePointer}
        labelPlacement="horizontal"
        items={items}
        direction="vertical"
      />
    </div>
  );
};

export default TimeLine;
