import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import { useTranslation } from "../../context/TranslationContext";
import "../../styles/contact/contact.css";

function Contact() {
  const formRef = useRef();
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState(null);

  const translation = useTranslation();
  const contact = translation.contact;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    setStatus(null);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setStatus("success");
        formRef.current.reset();
      })
      .catch(() => {
        setStatus("error");
      })
      .finally(() => {
        setSending(false);
      });
  };

  return (
    <section id="contact">
      <div className="container-section">
        <div className="title-section title under-space-title">
          <h2>{contact.title}</h2>
        </div>

        <div className="contact-grid gradient-low glow-static">
          <div className="contact-info">
            <div className="contact-info-text">
              {contact.info.map((paragraph, index) => (
                <p key={index} className="common-text">{paragraph}</p>
              ))}
            </div>

            <div className="contact-social-links">
              {contact.socialMedia.map((item, index) => (
                <a
                  key={index}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-social-item common-text"
                >
                  <span className="contact-social-icon">
                    {item.icon === "email" ? (
                      <EmailOutlinedIcon fontSize="small" />
                    ) : (
                      <i className={item.icon}></i>
                    )}
                  </span>
                  <span>{item.name}</span>
                </a>
              ))}
            </div>
          </div>

          <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label className="common-text" htmlFor="fullName">{contact.fullName}</label>
              <input type="text" id="fullName" name="from_name" required />
            </div>

            <div className="form-group">
              <label className="common-text" htmlFor="email">{contact.email}</label>
              <input type="email" id="email" name="reply_to" required />
            </div>

            <div className="form-group">
              <label className="common-text" htmlFor="subject">{contact.subject}</label>
              <input type="text" id="subject" name="subject" required />
            </div>

            <div className="form-group">
              <label className="common-text" htmlFor="message">{contact.message}</label>
              <textarea id="message" name="message" rows="5" required />
            </div>

            <button type="submit" disabled={sending} className="contact-submit-btn common-text glow">
              {sending ? contact.sending : contact.send}
            </button>

            {status === "success" && (
              <p className="contact-status success common-text">{contact.successMsg}</p>
            )}
            {status === "error" && (
              <p className="contact-status error common-text">{contact.errorMsg}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
