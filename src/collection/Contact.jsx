import { useState } from "react";
import Connect from "./Connect"
import Navbar from "./Navbar"
// import video from "./VID-20220920-WA0012.mp4"
const Contact =()=>{
     const [formData, setFormData] = useState({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
    
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);
    // const [loading, setLoading] = useState(false);
    
    const handleChange = (e) => {
      const { name, value } = e.target;
    
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    };
    
    const [showEmailModal, setShowEmailModal] = useState(false);
    
    const submit = (e) => {
      e.preventDefault();
    
      if (
        !formData.name ||
        !formData.email ||
        !formData.phone ||
        !formData.subject ||
        !formData.message
      ) {
        setError(true);
        return;
      }
    
      setError(false);
      setShowEmailModal(true);
    };
    return(
       <>
        <Navbar/>
      <Connect/>
      
            <section className="py-5">

  <div className="container">

    <div className="row g-5 align-items-center">

      {/* Left */}

      <div className="col-lg-5">

        <span className="section-tag">
          Get In Touch
        </span>

        <h2 className="display-5 fw-bold mt-3">
          Let's Start a Conversation
        </h2>

        <p className="text-muted mt-4">

          We'd love to hear from you. Whether you have questions
          about our products, need professional hair advice,
          or want to book an appointment, simply fill out the form.

        </p>

        <div className="contact-feature">

          <i className="fa-solid fa-circle-check"></i>

          Quick Response

        </div>

        <div className="contact-feature">

          <i className="fa-solid fa-circle-check"></i>

          Friendly Customer Support

        </div>

        <div className="contact-feature">

          <i className="fa-solid fa-circle-check"></i>

          Professional Hair Consultation

        </div>

        <div className="contact-feature">

          <i className="fa-solid fa-circle-check"></i>

          Premium Beauty Products

        </div>

      </div>

      {/* Right */}

      <div className="col-lg-7">

        <div className="contact-form-card">

          <h3 className="fw-bold mb-4">

            Send a Message

          </h3>

          <form onSubmit={submit}>

            <div className="row">

              <div className="col-md-6 mb-4">

                <label className="form-label">
                  Full Name
                </label>

               <input
  type="text"
  name="name"
  className="form-control modern-input"
  placeholder="John Doe"
  value={formData.name}
  onChange={handleChange}
/>

              </div>

              <div className="col-md-6 mb-4">

                <label className="form-label">
                  Email Address
                </label>

                <input
                  type="email"
                  className="form-control modern-input"
                  placeholder="john@example.com"
                 name="email"
value={formData.email}
onChange={handleChange}
                />

              </div>

              <div className="col-md-6 mb-4">

                <label className="form-label">
                  Phone Number
                </label>

              <input
  type="tel"
  name="phone"
  className="form-control modern-input"
  placeholder="+234..."
  value={formData.phone}
  onChange={handleChange}
/>

              </div>

              <div className="col-md-6 mb-4">

                <label className="form-label">
                  Subject
                </label>

                <input
  type="text"
  name="subject"
  className="form-control modern-input"
  placeholder="How can we help?"
  value={formData.subject}
  onChange={handleChange}
/>

              </div>

            </div>

            <div className="mb-4">

              <label className="form-label">
                Message
              </label>

            <textarea
  rows="6"
  name="message"
  className="form-control modern-input"
  placeholder="Write your message..."
  value={formData.message}
  onChange={handleChange}
></textarea>
            </div>

            {/* Alerts */}

            {submitted && (

              <div className="alert alert-success">

                <i className="fa-solid fa-circle-check me-2"></i>

                Your message has been sent successfully.

              </div>

            )}

            {error && (

              <div className="alert alert-danger">

                <i className="fa-solid fa-circle-exclamation me-2"></i>

                Something went wrong. Please try again.

              </div>

            )}

           <button
  type="submit"
  className="btn btn-dark rounded-pill px-5 py-3"
  disabled={loading}
>
  <i className="fa-solid fa-paper-plane me-2"></i>

  {loading ? "Sending..." : "Send Message"}
</button>

{showEmailModal && (
  <div
    className="email-modal-overlay"
    onClick={() => setShowEmailModal(false)}
  >
    <div
      className="email-modal"
      onClick={(e) => e.stopPropagation()}
    >
      <button
        type="button"
        className="email-modal-close"
        onClick={() => setShowEmailModal(false)}
      >
        &times;
      </button>

      <div className="email-modal-icon">
        <i className="fa-solid fa-envelope"></i>
      </div>

      <h3>Ready to Send?</h3>

      <p>
        Your message is ready. Choose how you would like
        to contact Zanny Beauty Palace.
      </p>

      <div className="email-modal-buttons">

        <a
          href={`mailto:badiruoluwatoyin11@gmail.com?subject=${encodeURIComponent(
            formData.subject
          )}&body=${encodeURIComponent(
            `Hello Zanny Beauty Palace,

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}

Message:
${formData.message}`
          )}`}
          className="email-send-btn"
          onClick={() => setShowEmailModal(false)}
        >
          <i className="fa-solid fa-paper-plane"></i>
          Send via Email
        </a>

        <a
          href={`https://wa.me/2348020743857?text=${encodeURIComponent(
            `Hello Zanny Beauty Palace,

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}

Subject: ${formData.subject}

Message:
${formData.message}`
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-send-btn"
          onClick={() => setShowEmailModal(false)}
        >
          <i className="fa-brands fa-whatsapp"></i>
          Send via WhatsApp
        </a>

      </div>
    </div>
  </div>
)}
          </form>

        </div>

      </div>

    </div>

  </div>

</section>
       </>
    )
}
export default Contact