import { Steps } from "antd";
import { LinkedinOutlined, LineChartOutlined } from "@ant-design/icons";
import { FaGraduationCap, FaCircle } from "react-icons/fa";
import "../styles.scss";
import { useState, useEffect } from "react";

const items = [
  {
    title: "LinkedIn - GTM Data Science",
    description: "November 2021",
    icon: <LinkedinOutlined />,
  },
  {
    title: "LinkedIn - Market Research",
    description: "July 2019",
    icon: <LinkedinOutlined />,
  },
  {
    title: "MScience - Equity Research",
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
  const topSpace = screenWidth < 768 ? 110 : 20;

  const onChange = (value: number) => {
    if (value === 0) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const sectionElements = document.getElementsByClassName("company-position");

    if (sectionElements.length > 0) {
      const sectionElement = sectionElements[value];

      if (sectionElement) {
        const yOffset =
          sectionElement.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({ top: yOffset - topSpace, behavior: "smooth" });
      }
    }
  };

  return (
    <div className="timeline-container">
      <Steps
        className="steps"
        current={timelinePointer}
        labelPlacement="horizontal"
        items={items}
        direction={timelineDirection}
        type={timelineType}
        onChange={onChange}
      />
    </div>
  );
};

export default TimeLine;
