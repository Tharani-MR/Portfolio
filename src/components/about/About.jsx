import React from "react";
import "./About.css";
import aboutImg from "../../assets/About_BG.PNG";
import { motion } from "framer-motion";
function About() {
  return (
    <>
      <div className="about-topContainer">
        <motion.div
          className="about-img"
          initial={{ opacity: 0, x: 0, scale: 0.8 }}
          animate={{ opacity: 1, x: 50, scale: 1 }}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 1 }}
        >
          <img src={aboutImg} alt="Profile" />
        </motion.div>

        <div className="about-container">
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className="about-title">About Me</h2>
            <p className="about-intro">
              Java Full Stack Developer with 4+ years of experience in building
              secure and scalable enterprise applications using Spring Boot and
              React JS. Experienced in banking, home lending, and content
              management systems, with strong expertise in REST API development
              and responsive UI design.
            </p>
            <p className="about-intro">
              Currently working as an Associate Consultant at Infosys,
              contributing to the Wells Fargo Home Lending project, focusing on
              secure mortgage solutions and backend services. Previously worked
              at HCL Technologies on projects including Xerox DocuShare and DBS
              Banking applications, delivering customer-focused and scalable
              solutions.
            </p>
          </motion.div>
          <motion.div
            className="timeline"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            {/* Item 1 */}
            <div className="timeline-item timeline-item1">
              <div className="timeline-content">
                <h5>2025 – Present</h5>
                <h6>Associate Consultant – Infosys</h6>
                <p>Project : Wells Fargo Home Lending</p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="timeline-item timeline-item2">
              <div className="timeline-content">
                <h5>2022 – 2024</h5>
                <h6>Senior Software Engineer – HCL</h6>
                <p>Project : Xerox DocuShare</p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="timeline-item timeline-item3">
              <div className="timeline-content">
                <h5>2021 – 2022</h5>
                <h6>Software Engineer – HCL</h6>
                <p>Project : DBS Banking</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default About;
