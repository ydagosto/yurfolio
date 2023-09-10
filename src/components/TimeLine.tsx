import { Steps } from "antd";
import { LinkedinOutlined, LineChartOutlined } from "@ant-design/icons";
import { FaGraduationCap, FaCircle } from "react-icons/fa";
import "../styles.scss";
import { useState, useEffect } from "react";

const items = [
  {
    title: "LinkedIn - GTM Data Science",
    description: "Present - November 2021",
    icon: <LinkedinOutlined />,
  },
  {
    title: "LinkedIn - Market Research",
    description: "November 2021 - July 2019",
    icon: <LinkedinOutlined />,
  },
  {
    title: "MScience - Equity Research",
    description: "July 2019 - April 2017",
    icon: <LineChartOutlined />,
  },
  {
    title: "University of Oregon",
    description: "August 2012 - June 2017",
    icon: <FaGraduationCap />,
  },
];
const TimeLine = (props: any) => {
  const { timelinePointer, screenWidth } = props;

  const timelineType = screenWidth < 768 ? "inline" : "default";
  const timelineDirection = screenWidth < 768 ? "horizontal" : "vertical";
  const topSpace = screenWidth < 768 ? 110 : 130;

  const onChange = (value: number) => {
    const sectionElements = document.getElementsByClassName("resume-section");

    if (sectionElements.length > 0) {
      const sectionElement = sectionElements[value];

      if (sectionElement) {
        const yOffset =
          sectionElement.getBoundingClientRect().top + window.scrollY;
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
