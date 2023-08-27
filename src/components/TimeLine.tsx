import { Card, Steps } from "antd";
import { LinkedinOutlined, LineChartOutlined } from "@ant-design/icons";
import { FaGraduationCap, FaCircle } from "react-icons/fa";
import "../styles.scss";
import { useState, useEffect } from "react";

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

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const timelineType = screenWidth < 768 ? "inline" : "default";
  const timelineDirection = screenWidth < 768 ? "horizontal" : "vertical";

  return (
    <div className="timeline-container">
      <Steps
        className="steps"
        current={timelinePointer}
        labelPlacement="horizontal"
        items={items}
        direction={timelineDirection}
        type={timelineType}
      />
    </div>
  );
};

export default TimeLine;
