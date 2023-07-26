import { Card, Row, Steps } from "antd";
import TimeLine from "../components/TimeLine";
import ExperienceItem from "../components/ExperienceItem";

const Resume = () => (
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
        <TimeLine />
      </div>
      <div
        style={{
          width: "900px",
          overflowY: "auto",
          position: "relative",
        }}
      >
        <ExperienceItem />
      </div>
    </div>
  </div>
);
export default Resume;
