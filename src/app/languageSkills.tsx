import { Tag, Row, Col } from "antd";
import { center } from "./styles";

export default function LanguageSkills() {
  return (
    <>
      <Row justify="center" align="middle">
        <Col span={8}>
          <h2 style={center}>Language skills</h2>
          <h3>Native Language</h3>
          <Tag>Swedish</Tag>
          <h3>Fluent</h3>
          <Tag>English</Tag>
        </Col>
      </Row>
    </>
  );
}
