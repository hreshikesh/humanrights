// src/components/home/contact/Contact.jsx
import React, { useState } from "react";
import { 
  Phone, 
  Mail, 
  MapPin, 
  User, 
  MessageSquare, 
  Send 
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    mobileNumber: "",
    emailAddress: "",
    subject: "",
    message: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  // Pre-populates default email app with user's inputted details
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const { fullName, mobileNumber, emailAddress, subject, message } = formData;
    
    const emailBody = `Full Name: ${fullName}%0D%0AMobile Number: ${mobileNumber}%0D%0AEmail Address: ${emailAddress}%0D%0A%0D%0AMessage:%0D%0A${message}`;
    const mailtoUri = `mailto:info@ihrac.org?subject=${encodeURIComponent(subject || "IHRAC General Inquiry")}&body=${emailBody}`;
    
    window.location.href = mailtoUri;
  };

  return (
    <section id="contact" className="relative bg-slate-50 py-20 lg:py-28 overflow-hidden">
      {/* Accent design highlights */}
      <div className="pointer-events-none absolute right-0 top-0 h-64 w-64 bg-[#D4AF37]/5 blur-[80px]" />
      <div className="pointer-events-none absolute left-0 bottom-0 h-64 w-64 bg-[#0B1F3A]/5 blur-[80px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* ================= LEFT COLUMN: Contact Desk ================= */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-white border border-slate-100 rounded-[32px] p-6 sm:p-10 shadow-[0_10px_30px_rgba(11,31,58,0.04)]">
            <div>
              <h2 className="text-2xl sm:text-3xl font-black text-[#0B1F3A] text-left">
                Official Contact Desk
              </h2>
              <p className="mt-3 text-slate-500 text-sm leading-relaxed text-left">
                For grievances, support, collaboration, or general inquiries, connect with us through the following official channels.
              </p>

              {/* Vertical Contact Channels List */}
              <div className="mt-8 space-y-4">
                {/* Channel 1: Mobile */}
                <div className="flex items-center gap-4 p-4 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-slate-50 transition-all text-left">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#0B1F3A] text-[#D4AF37] shadow-md">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400">
                      Mobile
                    </span>
                    <p className="text-sm font-bold text-[#0B1F3A] mt-0.5">
                      +918957422101
                    </p>
                  </div>
                </div>

                {/* Channel 2: Email */}
                <div className="flex items-center gap-4 p-4 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-slate-50 transition-all text-left">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#0B1F3A] text-[#D4AF37] shadow-md">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400">
                      Email
                    </span>
                    <p className="text-sm font-bold text-[#0B1F3A] mt-0.5">
                    contactihrac@gmail.com
                    </p>
                  </div>
                </div>

                {/* Channel 3: Office */}
                <div className="flex items-center gap-4 p-4 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-slate-50 transition-all text-left">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#0B1F3A] text-[#D4AF37] shadow-md">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400">
                      Office
                    </span>
                    <p className="text-sm font-bold text-[#0B1F3A] mt-0.5">
                      New Delhi, India (National Capital Region)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Warning / Commitment Box */}
            <div className="mt-8 rounded-2xl border border-[#D4AF37]/20 bg-[#D4AF37]/5 p-5 text-left">
              <p className="text-xs leading-relaxed text-slate-600">
                <strong className="text-[#0B1F3A] font-bold">Response Commitment:</strong> We aim to respond to all genuine inquiries as promptly as possible.
              </p>
            </div>
          </div>

          {/* ================= RIGHT COLUMN: Form Message Module ================= */}
          <div className="lg:col-span-7 bg-white border border-slate-100 rounded-[32px] p-6 sm:p-10 shadow-[0_10px_30px_rgba(11,31,58,0.04)] flex flex-col justify-between">
            <div>
              <h2 className="text-2xl sm:text-3xl font-black text-[#0B1F3A] text-left">
                Send a Message
              </h2>
              <p className="mt-3 text-slate-500 text-sm leading-relaxed text-left">
                Fill in the form below. It will open your email app to send directly.
              </p>

              {/* Message inputs layout */}
              <form onSubmit={handleFormSubmit} className="mt-8 space-y-5 text-left">
                
                {/* Row 1: Full Name & Mobile */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-[#0B1F3A] uppercase tracking-wider">
                      Full Name
                    </label>
                    <div className="relative flex items-center">
                      <User className="absolute left-3.5 h-4 w-4 text-slate-400" />
                      <input
                        required
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="Enter your full name"
                        className="w-full bg-slate-50/50 border border-slate-200/80 rounded-xl pl-10 pr-4 py-3 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#D4AF37] focus:bg-white transition-all text-sm"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-[#0B1F3A] uppercase tracking-wider">
                      Mobile Number
                    </label>
                    <div className="relative flex items-center">
                      <Phone className="absolute left-3.5 h-4 w-4 text-slate-400" />
                      <input
                        required
                        type="tel"
                        name="mobileNumber"
                        value={formData.mobileNumber}
                        onChange={handleInputChange}
                        placeholder="Enter your mobile number"
                        className="w-full bg-slate-50/50 border border-slate-200/80 rounded-xl pl-10 pr-4 py-3 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#D4AF37] focus:bg-white transition-all text-sm"
                      />
                    </div>
                  </div>
                </div>

                {/* Row 2: Email & Subject */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-[#0B1F3A] uppercase tracking-wider">
                      Email Address
                    </label>
                    <div className="relative flex items-center">
                      <Mail className="absolute left-3.5 h-4 w-4 text-slate-400" />
                      <input
                        required
                        type="email"
                        name="emailAddress"
                        value={formData.emailAddress}
                        onChange={handleInputChange}
                        placeholder="Enter your email"
                        className="w-full bg-slate-50/50 border border-slate-200/80 rounded-xl pl-10 pr-4 py-3 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#D4AF37] focus:bg-white transition-all text-sm"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-[#0B1F3A] uppercase tracking-wider">
                      Subject
                    </label>
                    <div className="relative flex items-center">
                      <MessageSquare className="absolute left-3.5 h-4 w-4 text-slate-400" />
                      <input
                        required
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="Enter subject"
                        className="w-full bg-slate-50/50 border border-slate-200/80 rounded-xl pl-10 pr-4 py-3 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#D4AF37] focus:bg-white transition-all text-sm"
                      />
                    </div>
                  </div>
                </div>

                {/* Row 3: Message Textarea */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-[#0B1F3A] uppercase tracking-wider">
                    Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Write your message here..."
                    className="w-full bg-slate-50/50 border border-slate-200/80 rounded-xl px-4 py-3 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#D4AF37] focus:bg-white transition-all text-sm resize-none"
                  />
                </div>

                {/* Submitting CTA Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="group w-full py-4 rounded-xl bg-[#0B1F3A] text-white font-bold text-sm uppercase tracking-wider hover:bg-[#112a4f] hover:shadow-xl hover:shadow-[#0B1F3A]/20 flex items-center justify-center gap-2 transition-all"
                  >
                    <span>Send Message via Email</span>
                    <Send className="h-4 w-4 text-[#D4AF37] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                  <p className="text-center text-[10px] text-slate-400 mt-3 font-semibold tracking-wide">
                    This will open your default email application.
                  </p>
                </div>

              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;