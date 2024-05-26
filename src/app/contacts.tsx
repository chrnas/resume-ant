import { Row, Col } from "antd";
import TweenOne from "rc-tween-one";
import { frame, contact } from "./styles";
import profilePic from "./images/profilepic.jpg";
import githubPic from "./images/github-mark.svg";
import linkedinPic from "./images/linkedin.png";
import Image from "next/image";
import { useState } from "react";


export default function Contacts() {

    const [isHovered, setIsHovered] = useState(false);
    const [isHoveredGithub, setIsHoveredGithub] = useState(false);
    const [isHoveredLinkedIn, setIsHoveredLinkedIn] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const handleMouseEnterGithub = () => {
        setIsHoveredGithub(true);
    };

    const handleMouseLeaveGithub = () => {
        setIsHoveredGithub(false);
    };

    const handleMouseEnterLinkedIn = () => {
        setIsHoveredLinkedIn(true);
    };

    const handleMouseLeaveLinkedIn = () => {
        setIsHoveredLinkedIn(false);
    };

    return (
        <>
            <Row justify="center" align="middle">
            <Col span={2}>
                <TweenOne
                animation={{
                    scale: isHovered ? 1.2 : 1, // Change this value to adjust the animation distance
                    duration: 500, // Change this value to adjust the animation duration
                }}
                >
                <Image
                    style={frame}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    src={profilePic}
                    height={150}
                    width={150}
                    alt=""
                />
                </TweenOne>
            </Col>
            <Col>
            <div style={contact}>Email: christoffer.nas@outlook.com</div>
            <div style={contact}>Phone: 0763238546</div>
            <div style={contact}>Birth date: 2001-04-21</div>
            <div style={contact}>Location: Linköping</div>
            </Col>
            <Col>
                <TweenOne
                    animation={{
                    scale: isHoveredGithub ? 1.2 : 1, // Change this value to adjust the animation distance
                    duration: 500, // Change this value to adjust the animation duration
                    }}
                >
                    <a href="https://github.com/chrnas">
                    <Image
                        style={frame}
                        onMouseEnter={handleMouseEnterGithub}
                        onMouseLeave={handleMouseLeaveGithub}
                        src={githubPic}
                        height={30}
                        width={30}
                        alt=""
                    />
                    </a>
                </TweenOne>
                <TweenOne
                    animation={{
                    scale: isHoveredLinkedIn ? 1.2 : 1, // Change this value to adjust the animation distance
                    duration: 500, // Change this value to adjust the animation duration
                    }}
                >
                    <a href="https://www.linkedin.com/in/christoffer-n%C3%A4s/">
                    <Image
                        style={frame}
                        onMouseEnter={handleMouseEnterLinkedIn}
                        onMouseLeave={handleMouseLeaveLinkedIn}
                        src={linkedinPic}
                        height={30}
                        width={30}
                        alt=""
                    />
                    </a>
                </TweenOne>
                </Col>
            </Row>
        </>
    );
};
