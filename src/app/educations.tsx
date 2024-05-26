import { ClockCircleOutlined, EnvironmentOutlined } from "@ant-design/icons";
import { Col, Row, Timeline } from "antd";
import { center } from "./styles";

const educations = [
  {
    children: (
      <>
        <h3>
          <a
            style={{ color: "black" }}
            href="https://liu.se/utbildning/program/6cddd"
          >
            Master of Science in Computer Science and Engineering
          </a>
        </h3>
        <a
          style={{ color: "black" }}
          href="https://liu.se/artikel/masterprofil-storskalig-mjukvaruutveckling"
        >
          <h5>Specialization: Large scale software development</h5>
        </a>
        <h5>
          <ClockCircleOutlined /> 2021 - 2026 &#x2022; Ongoing
        </h5>
        <h5>
          <a
            style={{ color: "black" }}
            href="https://maps.app.goo.gl/zsJzcvBiTahicZGm8"
          >
            <EnvironmentOutlined /> Linköping, Linköping university
          </a>
        </h5>
        <p>
          Three year bachelor degree in computer science and engingeering a
          master degree in computer science and engineering wiht specialization
          in large scale software development.
        </p>
      </>
    ),
    color: "black",
  },
  {
    children: (
      <>
        <h3>Gymnasieexam in Teknikvetenskap</h3>
        <h5>
          <ClockCircleOutlined /> 2017 - 2020 &#x2022; Finished
        </h5>
        <h5>
          <a
            style={{ color: "black" }}
            href="https://maps.app.goo.gl/5RtgF9HWxTjdrzvy9"
          >
            <EnvironmentOutlined /> Karlstad, Älvkullegymnasiet
          </a>
        </h5>
        <p>
          Gymnasieexam at the Technincalprogram with specialization in Technical
          knowledge at Älvkullegymnasiet.
        </p>
      </>
    ),
    color: "black",
  },
];

export default function Educations() {
  return (
    <>
     <Row justify="center" align="middle">
      <Col span={8}>
          <h2 style={center}>Education</h2>
          <Timeline items={educations} />
        </Col>
      </Row>

    </>
  );
}
