import React, { useState } from 'react';
import { personalData } from '../data/portfolioData';

export default function Contact({ onEmailClick }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json().catch(() => ({}));

      if (response.ok && result.success !== false) {
        setStatus({
          type: 'success',
          text: 'Thank you! Your message has been sent successfully.'
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        const errMsg = result.error || 'Failed to send message. Please try again or email directly.';
        setStatus({
          type: 'error',
          text: errMsg
        });
      }
    } catch (err) {
      console.error('Contact Form Submit Error:', err);
      setStatus({
        type: 'error',
        text: 'Could not connect to the mail server. You can also reach out directly via satyaprem619@gmail.com!'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact">
      <div className="contact-card">
        <div className="contact-grid-layout">
          {/* LEFT COLUMN: Info, Heading & Quick Connect Links */}
          <div className="contact-left">
            <div className="section-tag">Get In Touch</div>
            <h2 className="contact-title">Let's Build Something Great Together</h2>
            <p className="contact-desc">
              I am actively seeking software engineering roles, backend development opportunities, and innovative AI/full-stack collaborations. Whether you have a question or an exciting opportunity, feel free to reach out!
            </p>

            <div className="contact-info-list">
              <a
                href={`mailto:${personalData.email}?subject=Hello%20Satya,`}
                onClick={onEmailClick}
                className="contact-info-item"
                title="Send email"
              >
                <div className="contact-info-icon">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </div>
                <div className="contact-info-content">
                  <span className="contact-info-label">Email</span>
                  <span className="contact-info-val">{personalData.email}</span>
                </div>
              </a>

              <a
                href={personalData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-info-item"
                title="LinkedIn Profile"
              >
                <div className="contact-info-icon">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </div>
                <div className="contact-info-content">
                  <span className="contact-info-label">LinkedIn</span>
                  <span className="contact-info-val">linkedin.com/in/satya-prem</span>
                </div>
              </a>

              <a
                href={personalData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-info-item"
                title="GitHub Profile"
              >
                <div className="contact-info-icon">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                </div>
                <div className="contact-info-content">
                  <span className="contact-info-label">GitHub</span>
                  <span className="contact-info-val">github.com/SATYA-PREM</span>
                </div>
              </a>

              <div className="contact-info-item non-link">
                <div className="contact-info-icon">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div className="contact-info-content">
                  <span className="contact-info-label">Location</span>
                  <span className="contact-info-val">{personalData.location}</span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Resend Interactive Form */}
          <div className="contact-right">
            <h3 className="form-card-title">Send a Direct Message</h3>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Your Name *</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="form-input"
                    placeholder="e.g. Alex Johnson"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Your Email *</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="form-input"
                    placeholder="alex@company.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  className="form-input"
                  placeholder="e.g. Backend Engineer Role / Project Inquiry"
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="form-input form-textarea"
                  placeholder="Write your message here..."
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>

              {status && (
                <div className={`form-status ${status.type}`}>
                  {status.type === 'success' ? '✓ ' : '✕ '}
                  {status.text}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="btn-primary form-submit-btn"
              >
                {loading ? (
                  <>
                    <span className="spinner" />
                    Sending...
                  </>
                ) : (
                  <>
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="22" y1="2" x2="11" y2="13" />
                      <polygon points="22 2 15 22 11 13 2 9 22 2" />
                    </svg>
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
