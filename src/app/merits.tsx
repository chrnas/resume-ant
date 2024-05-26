import { ClockCircleOutlined, EnvironmentOutlined } from "@ant-design/icons";
import { Col, Row, Tag, Timeline } from "antd";
import { center } from "./styles";

const merits = [
  {
    children: (
      <>
        <h3>
          Classrepresentative &#x2022;{" "}
          <a style={{ color: "black" }} href="https://d-sektionen.se/">
            Datateknologisektionen
          </a>
        </h3>
        <h5>
          <ClockCircleOutlined /> Part time during student year 2023-2024.
        </h5>
        <h5>
          <a
            style={{ color: "black" }}
            href="https://maps.app.goo.gl/oZYJRdPQLYMBTkTT6"
          >
            <EnvironmentOutlined /> Linköping, Linköping university
          </a>
        </h5>
      </>
    ),
    color: "black",
  },
  {
    children: (
      <>
        <h3>
          Bartender &#x2022;{" "}
          <a style={{ color: "black" }} href="https://www.flamman.org/">
            Flamman Pub & Disko
          </a>
        </h3>
        <h5>
          <ClockCircleOutlined /> Part time during, VT 2022, HT 2022.
        </h5>
        <h5>
          <a
            style={{ color: "black" }}
            href="https://maps.app.goo.gl/oZYJRdPQLYMBTkTT6"
          >
            <EnvironmentOutlined /> Linköping, Linköping university
          </a>
        </h5>
      </>
    ),
    color: "black",
  },
];

export default function Merits() {
  return (
    <>
      <Row justify="center" align="middle">
        <Col span={8}>
          <h2 style={center}>Student activity</h2>
          <Timeline items={merits} />
        </Col>
      </Row>
    </>
  );
}
