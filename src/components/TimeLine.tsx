import { Card, Steps } from "antd";
import { LinkedinOutlined, LineChartOutlined } from "@ant-design/icons";
import { FaGraduationCap, FaCircle } from "react-icons/fa";

const resumeData = {
  startDate: "November 2021",
  endDate: "Present",
  position: "Senior Data Engineer",
  company: "LinkedIn",
  bullets: [
    "Improved company-wide bookings and revenue source of truth data freshness by more than 50% (from 13 hours to 6 hours), enabling faster and more accurate decision-making for the business by successfully leading a complex migration (owning planning, design, prototyping, dev, comms with 5+ teams) of data transformation pipelines for SaaS booking data from on-prem HDFS systems to Azure utilizing ADLS, Databricks, Data Factory, and Great Expectations.",
    "Pioneered the use of Azure infrastructure for data transformations at LinkedIn by working closely with the platform team to address the gaps in the stack and create a highly performant and scalable data transformation platform to achieve freshness needs of 50% improvement.",
    "Brought transparency and accountability to the relationship between data consumers and producers by creating a framework that views Data teams at LinkedIn as effective service providers with obligations towards internal consumers. The framework standardizes the use of uptime as a measure to establish data reliability Service Level Agreements (SLA) by quantifying and documenting in standard format (JSON) consumer expectations around Freshness, Data Quality, and Availability.",
    "Led the implementation of a scalable system to observe uptime for datasets against their reliability SLAs hourly. The system included easy contract onboarding in JSON format, dashboards to view real-time uptime and historical performance, alerting system to send emails or Slack messages to on-call channels in case of service-level breaches.",
    "Built an internal application (DataMeter) to gather and display all health (availability, quality, open Jira issues) and usage (daily queries, and users) information relative to datasets at LinkedIn. The project involved building an hourly Spark job to retrieve the data, mid-tier API endpoints to serve data, and building a React front-end layer to display the data. This tool has become the one-stop shop for data health monitoring for our greater team, helping on-call identify issues sooner and promoting trust in our datasets with our consumers.",
    "Led the socialization and adoption of DataMeter across the company, scaling from hundreds of datasets tracked in tens of thousands within a couple of months.",
  ],
};

const items = [
  {
    title: "Present",
    icon: <FaCircle />,
  },
  {
    title: "LinkedIn",
    subTitle: "GTM Data Science",
    description: "November 2021",
    icon: <LinkedinOutlined />,
  },
  {
    title: "LinkedIn",
    subTitle: "Market Research",
    description: "July 2019",
    icon: <LinkedinOutlined />,
  },
  {
    title: "MScience",
    subTitle: "Equity Research",
    description: "April 2017",
    icon: <LineChartOutlined />,
  },
  {
    title: "University of Oregon",
    icon: <FaGraduationCap />,
  },
];
const TimeLine = () => (
  <div
    className="timeline-container"
    style={{ width: "300px", alignItems: "flex-start" }}
  >
    <Steps
      className="steps"
      style={{ height: "100vh", width: "100%", position: "sticky" }}
      current={1}
      labelPlacement="horizontal"
      items={items}
      direction="vertical"
    />
  </div>
);

export default TimeLine;
