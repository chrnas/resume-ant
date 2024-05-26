import { Tag, Row, Col } from "antd";
import { center } from "./styles";

export default function OtherSkills() {
  return (
    <>
      <Row justify="center" align="middle">
        <Col span={8}>
          <h2 style={center}>Other Skills</h2>
          <h3>Intermediate</h3>
          <Tag>Git</Tag>
          <Tag>GitHub</Tag>
          <h3>Basic</h3>
          <Tag>Kanban</Tag>
          <Tag>Scrum</Tag>
          <Tag>Azure</Tag>
          <Tag>Azure devops</Tag>
          <Tag>Google cloud</Tag>
        </Col>
      </Row>
    </>
  );
}
