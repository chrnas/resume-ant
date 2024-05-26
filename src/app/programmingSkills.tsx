import { Tag, Popover, Col, Row } from "antd";
import { center } from "./styles";

const javaContent = (
    <div>
      <p>Basic knowledge</p>
    </div>
  );

export default function ProgrammingSkills() {
  return (
    < >
    <Row justify="center" align="middle">
      <Col span={8}>
        <h2 style={center}>Programming Skills</h2>
        <h3>Advanced</h3>
        <Tag>Python</Tag>
        <h3>Intermediate</h3>
        <Popover content={javaContent}>
          <Tag>Java</Tag>
        </Popover>
        <Tag>SQL</Tag>
        <Tag>postgreSQL</Tag>
        <Tag>javascript</Tag>
        <Tag>HTML</Tag>
        <Tag>css</Tag>
        <Tag>Angular</Tag>
        <Tag>React</Tag>
        <Tag>Matlab</Tag>
        <Tag>C++</Tag>
        <Tag>.NET</Tag>
        <h3>Basic</h3>
        <Tag>C</Tag>
        <Tag>C#</Tag>
        <Tag>Julia</Tag>
        <Tag>Azure</Tag>
        <Tag>Google cloud</Tag>
      </Col>
    </Row>
    </>
  );
}
