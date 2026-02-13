import React from "react";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import "./Projects.css";
import projectData from "../../Data/Projects.json";
import HL_img from "../../assets/HL_img.jpg";
import Xerox_img from "../../assets/Xerox_img.png";
import DBS_img from "../../assets/DBS_img.png";
import { motion } from "framer-motion";

const imageMap = {
  "HL_img.jpg": HL_img,
  "Xerox_img.png": Xerox_img,
  "DBS_img.png": DBS_img,
};
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};
const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 },
};
const MotionCard = motion.create(Card);

function Projects() {
  return (
    <motion.div
      className="projects_container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {projectData.map((project, index) => (
        <MotionCard
          className="cardProject"
          key={index}
          variants={cardVariants}
          whileHover={{ y: -8, scale: 1.01 }}
          transition={{ duration: 0.1 }}
        >
          <Card.Body>
            <Card.Img
              variant="top"
              style={{
                width: "100%",
                height: "120px",
                objectFit: "cover",
                alignItems: "center",
              }}
              src={imageMap[project.image]}
            />
            <Card.Title>{project.name}</Card.Title>
            <Card.Text>
              <strong>Role:</strong> {project.role} <br />
              <strong>Domain:</strong> {project.domain} <br />
              <strong>Duration:</strong> {project.duration}
              <br />
              <span style={{ color: "yellow" }}>
                <i>Project Overview:</i>
              </span>
              <br />
              {project.overview}
            </Card.Text>
          </Card.Body>
          <Accordion>
            <Accordion.Item eventKey={project.id}>
              <Accordion.Header>Show Details</Accordion.Header>
              <Accordion.Body>
                <p>
                  <i>Responsibilities:</i>
                </p>
                <p>{project.responsibilities}</p>
                <p>
                  <i>Impact:</i>
                </p>
                <ul>
                  {project.impact.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </MotionCard>
      ))}
    </motion.div>
  );
}

export default Projects;
