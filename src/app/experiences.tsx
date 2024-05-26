import { ClockCircleOutlined, EnvironmentOutlined } from "@ant-design/icons";
import { Col, Row, Tag, Timeline } from "antd";
import { center } from "./styles";

const experiences = [
  {
    children: (
      <>
        <h3>
          IT Systemsupport &#x2022;{" "}
          <a style={{ color: "black" }} href="https://www.billerud.se/">
            Billerud
          </a>
        </h3>
        <h5>
          <ClockCircleOutlined /> 2023-06-01 - 2023-08-01 &#x2022; Fulltime
        </h5>
        <h5>
          <ClockCircleOutlined /> 2022-06-01 - 2022-08-01 &#x2022; Fulltime
        </h5>
        <a
          style={{ color: "black" }}
          href="https://maps.app.goo.gl/2dtACCp99w4hB2eCA"
        >
          <h5>
            <EnvironmentOutlined /> Grums, Billerud Gruvön
          </h5>
        </a>
        <p>
          Support of work related to system maintenance, system development, and
          system support.
        </p>
        <Tag>angular</Tag>
        <Tag>.NET</Tag>
        <Tag>matlab</Tag>
        <Tag>python</Tag>
      </>
    ),
    color: "black",
  },
  {
    children: (
      <>
        <h3>
          Conscript Communication/Command soldier &#x2022;{" "}
          <a
            style={{ color: "black" }}
            href="https://www.forsvarsmakten.se/en/"
          >
            {" "}
            Swedish Armed Forces{" "}
          </a>
        </h3>
        <h5>
          <ClockCircleOutlined /> 2020-06-01 - 2021-06-01 &#x2022; Fulltime
        </h5>
        <h5>
          <a
            style={{ color: "black" }}
            href="https://maps.app.goo.gl/YW3sHYvm4gbGHWMr6"
          >
            <EnvironmentOutlined /> Skövde, Skaraborgs regemente P4
          </a>
        </h5>
        <p>Communication/Command Soldier at Skaraborg Regemente, P4.</p>
      </>
    ),
    color: "black",
  },
  {
    children: (
      <>
        <h3>
          Shop assistant &#x2022;{" "}
          <a style={{ color: "black" }} href="https://www.ica.se/">
            Ica
          </a>
        </h3>
        <h5>
          <ClockCircleOutlined /> Summer 2019, 2020, 2021.
        </h5>
        <h5>
          <a
            style={{ color: "black" }}
            href="https://maps.app.goo.gl/oZYJRdPQLYMBTkTT6"
          >
            <EnvironmentOutlined /> Säffle, Ica nära
          </a>
        </h5>
      </>
    ),
    color: "black",
  },
];

export default function Experiences() {
  return (
    <>
      <Row justify="center" align="middle">
        <Col span={8}>
          <h2 style={center}>Experiences</h2>
          <Timeline items={experiences} />
        </Col>
      </Row>
    </>
  );
}
