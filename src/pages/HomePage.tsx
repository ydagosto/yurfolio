import SkeuomorphButton from "../components/SkeuomorphButton";
import "../styles.scss";

const HomePage = () => {
  return (
    <div className="home-body">
      <div className="home-page">
        <p className="header">I AM YURI</p>
        <div style={{ position: "absolute", bottom: 40, right: 0 }}>
          <SkeuomorphButton label={"Projects"} dir={"/"} />
          <SkeuomorphButton label={"Resume"} dir={"/resume"} />
          <SkeuomorphButton label={"About Me"} dir={"/"} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
