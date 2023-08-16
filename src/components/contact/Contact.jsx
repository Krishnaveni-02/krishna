import { useState } from "react";
import "./contact.scss";
import emailjs from "emailjs-com";

export default function Contact() {
  const [message] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents default refresh by the browser
    emailjs
      .sendForm('service_v57v4xc', `template_7wd5fkk`, e.target, `user_pZPBxDUZzJP3HArwFFhxo`)
      .then(
        (result) => {
          alert("Message Sent, I will get back to you shortly", result.text);
        },
        (error) => {
          alert("An error occurred, Please try again", error.text);
        } 
      ); 
  };
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right"> 
        <h2>Contact.</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Email" name="from_email" required/>
          <input type="text" placeholder="Your name" name="from_name" required/> 
          <textarea placeholder="Message" name="message" required/>
          <button type="submit">Send</button>
          {message && <span>Thanks, I'll reply ASAP :)</span>}
        </form>
      </div>
    </div>
  );
}
