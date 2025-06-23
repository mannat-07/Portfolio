import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import './Contact.css'

const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_z6rrvjf",      
        "template_x0f1nkl",   
        form.current,
        "_oCnnYBECSpYwfa2N"  
      )
      .then(
        () => {
          setIsSent(true);
          form.current.reset();
          toast.success("Message sent successfully! ✅", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
        },
        (error) => {
          console.error("Error sending message:", error);
          toast.error("Failed to send message. Please try again.", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
        }
      );
  };

  return (
    <section id="contact" className="contact-section">
      <ToastContainer />

      {/* Bubble Background */}
      <div className="bubble-bg-contact">
        <div className="bubble bubble-1"></div>
        <div className="bubble bubble-2"></div>
        <div className="bubble bubble-3"></div>
        <div className="bubble bubble-4"></div>
        <div className="bubble bubble-5"></div>
      </div>

      {/* Section Title */}
      <div className="contact-header">
        <h2 className="contact-heading">CONTACT</h2>
        <div className="contact-underline"></div>
        <p className="contact-subtext">
          I’d love to hear from you—reach out for any opportunities or questions!
        </p>
      </div>

      {/* Contact Form */}
      <div className="contact-card">
        <h3 className="contact-title">Connect With Me 🚀</h3>

        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="contact-input"
          />
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="contact-input"
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
            className="contact-input"
          />
          <textarea
            name="message"
            placeholder="Message"
            rows="4"
            required
            className="contact-textarea"
          />

          <button type="submit" className="contact-button">
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
