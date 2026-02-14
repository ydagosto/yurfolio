import { Typography } from "antd";
import TimeLine from "../components/TimeLine";
import ExperienceItem from "../components/ExperienceItem";
import { useEffect, useState } from "react";
import "../styles.scss";
import EducationItem from "../components/EducationItem";
import TagLine from "../components/TagLine";

const { Title, Paragraph } = Typography;

const experienceData: any = {
  "Metric Store Platform": {
    positions: [
      {
        title: "Software Engineer",
        startDate: "January 2025",
        endDate: "Present",
      },
    ],
    company: "Databricks",
    location: "San Francisco, CA",
    startDate: "January 2025",
    endDate: "Present",
    bullets: [
      "Led the design and delivery of multiple platform-level backend systems for Metric Store, a centralized analytics and data quality platform, owning end-to-end architecture, security, reliability, and long-term extensibility.",
      "Built a reusable framework that transforms SQL-based definitions into automated, production-grade monitoring and alerting services, reducing manual operational work and improving reliability at scale.",
      "Designed the architecture for an AI-powered internal support system integrated with Slack, validating secure real-time service communication patterns and establishing foundations for future AI tooling.",
      "Developed developer tooling and test infrastructure that reduced iteration cycles from hours to minutes, removed reliance on production data, and significantly improved developer velocity and confidence.",
    ],
  },
  "GTM Data Science": {
    positions: [
      {
        title: "Senior Data Engineer",
        startDate: "March 2023",
        endDate: "Present",
      },
      {
        title: "Data Engineer",
        startDate: "November 2021",
        endDate: "March 2023",
      },
    ],
    company: "LinkedIn",
    location: "San Francisco, CA",
    startDate: "November 2021",
    endDate: "Present",
    bullets: [
      "Improved source-of-truth bookings and revenue data freshness by over 50% (13 hours to 6 hours), enabling faster and more accurate GTM decisions.",
      "Led end-to-end migration of SaaS booking pipelines from on-prem HDFS to Azure (ADLS, Databricks, Data Factory, Great Expectations), coordinating planning, design, prototyping, implementation, and cross-team execution with 5+ partner teams.",
      "Pioneered Azure-based transformations at LinkedIn by partnering with platform teams to close stack gaps and build a scalable, high-performance processing foundation.",
      "Designed a reliability SLA framework that formalized consumer expectations for freshness, quality, and availability through standardized JSON contracts.",
      "Implemented an hourly SLA observability system with contract onboarding, real-time and historical dashboards, and automated email/Slack alerts for breach detection.",
      "Built DataMeter, an internal platform that unified dataset health (availability, quality, open Jira issues) and usage metrics (daily queries and users) through hourly Spark pipelines, API services, and a React UI.",
      "Drove DataMeter adoption across the company, scaling coverage from hundreds of datasets to tens of thousands within months.",
    ],
  },
  "Market Research": {
    positions: [
      {
        title: "Technical Program Manager",
        startDate: "March 2021",
        endDate: "November 2021",
      },
      {
        title: "Associate Technical Program Manager",
        startDate: "July 2019",
        endDate: "March 2021",
      },
    ],
    company: "LinkedIn",
    location: "San Francisco, CA",
    startDate: "July 2019",
    endDate: "November 2021",
    bullets: [
      "Improved NPS data readiness for Flagship and Recruiter from quarterly to monthly and then weekly by orchestrating Presto/Hive SQL and Spark Scala jobs with Azkaban.",
      "Developed Apache Gobblin integrations to ingest survey data from Qualtrics and Decipher APIs into HDFS, making data broadly accessible for company-wide analysis.",
      "Increased survey fielding efficiency from 10 to 30+ surveys per associate by building internal workflow tooling with Flask and Ember.js for audience-table generation and send monitoring.",
      "Standardized data operations across programs by refactoring specialized code into modular, reusable components, reducing maintenance overhead and improving long-term scalability.",
      "Led team adoption of Spark to automate survey reporting workflows including multivariate weighting, significance testing across periods and cohorts, and NPS waterfall driver analysis.",
      "Built and maintained self-serve Tableau dashboards for Flagship NPS and Recruiter CSAT, enabling faster analyst exploration and product decision-making.",
      "Defined and roadmapped short- and long-term initiatives to support sustained program growth and delivery predictability.",
    ],
  },
  "Equity Research": {
    positions: [
      {
        title: "Senior Equity Research Associate",
        startDate: "October 2018",
        endDate: "July 2019",
      },
      {
        title: "Equity Research Associate",
        startDate: "July 2017",
        endDate: "October 2018",
      },
    ],
    company: "MScience",
    location: "Portland, OR",
    startDate: "July 2017",
    endDate: "July 2019",
    bullets: [
      "Led pipeline modernization by migrating core workflows from PostgreSQL to Apache Spark and Python.",
      "Reduced end-to-end processing time from 9 hours to 1 hour by redesigning query and aggregation logic to support simultaneous multi-parameter computation.",
      "Analyzed credit card data for approximately 4 million users in PySpark and built forecasting models for quarterly company metrics with standard error consistently below 2%.",
      "Applied Python-based customer segmentation and behavioral analysis to identify revenue drivers and evaluate business unit economics.",
      "Built Excel reporting workflows using Power Pivot and pivot tables to communicate findings to stakeholders.",
      "Authored quarterly performance research on e-commerce companies, translating complex data into clear short- and long-term outlooks.",
      "Expanded data coverage by onboarding non-traditional sources such as web traffic and combining credit card, email receipt, and web-scraped datasets to improve KPI visibility.",
      "Built interactive Bokeh and Databricks dashboards for data quality validation and issue triage.",
      "Onboarded and helped manage a team of 4 supporting dataset maintenance and roadmap execution for new research products.",
    ],
    images: [],
  },
};

const Resume = () => {
  const infoArray = Array.from(
    document.querySelectorAll(".resume-section")
  ).map((h1) => h1.textContent);

  const [timelinePointer, setTimelinePointer] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const handleScroll = () => {
    let maxCurrentVisible: any;
    const htmlElements = document.querySelectorAll(".resume-section");
    console.log(htmlElements);
    const pageTurn = window.innerHeight - window.innerHeight / 3;

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

  const resumeKeys = Object.keys(experienceData);

  return (
    <div className="resume-container">
      <div className="resume">
        <div className="sidebar">
          <TagLine />
          <TimeLine
            timelinePointer={timelinePointer}
            screenWidth={screenWidth}
          />
        </div>
        <div className="main-body">
          <div>
            <Title level={2} className="resume-header">
              About Me
            </Title>
            <Paragraph className="about-me-text">
              Software engineer focused on scalable data and platform systems
              across high-growth startups and large enterprise environments.
              I design reliable backend services, data pipelines, and analytics
              products that improve decision speed, operational efficiency, and
              data trust. My background spans platform engineering, GTM data
              engineering, market research automation, and equity research
              analytics.
            </Paragraph>
          </div>
          <div>
            <Title level={2} className="resume-header">
              Experience
            </Title>
            {resumeKeys.map((key: string) => (
              <ExperienceItem positionKey={key} data={experienceData[key]} />
            ))}
          </div>
          <div>
            <Title level={2} className="resume-header">
              Education
            </Title>
            <EducationItem screenWidth={screenWidth} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Resume;
