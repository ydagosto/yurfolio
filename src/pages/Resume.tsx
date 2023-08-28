import { Typography } from "antd";
import TimeLine from "../components/TimeLine";
import ExperienceItem from "../components/ExperienceItem";
import { useEffect, useState } from "react";
import "../styles.scss";

const { Title } = Typography;

const Resume = () => {
  const infoArray = Array.from(
    document.querySelectorAll(".company-position")
  ).map((h1) => h1.textContent);

  const [timelinePointer, setTimelinePointer] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const handleScroll = () => {
    let maxCurrentVisible: any;
    const htmlElements = document.querySelectorAll(".company-position");
    const pageTurn = window.innerHeight / 2;

    htmlElements.forEach((card) => {
      const rect = card.getBoundingClientRect();

      const isVisible =
        (rect.top >= 0 && rect.top <= pageTurn) ||
        (rect.bottom >= 0 && rect.bottom <= pageTurn) ||
        (rect.top <= 0 && rect.bottom >= pageTurn);

      if (isVisible) {
        maxCurrentVisible = infoArray.indexOf(card.textContent);
      }
    });
    setTimelinePointer(maxCurrentVisible);
  };

  useEffect(() => {
    if (!loaded) {
      setLoaded(true);
    } else {
      window.addEventListener("scroll", handleScroll);
    }
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [loaded]);

  return (
    <div className="resume-container">
      <div className="resume">
        <div className="sidebar">
          <TimeLine timelinePointer={timelinePointer} />
        </div>
        <div className="main-body">
          <Title className="resume-header">Experience</Title>
          <ExperienceItem />
          <Title className="resume-header">Education</Title>
        </div>
      </div>
    </div>
  );
};
export default Resume;
