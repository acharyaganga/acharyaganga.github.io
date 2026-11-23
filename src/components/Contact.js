import React, { useState } from 'react';
import { SiGithub, SiLinkedin, SiMinutemailer, SiBluesky } from 'react-icons/si';
import { FiMail } from 'react-icons/fi';
import Reveal from './Reveal';
import { links } from '../data';

// Public by design: Web3Forms keys only identify the destination inbox.
const WEB3FORMS_ACCESS_KEY = "8e48d8bc-200b-45ac-8c14-2b600d0f7404";

const inputClass =
  "w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder-gray-500 transition-colors focus:border-primary-accent focus:outline-none focus:ring-2 focus:ring-primary-accent/30 dark:border-gray-700 dark:bg-gray-900/60 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-accent-dark dark:focus:ring-primary-accent-dark/30";

const contactLinks = [
  { href: links.email, label: 'Email', icon: FiMail },
  { href: links.linkedin, label: 'LinkedIn', icon: SiLinkedin, external: true },
  { href: links.github, label: 'GitHub', icon: SiGithub, external: true },
  { href: links.bluesky, label: 'Bluesky', icon: SiBluesky, external: true },
];

export default function Contact() {
  const [result, setResult] = useState("");
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    setSending(true);
    setSent(false);
    setResult("Sending...");

    const formData = new FormData(form);
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();

      if (data.success) {
        setSent(true);
        setResult("Thanks! Your message has been sent.");
        form.reset();
      } else {
        setResult(data.message || "Something went wrong. Please try again.");
      }
    } catch (_) {
      setResult("Could not send the message. Please try again, or use the email link.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="section">
      <div className="shell">
        <Reveal>
          <h2 className="section-title">Contact</h2>
          <p className="mt-4 max-w-xl text-gray-600 dark:text-gray-300">
            I’m open to new opportunities and collaborations. Send a message and I’ll get back to you.
          </p>
        </Reveal>

        <Reveal className="surface mt-8 grid gap-10 p-6 sm:p-9 md:grid-cols-[3fr_2fr] md:gap-14">
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Honeypot: Web3Forms drops submissions where this is checked. */}
            <input
              type="checkbox"
              name="botcheck"
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
            />
            <div>
              <label htmlFor="contact-name" className="sr-only">Your name</label>
              <input
                id="contact-name"
                type="text"
                name="name"
                autoComplete="name"
                placeholder="Your Name"
                required
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="contact-email" className="sr-only">Your email</label>
              <input
                id="contact-email"
                type="email"
                name="email"
                autoComplete="email"
                placeholder="Your Email"
                required
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="contact-message" className="sr-only">Your message</label>
              <textarea
                id="contact-message"
                name="message"
                rows="5"
                placeholder="Your Message"
                required
                className={inputClass}
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={sending}
              className={`btn w-full justify-center disabled:cursor-wait disabled:opacity-60 ${
                sent ? "bg-green-700 text-white hover:bg-green-800" : "btn-primary"
              }`}
            >
              <SiMinutemailer className="h-4 w-4" aria-hidden="true" />
              {sent ? "Message Sent!" : sending ? "Sending..." : "Send Message"}
            </button>
            <p role="status" aria-live="polite" className="min-h-[1.25rem] text-center text-sm text-gray-600 dark:text-gray-400">
              {result}
            </p>
          </form>

          <ul className="flex flex-row flex-wrap justify-center gap-2 md:flex-col md:justify-start md:gap-1">
            {contactLinks.map(({ href, label, icon: Icon, external }) => (
              <li key={label}>
                <a
                  href={href}
                  aria-label={label}
                  {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="flex items-center gap-3 rounded-xl px-3 py-3 font-medium text-gray-700 transition-colors hover:bg-gray-100 hover:text-primary-accent dark:text-gray-300 dark:hover:bg-gray-700/50 dark:hover:text-primary-accent-dark"
                >
                  <Icon className="h-6 w-6 flex-shrink-0" aria-hidden="true" />
                  <span className="hidden md:inline">{label}</span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
