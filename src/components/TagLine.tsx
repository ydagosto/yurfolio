import { Typography } from "antd";

const { Title, Text } = Typography;

const TagLine = () => {
  return (
    <div
      className="tag-line"
      style={{ display: "flex", flexDirection: "column" }}
    >
      <Title level={2} className="full-name">
        Yuri D'Agosto
      </Title>
      <Title level={5} className="title">
        Software Engineer
      </Title>
      <Text type="secondary">ydagosto@gmail.com</Text>
      <Text type="secondary">(541)913-9585</Text>
    </div>
  );
};

export default TagLine;
