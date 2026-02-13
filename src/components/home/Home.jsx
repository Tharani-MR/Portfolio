import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./Home.css";
import Button from "react-bootstrap/Button";
import profileImg from "../../assets/Home_BG.png";
import { SiLinkedin } from "react-icons/si";
import Modal from "react-bootstrap/Modal";
import { GrAchievement } from "react-icons/gr";
import About from "../about/About";

function Home() {
  const [exp, setExp] = useState(0);
  const [show, setShow] = useState(false);

  // logic for exp calculation
  useEffect(() => {
    const startDate = new Date(2021, 7, 19);
    const today = new Date();
    const years = today.getFullYear() - startDate.getFullYear();
    const isBeforeAnniversary =
      today.getMonth() < startDate.getMonth() ||
      (startDate.getMonth() == today.getMonth() &&
        today.getDate() <= startDate.getDate());
    setExp(isBeforeAnniversary ? years - 1 : years);
  }, []);

  return (
    <div className="home-container">
      <motion.div
        className="home-content"
        initial={{ opacity: 0, x: -100, scale: 0.8 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <h1>
          Hi, I’m <span style={{ color: "aqua" }}>Tharani R</span>
        </h1>
        <h2>Java full Stack Developer</h2>
        <p style={{ color: "rgb(183, 187, 188)" }}>
          {exp}+ years of experience in building and maintaining enterprise web
          applications.
          <br /> Experienced in Java, Spring Boot, REST APIs, and React JS, with
          hands-on exposure to banking,
          <br /> home lending, and content management systems.
        </p>

        <div className="d-flex gap-2 mb-2">
          <Button
            href="/Tharani_Resume.pdf"
            variant="outline-info"
            target="_blank"
            className="resumeButton"
            size="sm"
          >
            Download Resume
          </Button>

          <Button
            className="achiveButton"
            variant="outline-info"
            href="https://www.linkedin.com/in/tharani-r-250053195/"
            target="_blank"
          >
            <SiLinkedin color="aqua" />
          </Button>

          <Button
            className="button achiveButton"
            variant="outline-info"
            onClick={() => setShow(true)}
          >
            <GrAchievement color="aqua" />
          </Button>
          <Modal
            size="sm"
            show={show}
            onHide={() => setShow(false)}
            aria-labelledby="example-modal-sizes-title-sm"
          >
            <Modal.Header closeButton style={{ backgroundColor: "aqua" }}>
              <Modal.Title id="example-modal-sizes-title-sm">
                🥇 Best Performer Award 🏆(2023–2024)
              </Modal.Title>
            </Modal.Header>
            <Modal.Body style={{ backgroundColor: "aqua" }}>
              Recognized for outstanding performance and consistent contribution
              to project delivery. Awarded for maintaining high quality
              standards and delivering solutions aligned with business
              requirements.
            </Modal.Body>
          </Modal>
        </div>
      </motion.div>
      <motion.div
        className="homeImage"
        initial={{ opacity: 0, x: 100, scale: 0.8 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 1 }}
      >
        {" "}
        <img src={profileImg} alt="profile" />
      </motion.div>
    </div>
  );
}

export default Home;
