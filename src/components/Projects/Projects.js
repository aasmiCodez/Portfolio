import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import n8n from "../../Assets/Projects/n8n.png";
import parentPortal from "../../Assets/Projects/parentPortal.png";
import mograConnect from "../../Assets/Projects/mograConnect.jpg";
import mograHub from "../../Assets/Projects/mograHub.jpg";
import HRportal from "../../Assets/Projects/HRportal.png"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mograHub}
              title="MograHub"
              description="This app is crafted to keep parents effortlessly connected to their child’s educational journey. With a simple and intuitive interface, it allows parents to track attendance in real-time, view marks and monitor academic progress with ease, and stay up-to-date on school events and important announcements. Everything you need to stay informed and involved in your child’s school life is just a few taps away."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mograConnect}
              title="MograConnect"
              description="Developed an intuitive attendance tracking and grade entry system tailored for educators, resulting in a 40% improvement in user engagement within the first semester. The app was successfully launched after clearing multiple rounds of App Store and Play Store reviews. A highly responsive user interface was designed to ensure seamless interactions across devices, while automated data synchronization significantly reduced manual effort by 35%."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={parentPortal}
              title="Parent Portal Web"
              description="Developed a web-based version of MograHub to bridge communication gaps between stakeholders in the education system. The platform integrates real-time attendance tracking, instant notifications, and report viewing, providing a comprehensive view of student progress. Secured authentication and role-based access controls were implemented to ensure data privacy. A centralized dashboard was designed to streamline monitoring and management, while a responsive UI guaranteed seamless accessibility across all devices."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={n8n}
              title="n8n Workflows"
              description="Designed and implemented custom n8n workflows to automate data processing and streamline backend operations. These workflows efficiently capture, transform, and store data into SQL tables, reducing manual interventions and ensuring consistent data accuracy. By leveraging n8n’s low-code capabilities, complex integrations between APIs and databases were achieved with ease, enabling faster deployment and scalable solutions for business-critical processes."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={HRportal}
              title="MograHR"
              description="Built an integrated HR portal for efficiently tracking and shortlisting job applications, along with scheduling interviews and managing candidate communications. Simultaneously developed a user-friendly applicant portal that allows candidates to easily apply for positions, upload documents, and track their application status in real-time. This end-to-end solution streamlined the recruitment process, improved transparency, and enhanced the overall user experience for both HR teams and applicants."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
