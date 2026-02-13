import React from "react";
import "./Skills.css";
import data from "../../Data/Skills.json";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaJs,
  FaJava,
  FaServer,
  FaDatabase,
  FaGitAlt,
  FaVial,
  FaCheckCircle,
} from "react-icons/fa";
import { VscAzureDevops } from "react-icons/vsc";
import { RiAiGenerate2 } from "react-icons/ri";
import { SiSplunk } from "react-icons/si";
import { SiJira } from "react-icons/si";
import { GiBrassEye } from "react-icons/gi";
import { TbBrandCucumber } from "react-icons/tb";
import { motion } from "framer-motion";

import { SiSpringboot, SiPostman } from "react-icons/si";
const iconMap = {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaJs,
  FaJava,
  FaServer,
  FaDatabase,
  FaGitAlt,
  FaVial,
  TbBrandCucumber,
  SiSpringboot,
  VscAzureDevops,
  SiPostman,
  RiAiGenerate2,
  SiSplunk,
  SiJira,
  GiBrassEye,
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

function Skills() {
  console.log(Object.values(data));
  const MotionCard = motion.create(Card);

  return (
    <motion.div
      className="skills-container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {Object.values(data).map((category, index) => (
        <MotionCard
          className="card"
          key={index}
          style={{ width: "18rem", marginBottom: "20px" }}
          variants={cardVariants}
          whileHover={{ y: -8, scale: 1.01 }}
          transition={{ duration: 0.1 }}
        >
          <Card.Body>
            <Card.Title>{category.title}</Card.Title>

            <ListGroup className="list-group-flush">
              {category.items.map((item, itemIndex) => {
                const IconComponent = iconMap[item.icon];
                return (
                  <ListGroup.Item key={itemIndex}>
                    {IconComponent && <IconComponent className="me-2" />}
                    {item.name}
                  </ListGroup.Item>
                );
              })}
            </ListGroup>
          </Card.Body>
        </MotionCard>
      ))}
    </motion.div>
  );
}

export default Skills;
