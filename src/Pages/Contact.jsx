import React from 'react';
import './Contact.css';
// mport './Contact.css'
import Swal from 'sweetalert2'
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { fadeIn } from './variants';

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", "b1fda0e6-f371-4d0c-8661-80cf1e7954ef");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      const data = await response.json();

      if (data.success) {
        Swal.fire({
          title: "Message Sent Successfully!",
          icon: "success",
          draggable: true
        });
      } else {
        throw new Error(data.message || "Unknown error occurred");
      }
    } catch (error) {
      console.error("Error:", error);
      setResult("Something went wrong!");
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.message,
        // footer: '<a href="#">Why do I have this issue?</a>'
      });
    }
  };

  return (
    <motion.section 
        variants={fadeIn({ direction: "up", delay: 0.2 })}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
        className="contact">
      <div className="upperpart">
        <form onSubmit={onSubmit}>
          <h2>Contact Me</h2>
          <div className="input-box">
            <label>Full Name</label>
            <input
              type="text"
              name="name"
              className="field"
              placeholder="Enter your Name"
              required
            />
          </div>
          <div className="input-box">
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              className="field"
              placeholder="Enter your Email"
              required
            />
          </div>
          <div className="input-box">
            <label>Your Message</label>
            <textarea
              name="message"
              className="field mess"
              placeholder="Enter your Message"
              required
            ></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>
      <div className="lowerpart">
        <h2>Follow Me On</h2>
        <div className="social-links">
          <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30} />
          </a>
          <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer">
            <FaGithub size={30} />
          </a>
          <a href="https://twitter.com/your-profile" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={30} />
          </a>
          <a href="https://instagram.com/your-profile" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={30} />
          </a>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
