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
        alignItems: "center",
      }}
    >
      <TimeLine />
      <div>
        <h1>Experience</h1>
        <ExperienceItem />
      </div>
    </div>
  </div>
);
export default Resume;
