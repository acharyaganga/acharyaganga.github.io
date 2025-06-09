import React, { useState } from 'react';
import { SiGithub, SiLinkedin, SiMinutemailer, SiBluesky } from 'react-icons/si';
import { FiMail } from 'react-icons/fi';
import ScrollReveal from '../hooks/ScrollReveal';

export default function Contact() {
  const [result, setResult] = useState("");

  return (
    <ScrollReveal variant="slide-up">
      <section id="contact" className="scroll-mt-24 pt-6 pb-16 lg:pt-10 lg:pb-20 bg-gradient-to-b from-slate-100 via-white to-slate-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden relative">

        <div className="container mx-auto px-4 sm:px-6">
          <header className="text-center mb-8">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white relative inline-block after:block after:h-1 after:bg-primary-accent after:w-12 after:mt-2 after:mx-auto">
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
              <form onSubmit={async (event) => {
                event.preventDefault();
                setResult("Sending...");
                const formData = new FormData(event.target);
                formData.append("access_key", "8e48d8bc-200b-45ac-8c14-2b600d0f7404");

                const response = await fetch("https://api.web3forms.com/submit", {
                  method: "POST",
                  body: formData,
                });

                const data = await response.json();

                if (data.success) {
                  setResult("Form Submitted Successfully!");
                  event.target.reset();
                } else {
                  console.log("Error", data);
                  setResult(data.message);
                }
              }} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-3 rounded-md bg-white/90 dark:bg-gray-900/50 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-accent"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="w-full px-4 py-3 rounded-md bg-white/90 dark:bg-gray-900/50 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-accent"
                />
                <textarea
                  name="message"
                  rows="4"
                  placeholder="Your Message"
                  required
                  className="w-full px-4 py-3 rounded-md bg-white/90 dark:bg-gray-900/50 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-accent"
                ></textarea>
                <button
                  type="submit"
                  className={`w-full inline-flex justify-center items-center gap-3 rounded-full px-6 py-3 text-base font-semibold text-white shadow-md transition-all duration-300 ${
                    result === "Form Submitted Successfully!" 
                      ? "bg-green-600 hover:bg-green-700"
                      : "bg-primary-accent hover:scale-105 hover:shadow-xl dark:hover:bg-primary-accent-dark-hover"
                  }`}
                >
                  <SiMinutemailer className="w-5 h-5 transition-transform duration-200" />
                  {result === "Form Submitted Successfully!" ? "Message Sent!" : "Send Message"}
                </button>
                <p className="text-sm text-center text-gray-600 dark:text-gray-400">{result}</p>
              </form>
            </div>

            <div className="flex flex-row md:flex-col gap-6 md:gap-8 justify-center md:items-end md:pl-16 pt-6 animate-fadeInUp">
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