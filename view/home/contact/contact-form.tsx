"use client";

import { useState } from "react";
import { sendEmail } from "@/app/actions/send-email";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{ success?: boolean; message?: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    const formData = new FormData(e.currentTarget);
    
    try {
      const result = await sendEmail(formData);
      
      if (result.success) {
        setStatus({ success: true, message: "Message sent successfully!" });
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus({ success: false, message: result.error || "Failed to send message." });
      }
    } catch (error) {
      setStatus({ success: false, message: "An unexpected error occurred." });
    } finally {
      setIsSubmitting(false);
      // Auto dismiss success message
      setTimeout(() => {
        setStatus(null);
      }, 5000);
    }
  };

  return (
    <div className="rounded-3xl border border-border/60 bg-muted/25 p-6 shadow-sm sm:p-8 h-full">
      <h3 className="text-2xl font-bold text-foreground mb-6">Send me a message</h3>
      
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <div className="flex flex-col sm:flex-row gap-5">
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="name" className="text-sm font-medium text-muted-foreground">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              className="rounded-xl border border-border/60 bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-foreground focus:outline-none focus:ring-1 focus:ring-foreground transition-colors"
              placeholder="John Doe"
            />
          </div>
          
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="email" className="text-sm font-medium text-muted-foreground">
              Your Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              className="rounded-xl border border-border/60 bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-foreground focus:outline-none focus:ring-1 focus:ring-foreground transition-colors"
              placeholder="john@example.com"
            />
          </div>
        </div>
        
        <div className="flex flex-col gap-2">
          <label htmlFor="subject" className="text-sm font-medium text-muted-foreground">
            Subject
          </label>
          <input
            type="text"
            name="subject"
            id="subject"
            required
            className="rounded-xl border border-border/60 bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-foreground focus:outline-none focus:ring-1 focus:ring-foreground transition-colors"
            placeholder="How can I help you?"
          />
        </div>
        
        <div className="flex flex-col gap-2">
          <label htmlFor="message" className="text-sm font-medium text-muted-foreground">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            className="rounded-xl border border-border/60 bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-foreground focus:outline-none focus:ring-1 focus:ring-foreground transition-colors resize-none"
            placeholder="Write your message here..."
          ></textarea>
        </div>
        
        {status && (
          <div className={`p-3 rounded-lg text-sm ${status.success ? 'bg-emerald-500/10 text-emerald-500' : 'bg-red-500/10 text-red-500'}`}>
            {status.message}
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="mt-2 w-full rounded-xl bg-foreground px-6 py-3.5 text-sm font-semibold text-background shadow-md hover:bg-foreground/90 focus:outline-none focus:ring-2 focus:ring-foreground focus:ring-offset-2 focus:ring-offset-background disabled:opacity-70 disabled:cursor-not-allowed transition-all"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
}
