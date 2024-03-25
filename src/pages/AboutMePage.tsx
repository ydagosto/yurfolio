import SkeuomorphSkill from "../components/SkeuomorphSkill";
import "../styles.scss";
import { FaReact } from "react-icons/fa";
import { TbBrandCss3, TbBrandHtml5 } from "react-icons/tb";
import { Calendar, Typography } from "antd";
import {
  SiTableau,
  SiApachehadoop,
  SiApachehive,
  SiDatabricks,
  SiTrino,
  SiMicrosoftazure,
  SiPython,
  SiScala,
  SiGithub,
  SiAzuredevops,
  SiPostgresql,
} from "react-icons/si";
import { BiLogoTypescript, BiLogoJavascript } from "react-icons/bi";
import { AiOutlineConsoleSql } from "react-icons/ai";
import { SiApachespark } from "react-icons/si";
import ContributionsCalendar from "../components/ContributionsCalendar";
const { Title } = Typography;

const AboutMePage = () => {
  const skills: any = {
    React: <FaReact />,
    HTML: <TbBrandHtml5 />,
    CSS: <TbBrandCss3 />,
    Typescript: <BiLogoTypescript />,
    Javascript: <BiLogoJavascript />,
    Tableau: <SiTableau />,
    Azure: <SiMicrosoftazure />,
    SQL: <AiOutlineConsoleSql />,
    Spark: <SiApachespark />,
    Hadoop: <SiApachehadoop />,
    Hive: <SiApachehive />,
    Trino: <SiTrino />,
    Databricks: <SiDatabricks />,
    Python: <SiPython />,
    Scala: <SiScala />,
    Github: <SiGithub />,
    AzureDevOps: <SiAzuredevops />,
    Postgres: <SiPostgresql />,
  };

  const skillNames = Object.keys(skills).sort();

  return (
    <div className="about-body">
      <div className="about-me">
        <div>
          <Title>Yuri's Toolbox</Title>
        </div>
        <div className="skills-tool-box">
          {skillNames.map((key: string) => (
            <SkeuomorphSkill label={key} logo={skills[key]} />
          ))}
        </div>
        <br></br>
        <div>
          <Title>Guitar Practice</Title>
        </div>
        <div>
          <ContributionsCalendar />
        </div>
      </div>
    </div>
  );
};

export default AboutMePage;
