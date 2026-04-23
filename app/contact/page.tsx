"use client";

import { useState, FormEvent } from "react";
import { useFormStatus } from "react-dom";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full py-4 bg-foreground text-background font-medium rounded hover:bg-foreground/90 disabled:opacity-50 transition-colors"
    >
      {pending ? "Sending..." : "Send message"}
    </button>
  );
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const formUrl = "https://formspree.io/f/xkokpypa";

    try {
      const response = await fetch(formUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="min-h-screen bg-background">
      <main className="pt-24 pb-20 px-6 md:px-12 lg:px-20 max-w-[1400px] mx-auto">
        <div className="mb-16">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-light mb-6">
            Get in touch
          </h1>
          <p className="text-lg text-foreground/60 max-w-2xl leading-relaxed">
            Have a project in mind or want to collaborate? I&apos;d love to hear
            from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <h2 className="font-display text-2xl font-light mb-8">
              Contact details
            </h2>

            <div className="space-y-8">
              <div>
                <p className="text-xs tracking-[0.2em] text-muted uppercase mb-2">
                  Email
                </p>
                <a
                  href="mailto:cyrilleotieno7@gmail.com"
                  className="text-lg link-underline text-foreground/80 hover:text-foreground"
                >
                  cyrilleotieno7@gmail.com
                </a>
              </div>

              <div>
                <p className="text-xs tracking-[0.2em] text-muted uppercase mb-2">
                  Phone
                </p>
                <a
                  href="tel:+254708073370"
                  className="text-lg link-underline text-foreground/80 hover:text-foreground"
                >
                  +254 708 073370
                </a>
              </div>

              <div>
                <p className="text-xs tracking-[0.2em] text-muted uppercase mb-2">
                  Location
                </p>
                <p className="text-lg text-foreground/80">Nairobi, Kenya</p>
              </div>

              <div>
                <p className="text-xs tracking-[0.2em] text-muted uppercase mb-2">
                  Social
                </p>
                <div className="flex flex-wrap gap-6">
                  <a
                    href="https://github.com/cyrillekey"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg link-underline text-foreground/80 hover:text-foreground"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://linkedin.com/in/cyrilleotieno"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg link-underline text-foreground/80 hover:text-foreground"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="font-display text-2xl font-light mb-8">
              Send a message
            </h2>

            {status === "success" ? (
              <div className="p-8 border border-accent/30 bg-accent/5 rounded">
                <p className="text-accent font-medium mb-2">Message sent!</p>
                <p className="text-foreground/60">
                  Thanks for reaching out. I&apos;ll get back to you as soon as
                  possible.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-6 text-sm link-underline text-foreground/70 hover:text-foreground"
                >
                  Send another message →
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs tracking-[0.2em] text-muted uppercase mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-transparent border border-foreground/20 rounded focus:border-foreground/50 focus:outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs tracking-[0.2em] text-muted uppercase mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-transparent border border-foreground/20 rounded focus:border-foreground/50 focus:outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-xs tracking-[0.2em] text-muted uppercase mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-transparent border border-foreground/20 rounded focus:border-foreground/50 focus:outline-none transition-colors"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs tracking-[0.2em] text-muted uppercase mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-transparent border border-foreground/20 rounded focus:border-foreground/50 focus:outline-none transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <SubmitButton />

                {status === "error" && (
                  <p className="text-red-500 text-sm">
                    Something went wrong. Please try again or email directly.
                  </p>
                )}
              </form>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
