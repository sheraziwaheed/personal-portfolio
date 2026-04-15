import React, { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function ContactSection() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true); // 🔄 start loading

    const formData = new FormData(e.target);

    formData.append("access_key", "e63fce47-f69e-405a-bc73-db9c468cc9ae");
    formData.append("subject", "New Message from Portfolio");
    formData.append("from_name", "Sherazi Portfolio");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setIsSent(true);
        e.target.reset();
        setTimeout(() => setIsSent(false), 4000);
      } else {
        alert("Something went wrong!");
      }
    } catch (error) {
      alert("Error sending message.");
    } finally {
      setIsLoading(false); // 🔚 stop loading
    }
  };

  return (
    <section
      id="Contact"
      className="relative bg-[#0f1720] text-white py-20 px-6 border-t border-yellow-400"
    >
      {/* ✅ Success Message */}
      {isSent && (
        <div className="absolute z-50 flex items-center px-6 py-3 space-x-2 text-black transform -translate-x-1/2 bg-yellow-400 rounded-md shadow-lg top-6 left-1/2 animate-fadeIn">
          <span className="text-xl">✅</span>
          <span className="font-semibold">Message sent successfully!</span>
        </div>
      )}
      <header className="mb-8 text-center">
        <h1 className="text-5xl font-extrabold tracking-tight">
          <span className="text-white">Get In </span>
          <span className="text-yellow-400">Touch</span>
        </h1>
        <div className="w-full max-w-3xl mx-auto mt-16">
          <div className="h-1 bg-yellow-400 rounded-full" />
        </div>
      </header>

      <div className="grid max-w-6xl gap-10 mx-auto md:grid-cols-2">
        {/* ✅ Left Side - Form Section */}
        <div className="p-8 rounded-2xl bg-[#1a2430]/70 border border-gray-700 shadow-[0_4px_20px_rgba(0,0,0,0.3)] backdrop-blur-sm">
          <h2 className="mb-6 text-3xl font-bold text-yellow-400">
            Send Me a Message
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full bg-[#1e2a38] p-3 rounded-md border border-gray-700 focus:outline-none focus:border-yellow-400"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full bg-[#1e2a38] p-3 rounded-md border border-gray-700 focus:outline-none focus:border-yellow-400"
              required
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="w-full bg-[#1e2a38] p-3 rounded-md border border-gray-700 focus:outline-none focus:border-yellow-400"
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              className="w-full bg-[#1e2a38] p-3 rounded-md border border-gray-700 focus:outline-none focus:border-yellow-400 resize-none"
              required
            ></textarea>
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 font-semibold text-black transition-all duration-300 bg-yellow-400 rounded-md hover:bg-yellow-500 disabled:opacity-60"
            >
              {isLoading
                ? "Sending..."
                : isSent
                  ? "Message Sent ✅"
                  : "Send Message"}
            </button>
          </form>
        </div>

        {/* ✅ Right Side - Contact Info Section */}
        <div className="space-y-8">
          <div className="p-8 rounded-2xl bg-[#1a2430]/70 border border-gray-700 shadow-[0_4px_20px_rgba(0,0,0,0.3)] backdrop-blur-sm">
            <h2 className="mb-4 text-3xl font-bold text-yellow-400">
              Contact Information
            </h2>
            <div className="space-y-4 text-lg">
              <p>
                📞 <span className="text-yellow-400">Phone:</span> +92 309
                4876831
              </p>
              <p>
                📧 <span className="text-yellow-400">Email:</span>{" "}
                sheraziwaheed4@gmail.com
              </p>
              <p>
                📍 <span className="text-yellow-400">Location:</span> Lahore,
                PUNJAB, Pakistan
              </p>
            </div>
          </div>

          <div className="p-8 rounded-2xl bg-[#1a2430]/70 border border-gray-700 shadow-[0_4px_20px_rgba(0,0,0,0.3)] backdrop-blur-sm">
            <h3 className="mb-4 text-2xl font-semibold text-yellow-400">
              Follow Me
            </h3>
            <div className="flex space-x-6 text-3xl">
              <a
                href="https://github.com/sheraziwaheed"
                className="transition-all duration-300 hover:-translate-y-1 hover:text-yellow-400"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/sherazi-waheed-945962364/"
                rel="noopener noreferrer"
                className="transition-all duration-300 hover:-translate-y-1 hover:text-yellow-400"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
