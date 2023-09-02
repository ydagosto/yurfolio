import { Typography } from "antd";
import TimeLine from "../components/TimeLine";
import ExperienceItem from "../components/ExperienceItem";
import { useEffect, useState } from "react";
import "../styles.scss";
import EducationItem from "../components/EducationItem";

const { Title } = Typography;

const experienceData: any = {
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
      "Improved company-wide bookings and revenue source of truth data freshness by more than 50% (from 13 hours to 6 hours). Thus enabling faster and more accurate decision-making for the business by successfully leading a complex migration (owning planning, design, prototyping, dev, comms with 5+ teams) of data transformation pipelines for SaaS booking data from on-prem HDFS systems to Azure utilizing ADLS, Databricks, Data Factory, and Great Expectations.",
      "Pioneered the use of Azure infrastructure for data transformations at LinkedIn. Worked closely with the platform team to address the gaps in the stack and create a highly performant and scalable data transformation platform to achieve freshness needs of 50% improvement.",
      "Brought transparency and accountability to the relationship between data consumers and producers by creating a framework that views Data teams at LinkedIn as effective service providers with obligations towards internal consumers. The framework standardizes the use of uptime as a measure to establish data reliability Service Level Agreements (SLA) by quantifying and documenting in standard format (JSON) consumer expectations around Freshness, Data Quality, and Availability.",
      "Led the implementation of a scalable system to observe uptime for datasets against their reliability SLAs hourly. The system included easy contract onboarding in JSON format, dashboards to view real-time uptime and historical performance, alerting system to send emails or Slack messages to on-call channels in case of service-level breaches.",
      "Built an internal application (DataMeter) to gather and display all health (availability, quality, open Jira issues) and usage (daily queries, and users) information relative to datasets at LinkedIn. The project involved building an hourly Spark job to retrieve the data, mid-tier API endpoints to serve data, and building a React front-end layer to display the data. This tool has become the one-stop shop for data health monitoring for our greater team, helping on-call identify issues sooner and promoting trust in our datasets with our consumers.",
      "Led the socialization and adoption of DataMeter across the company, scaling from hundreds of datasets tracked in tens of thousands within a couple of months.",
      "image-source:https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExOTFhY3h3aXNtM3J5aDZxNW14NXdtd2w5eWRxdWcxdGYzbmt3cDhiaiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/aDAENghU4ww4iKW2rV/giphy.gif",
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
      "Significantly improved data readiness for NPS reports for the Flagship and Recruiter products from quarterly to monthly and then weekly by using Azkaban scheduler to orchestrate  Presto/Hive (SQL), and Spark (Scala) jobs and allowing our product managers and analysts to get closer to real-time feedback from users",
      "Developed Apache Gobblin data integration applications to extract and ingest survey data from external APIs (Qualtrics, Decipher) to internal HDFS storage making it available company-wide for market analysis",
      "Improved survey fielding efficiency (from 10 surveys/associate to 30+ surveys/associate) by developing an internal web application using Flask and Ember.js to assist with manual steps. These include generating audience tables for survey targeting and monitoring fielding stats as batches of emails are sent",
      "image-source:https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzV0d2ZjczB4MmR6YmdwOGlvd252YXhiYm5zOTJwazc0ZXFvbmR6dSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/asUGoLQFIHxtK4W0I6/giphy.gif",
      "Led an effort to standardize data operations across programs by redesigning specialized code to use modular and reusable components, reducing the amount of code to maintain and increasing its longevity",
      "Pioneered team’s adoption of new technologies (Spark) to fully automate the survey reporting workflow including multivariate weighting to ensure the survey sample accurately represents the demographic profile of the LinkedIn population, statistical significance for change in survey scores across periods and groups, waterfall analysis to show the drivers of change in NPS (Net Promoter Score) over time",
      "Built and maintained interactive Tableau dashboards for analysts to explore survey datasets (including Flagship NPS and CSAT for Recruiter products) on a self-serve basis and drive product decision making",
      "Roadmapped initiatives with realistic short and long-term targets to ensure programs’ growth and success",
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
      "Led initiative to modernize data pipeline by migrating from PostgreSQL to Apache Spark and python",
      "Streamlined and optimized the method to query and aggregate data, allowing it to process multiple parameters simultaneously and achieve substantial efficiency gains (from 9 hours per run to 1 hour)",
      "Used PySpark to query and analyze credit card data for roughly 4 million users and develop statistical models forecasting companies’ quarterly operational metrics consistently below a 2% standard error rate",
      "Utilized Python for customer behavioral analytics and segmentation techniques to discover actionable insights and evaluate the underlying economics of a business. This includes categorizing observations to understand revenue drivers on a product level and behavioral analysis to study customer engagement",
      "Used Power Pivot to query CSV files and pivot tables to present results effectively in Excel dashboards",
      "Wrote and published extensive and actionable quarterly company performance updates on e-commerce stocks to explain their short and long term financial outlook, using bias-free language and visuals",
      "Explored, evaluated, and onboarded new datasets that were previously deemed irrelevant, such as web traffic data, and developed new methods to combine datasets such as credit card, email receipt, and web-scraping data to increase granularity or track companies’ key performance indicators",
      "Used Bokeh and Databricks visualization tools to create interactive dashboards for data quality assurance",
      "Onboarded and helped manage a team of 4 to support an analyst in regular maintenance of datasets and road mapping development of new products",
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
          <TimeLine
            timelinePointer={timelinePointer}
            screenWidth={screenWidth}
          />
        </div>
        <div className="main-body">
          <Title className="resume-header">Experience</Title>
          {resumeKeys.map((key: string) => (
            <ExperienceItem positionKey={key} data={experienceData[key]} />
          ))}
          <Title className="resume-header">Education</Title>
          <EducationItem screenWidth={screenWidth} />
        </div>
      </div>
    </div>
  );
};
export default Resume;
