import { Typography } from "antd";
import TimeLine from "../components/TimeLine";
import ExperienceItem from "../components/ExperienceItem";
import { useCallback, useEffect, useState } from "react";
import "../styles.scss";
import EducationItem from "../components/EducationItem";
import TagLine from "../components/TagLine";

const { Title, Paragraph } = Typography;

const experienceData: any = {
  "Data Platform": {
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
      "Led the design and delivery of multiple platform-level backend systems for Metric Store, a centralized analytics, data quality, and observability platform used across the company. Owned architecture, security reviews, reliability guarantees, and extensibility.",
      "Built a reusable framework that converts declarative SQL definitions into production-grade monitoring and alerting services, enabling automated detection of data quality and freshness issues at scale and reducing manual operational overhead.",
      "Designed and validated the architecture for AI-powered internal support tooling, including secure Slack integrations and real-time service communication patterns, establishing a foundation for future agent-driven workflows.",
      "Created developer tooling and test infrastructure that runs full data flows locally and in CI without relying on production data, reducing iteration cycles from hours to minutes and significantly improving developer velocity and confidence.",
      "Audited and remediated unsafe data access patterns across hundreds of datasets, contributing to row-level security (RLS) design and enforcement for sensitive Salesforce-derived data.",
      "Partnered closely with infra, security, and product teams to align platform capabilities with real-world usage, ensuring solutions scaled cleanly beyond initial adopters.",
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
      "Improved source-of-truth bookings and revenue data freshness by over 50% (13 hours to 6 hours), enabling faster and more reliable GTM decision-making.",
      "Led the end-to-end migration of critical SaaS booking pipelines from on-prem HDFS to Azure (ADLS, Databricks, Data Factory, Great Expectations), owning planning, system design, prototyping, implementation, and cross-team execution across 5+ partner teams.",
      "Pioneered Azure-based transformations at LinkedIn by partnering with platform teams to close stack gaps and build a scalable, high-performance processing foundation.",
      "Designed a data reliability SLA framework that formalized consumer expectations around freshness, quality, and availability using standardized JSON contracts.",
      "Implemented a real-time SLA observability system with hourly evaluations, dashboards for historical and live performance, and automated Slack/email alerting for service-level breaches.",
      "Built DataMeter, an internal platform that unified dataset health (availability, quality checks, open issues) and usage metrics (query volume, active users) via hourly Spark pipelines, backend APIs, and a React frontend.",
      "Drove DataMeter adoption company-wide, scaling coverage from hundreds of datasets to tens of thousands within months and materially improving on-call effectiveness and trust in data products.",
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
      "Improved NPS data readiness for Flagship and Recruiter products from quarterly to weekly by orchestrating Presto/Hive SQL and Spark Scala jobs with Azkaban.",
      "Built Apache Gobblin integrations to ingest survey data from external APIs (Qualtrics, Decipher) into internal storage, enabling company-wide access to market research data.",
      "Increased survey fielding efficiency from approximately 10 to 30+ surveys per associate by developing internal workflow tools using Flask and Ember.js to automate audience targeting and fielding operations.",
      "Standardized data operations across programs by refactoring specialized code into modular, reusable components, reducing maintenance overhead and improving long-term scalability.",
      "Led adoption of Spark-based pipelines to fully automate survey reporting workflows, including multivariate weighting, statistical significance testing, and NPS driver analysis.",
      "Built and maintained self-serve Tableau dashboards for Flagship NPS and Recruiter CSAT, enabling faster analyst iteration and product decision-making.",
      "Defined and roadmapped short- and long-term initiatives to support predictable delivery and program growth.",
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
      "Modernized core data pipelines by migrating workflows from PostgreSQL to Apache Spark and Python, significantly improving scalability.",
      "Reduced end-to-end processing time from 9 hours to 1 hour by redesigning query and aggregation logic to support multi-parameter computation.",
      "Analyzed credit card transaction data for approximately 4 million users using PySpark and built forecasting models for quarterly company metrics with under 2% standard error.",
      "Applied Python-based customer segmentation and behavioral analysis to identify revenue drivers and evaluate business unit economics.",
      "Authored quarterly research reports on e-commerce companies, translating complex datasets into clear long- and short-term outlooks for stakeholders.",
      "Expanded analytical coverage by onboarding non-traditional data sources (web traffic, email receipts, web scraping) and combining them with transactional data.",
      "Built interactive dashboards with Bokeh and Databricks tools for data quality validation and issue triage.",
      "Onboarded and helped manage a team of 4 supporting dataset maintenance and development of new research products.",
    ],
    images: [],
  },
};

const Resume = () => {
  const [timelinePointer, setTimelinePointer] = useState(0);

  const handleScroll = useCallback(() => {
    const infoArray = Array.from(
      document.querySelectorAll(".resume-section")
    ).map((h1) => h1.textContent);

    let maxCurrentVisible: any;
    const htmlElements = document.querySelectorAll(".resume-section");
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
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

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
              Software engineer specializing in backend and platform systems for
              data-intensive products. I design and build reliable services,
              frameworks, and developer tooling that improve data correctness,
              operational efficiency, and iteration speed across large
              organizations. My background spans platform engineering, GTM data
              systems, market research automation, and large-scale analytics,
              with a strong focus on end-to-end ownership, system design, and
              long-term maintainability.
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
