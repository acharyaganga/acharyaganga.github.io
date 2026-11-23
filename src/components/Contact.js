import React, { useState } from 'react';
import { SiGithub, SiLinkedin, SiMinutemailer, SiBluesky } from 'react-icons/si';
import { FiMail } from 'react-icons/fi';
import ScrollReveal from '../hooks/ScrollReveal';

// Public by design: Web3Forms keys only identify the destination inbox.
const WEB3FORMS_ACCESS_KEY = "8e48d8bc-200b-45ac-8c14-2b600d0f7404";

const inputClass =
  "w-full px-4 py-3 rounded-md bg-white/90 dark:bg-gray-900/50 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-accent";

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
    <ScrollReveal variant="slide-up">
      <section id="contact" className="scroll-mt-24 pt-6 pb-16 lg:pt-10 lg:pb-20 bg-gradient-to-b from-slate-100 via-white to-slate-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden relative">

        <div className="container mx-auto px-4 sm:px-6">
          <header className="text-center mb-8">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white relative inline-block after:block after:h-1 after:bg-primary-accent dark:after:bg-primary-accent-dark after:w-12 after:mt-2 after:mx-auto">
              Let’s Build Something Amazing
            </h2>
            <p className="mt-4 max-w-xl mx-auto text-base text-gray-600 dark:text-gray-400">
              I’m open to new opportunities, collaborations, or just a friendly chat. Feel free to reach out!
            </p>
          </header>

          <div className="group max-w-6xl mx-auto bg-white/70 dark:bg-gray-800/60 backdrop-blur-2xl border border-primary-accent/20 dark:border-gray-700/40 rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] p-8 md:p-14 grid gap-12 md:grid-cols-[3fr_2fr] md:items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-semibold text-gray-900 dark:text-white text-center md:text-left">
                Get in Touch
              </h3>
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
                    rows="4"
                    placeholder="Your Message"
                    required
                    className={inputClass}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={sending}
                  className={`w-full inline-flex justify-center items-center gap-3 rounded-full px-6 py-3 text-base font-semibold text-white shadow-md transition-all duration-300 disabled:opacity-60 disabled:cursor-wait ${
                    sent
                      ? "bg-green-700 hover:bg-green-800"
                      : "bg-primary-accent hover:scale-105 hover:shadow-xl dark:hover:bg-primary-accent-dark-hover"
                  }`}
                >
                  <SiMinutemailer className="w-5 h-5 transition-transform duration-200" />
                  {sent ? "Message Sent!" : sending ? "Sending..." : "Send Message"}
                </button>
                <p role="status" aria-live="polite" className="text-sm text-center text-gray-600 dark:text-gray-400">{result}</p>
              </form>
            </div>

            <div className="flex flex-row md:flex-col gap-6 md:gap-8 justify-center md:items-end md:pl-16 pt-6">
              <a
                href="https://github.com/acharyaganga"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-primary-accent dark:hover:text-primary-accent-dark transition-transform hover:scale-110 transform duration-300 ease-in-out"
              >
                <SiGithub className="w-8 h-8" />
                <span className="hidden md:inline text-lg font-medium">GitHub</span>
              </a>

              <a
                href="https://www.linkedin.com/in/acharyagan/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-primary-accent dark:hover:text-primary-accent-dark transition-transform hover:scale-110 transform duration-300 ease-in-out"
              >
                <SiLinkedin className="w-8 h-8" />
                <span className="hidden md:inline text-lg font-medium">LinkedIn</span>
              </a>

              <a
                href="mailto:ach.ganga@outlook.com"
                aria-label="Email"
                className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-primary-accent dark:hover:text-primary-accent-dark transition-transform hover:scale-110 transform duration-300 ease-in-out"
              >
                <FiMail className="w-8 h-8" />
                <span className="hidden md:inline text-lg font-medium">Email</span>
              </a>

              <a
                href="https://bsky.app/profile/gangaacharya.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Bluesky"
                className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-primary-accent dark:hover:text-primary-accent-dark transition-transform hover:scale-110 transform duration-300 ease-in-out"
              >
                <SiBluesky className="w-8 h-8" />
                <span className="hidden md:inline text-lg font-medium">Bluesky</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}