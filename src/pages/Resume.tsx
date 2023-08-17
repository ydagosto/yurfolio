import { Typography } from "antd";
import TimeLine from "../components/TimeLine";
import ExperienceItem from "../components/ExperienceItem";
import { useEffect, useState } from "react";

const { Title } = Typography;

const Resume = () => {
  const infoArray = Array.from(
    document.querySelectorAll(".company-position")
  ).map((h1) => h1.textContent);

  const [timelinePointer, setTimelinePointer] = useState(1);
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
        maxCurrentVisible = 1 + infoArray.indexOf(card.textContent);
      }
    });
    setTimelinePointer(maxCurrentVisible);
    console.log(timelinePointer);
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
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "60px 0 0",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <div
          style={{
            top: 60,
            position: "sticky",
            height: "100px",
          }}
        >
          <TimeLine timelinePointer={timelinePointer} />
        </div>
        <div
          style={{
            width: "700px",
            overflowY: "auto",
            position: "relative",
          }}
        >
          <Title>Experience</Title>
          <ExperienceItem />
          <Title>Education</Title>
        </div>
      </div>
    </div>
  );
};
export default Resume;
