import { Card, Typography } from "antd";

const tabListNoTitle = [
  {
    key: "GTM Data Science",
    label: "GTM Data Science",
  },
  {
    key: "Market Research",
    label: "Market Research",
  },
  {
    key: "Equity Research",
    label: "Equity Research",
  },
];

const resumeData: any = {
  "GTM Data Science": {
    positions: [
      {
        title: "Senior Data Engineer",
        startDate: "March 2023",
        endDate: "Present",
      },
      {
        title: "Data Engineer - Data Science",
        startDate: "November 2021",
        endDate: "March 2023",
      },
    ],
    company: "LinkedIn",
    location: "San Francisco, CA",
    startDate: "November 2021",
    endDate: "Present",
    bullets: [
      "Improved company-wide bookings and revenue source of truth data freshness by more than 50% (from 13 hours to 6 hours), enabling faster and more accurate decision-making for the business by successfully leading a complex migration (owning planning, design, prototyping, dev, comms with 5+ teams) of data transformation pipelines for SaaS booking data from on-prem HDFS systems to Azure utilizing ADLS, Databricks, Data Factory, and Great Expectations.",
      "Pioneered the use of Azure infrastructure for data transformations at LinkedIn by working closely with the platform team to address the gaps in the stack and create a highly performant and scalable data transformation platform to achieve freshness needs of 50% improvement.",
      "Brought transparency and accountability to the relationship between data consumers and producers by creating a framework that views Data teams at LinkedIn as effective service providers with obligations towards internal consumers. The framework standardizes the use of uptime as a measure to establish data reliability Service Level Agreements (SLA) by quantifying and documenting in standard format (JSON) consumer expectations around Freshness, Data Quality, and Availability.",
      "Led the implementation of a scalable system to observe uptime for datasets against their reliability SLAs hourly. The system included easy contract onboarding in JSON format, dashboards to view real-time uptime and historical performance, alerting system to send emails or Slack messages to on-call channels in case of service-level breaches.",
      "Built an internal application (DataMeter) to gather and display all health (availability, quality, open Jira issues) and usage (daily queries, and users) information relative to datasets at LinkedIn. The project involved building an hourly Spark job to retrieve the data, mid-tier API endpoints to serve data, and building a React front-end layer to display the data. This tool has become the one-stop shop for data health monitoring for our greater team, helping on-call identify issues sooner and promoting trust in our datasets with our consumers.",
      "Led the socialization and adoption of DataMeter across the company, scaling from hundreds of datasets tracked in tens of thousands within a couple of months.",
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
      "Improved survey fielding efficiency (from 10 surveys/associate to 30+ surveys/associate) by developing an internal web application using Flask and Ember.js to assist with manual steps. These include generating audience tables for survey targeting and monitoring fielding stats as batches of emails are sent",
      "Developed Apache Goblin data integration applications to extract and ingest survey data from external APIs (Qualtrics, Decipher) to internal HDFS storage making it available company-wide for market analysis",
      "Led an effort to standardize data operations across programs by redesigning specialized code to use modular and reusable components, reducing the amount of code to maintain and increasing its longevity",
      "Significantly improved data readiness for NPS reports for the Flagship and Recruiter products from quarterly to monthly and then weekly by using Azkaban scheduler to orchestrate  Presto/Hive (SQL), and Spark (Scala) jobs and allowing our product managers and analysts to get closer to real-time feedback from users",
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
      "Onboarded, and helped manage a team of 4 to support an analyst in regular maintenance of datasets and road mapping development of new products",
    ],
  },
};

const { Title, Text, Paragraph } = Typography;

const gridStyle: React.CSSProperties = {
  width: "100%",
};

const ExperienceItem = () => {
  const resumeKeys = Object.keys(resumeData);

  return (
    <Card style={{ width: "100%" }}>
      {resumeKeys.map((key: string) => (
        <Card.Grid style={gridStyle}>
          <ul>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                width: "100%",
                alignItems: "center",
              }}
            >
              <div>
                <Title
                  level={4}
                  style={{
                    marginRight: "auto",
                    marginTop: "0",
                    color: "#ff7429",
                  }}
                >
                  {key} | {resumeData[key]["company"]} (
                  {resumeData[key]["location"]})
                </Title>
              </div>
              <Title
                level={4}
                type="secondary"
                style={{ marginLeft: "auto", marginTop: "0", color: "#ff7429" }}
              >
                {resumeData[key]["startDate"]} - {resumeData[key]["endDate"]}
              </Title>
            </div>
            {resumeData[key]["positions"].map((item: any) => (
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  width: "100%",
                  alignItems: "center",
                }}
              >
                <Text
                  strong
                  style={{
                    marginRight: "auto",
                    marginTop: "0",
                    color: "#ff7429",
                    fontSize: "medium",
                  }}
                >
                  {item["title"]}
                </Text>
                <Text
                  type="secondary"
                  style={{
                    marginLeft: "auto",
                    marginTop: "0",
                    color: "#ff7429",
                    fontSize: "medium",
                  }}
                >
                  {item["startDate"]} - {item["endDate"]}
                </Text>
              </div>
            ))}
            <br />
            <Paragraph>
              <ul>
                {resumeData[key]["bullets"].map((item: string) => (
                  <li key={item}>
                    <span style={{ fontWeight: "bold" }}>
                      {item.split(".")[0]}.
                    </span>{" "}
                    {item.substring(item.indexOf(".") + 1)}
                  </li>
                ))}
              </ul>
            </Paragraph>
          </ul>
        </Card.Grid>
      ))}
    </Card>
  );
};

export default ExperienceItem;
