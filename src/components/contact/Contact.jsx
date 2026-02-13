import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import global_img from "../../assets/global_img.png";
import "./Contact.css";
import { useState } from "react";
import Alert from "react-bootstrap/Alert";

function Contact() {
  const form = useRef();
  const [show, setShow] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_EMAIL_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAIL_PUBLIC_KEY,
      )
      .then(() => {
        setShow(true);
        setTimeout(() => setShow(false), 1000);
      })
      .catch((error) => {
        console.error(error);
        alert("Failed to send message.");
      });

    e.target.reset();
  };

  return (
    <div className="contact-container">
      <div className="alert-wrapper">
        {show && (
          <Alert variant="info" onClose={() => setShow(false)} dismissible>
            <Alert.Heading>Message Sent Successfully!</Alert.Heading>
            <p>Thank you for contacting me. I'll get back to you soon.</p>
          </Alert>
        )}
      </div>

      <motion.img
        src={global_img}
        className="bg-rotate"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
      />
      <motion.div
        className="contact-content"
        initial={{ opacity: 0, y: 100, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <h2>Contact Me</h2>
        <form ref={form} className="formControl" onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" required />
          <button type="submit">Send</button>
        </form>
      </motion.div>
    </div>
  );
}

export default Contact;
