import SkeuomorphButton from "../components/SkeuomorphButton";
import { Canvas } from "@react-three/fiber";
import Blob from "../components/Blob";
import "../styles.scss";

const HomePage = () => {
  return (
    <div className="home-body">
      <div className="home-page">
        <p className="header">I AM YURI</p>
        <div className="blob-canvas">
          <Canvas>
            <ambientLight />
            <pointLight
              color="white"
              intensity={5000}
              position={[10, 10, 10]}
            />
            <Blob />
          </Canvas>
        </div>
        <div className="nav-container">
          <SkeuomorphButton label={"Projects"} dir={"/"} />
          <SkeuomorphButton label={"Resume"} dir={"/resume"} />
          <SkeuomorphButton label={"About Me"} dir={"/aboutme"} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
