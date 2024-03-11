import React from "react";
import { Container, Introduction, Subtitle } from "./styles/about";
import Department from "../../images/svg/Department.svg";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

function About() {
  return (
    <>
      <Container>
        <Introduction>
          Igniting Insight, as the name suggests, is a humble effort by a group
          of undergraduate students, to ignite the curiosity to learn and
          understand, in young creative minds. It is this vision that is
          showcased through our logo. The minds of the students and the teacher,
          meshed in perfect harmony, symbolizes the fact that effective learning
          happens only when the teacher has as much enthusiasm to teach as the
          student has, to learn.
        </Introduction>
        <Subtitle>Who Are We?</Subtitle>
        <Introduction>
          Igniting Insight is a non profit student organisation that aims to
          develop innovative ways of learning outside the classroom.
          <br />
          <br />
          It was formed by a group of undergraduate students and aims to bridge
          the gap between understanding a concept and applying it effectively.
          We, as a team of undergraduate students aim to teach underprivileged
          students and provide them with resources needed to aid them in
          effective learning.
        </Introduction>
        <Subtitle>Our Journey</Subtitle>
        <VerticalTimeline>
          <VerticalTimelineElement
            iconStyle={{
              background: "#FD5F00",
              height: "20px",
              width: "20px",
              marginTop: "50px",
            }}
          >
            <h4 className="vertical-timeline-element-subtitle">
              21 January, 2022
            </h4>
            <p>The creation of the idea</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            iconStyle={{
              background: "#FD5F00",
              height: "20px",
              width: "20px",
              marginTop: "50px",
            }}
          >
            <h4 className="vertical-timeline-element-subtitle">
              21 January, 2022
            </h4>
            <p>The creation of the idea</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            iconStyle={{
              background: "#FD5F00",
              height: "20px",
              width: "20px",
              marginTop: "50px",
            }}
          >
            <h4 className="vertical-timeline-element-subtitle">
              21 January, 2022
            </h4>
            <p>First Event</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
        <Subtitle>Our Team</Subtitle>
        <Subtitle>Our Collaborations</Subtitle>
        <img src={Department} alt="" />
      </Container>
    </>
  );
}

export default About;
