import { Typography, Image } from "antd";
import "../styles.scss";

const { Title, Text, Paragraph } = Typography;

const ExperienceItem = (props: any) => {
  const { positionKey, data } = props;

  return (
    <div key={positionKey} className="resume-section">
      <div key={positionKey}>
        <div className="experience-header" key={positionKey}>
          <div>
            <Title level={5} className="company">
              {data["company"]} ({data["location"]})
            </Title>
          </div>
          <Title level={5} type="secondary" className="dates">
            {data["startDate"]} - {data["endDate"]}
          </Title>
        </div>
        {data["positions"].map((item: any) => (
          <div className="position">
            <Text className="title">
              {item["title"]} | {item["startDate"]} - {item["endDate"]}
            </Text>
          </div>
        ))}
        <Paragraph className="title-description">
          <ul>
            {data["bullets"].map((item: string) =>
              item.startsWith("image-source:") ? (
                <div className="resume-media" key={item}>
                  <Image
                    src={item.substring("image-source:".length)}
                    alt="resume-media"
                    className="image"
                    preview={false}
                  />
                </div>
              ) : (
                <li key={item}>{item}</li>
              )
            )}
          </ul>
        </Paragraph>
      </div>
    </div>
  );
};

export default ExperienceItem;
