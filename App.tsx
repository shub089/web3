"use client";

import React, { useState, useEffect, FC } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { IoLocationOutline, IoCallOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";

const menuItems = [
  "Home",
  "About Us",
  "Portfolio",
  "Testimonials",
  "Contact",
  "Blog",
  "Pages",
  "Shop",
  "Elements",
];

// Floating Label Input
interface InputProps {
  label: string;
  type: string;
}

const FloatingInput: FC<InputProps> = ({ label, type }) => (
  <div className="relative">
    <input
      type={type}
      required
      className="peer w-full bg-transparent border border-white/20 rounded-md px-4 pt-6 pb-2 text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
      placeholder={label}
    />
    <label className="absolute left-4 top-2 text-sm text-white/60 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-white/40 transition-all">
      {label}
    </label>
  </div>
);

// Floating Label Textarea
interface TextareaProps {
  label: string;
}

const FloatingTextarea: FC<TextareaProps> = ({ label }) => (
  <div className="relative">
    <textarea
      rows={4}
      required
      className="peer w-full bg-transparent border border-white/20 rounded-md px-4 pt-6 pb-2 text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
      placeholder={label}
    />
    <label className="absolute left-4 top-2 text-sm text-white/60 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-white/40 transition-all">
      {label}
    </label>
  </div>
);

// Contact Info Item
interface ContactItemProps {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

const ContactItem: FC<ContactItemProps> = ({ icon, title, desc }) => (
  <div className="flex gap-3 items-start">
    <span className="text-2xl mt-1 text-blue-400">{icon}</span>
    <div>
      <p className="font-semibold">{title}</p>
      <p className="text-sm text-white/70">{desc}</p>
    </div>
  </div>
);

const CryptoNavbar: FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "auto";
  }, [isMobileMenuOpen]);

  return (
    <div className="relative">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white/10 backdrop-blur-md border-b border-white/20 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <motion.div
            className="relative inline-block text-2xl font-extrabold tracking-wider text-white glow-text"
          >
            <h1 className="relative z-10 cursor-pointer">T28 CAPITAL</h1>
            <div className="absolute -inset-1 z-0 blur-xl bg-white opacity-10 animate-pulse rounded-lg" />
          </motion.div>

          <div className="hidden md:flex space-x-8 items-center">
            {menuItems.map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="group relative text-lg font-medium text-white hover:text-neon-green transition duration-300"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {item}
                <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </motion.a>
            ))}
            <motion.button
              className="px-8 py-3 text-lg font-semibold rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-md transition duration-300 ease-in-out cursor-pointer"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              whileHover={{
                scale: 1.05,
                boxShadow:
                  "0 0 15px rgba(99, 102, 241, 0.6), 0 0 25px rgba(168, 85, 247, 0.5)", // glow effect
              }}
              whileTap={{ scale: 0.95 }}
            >
              Let's Talk
            </motion.button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed top-0 right-0 h-full w-2/3 bg-white/10 backdrop-blur-md border-l border-white/20 shadow-lg p-6 z-40 flex flex-col space-y-6"
          >
            {menuItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-xl font-medium hover:text-neon-green transition duration-300"
              >
                {item}
              </a>
            ))}
            <button className="px-5 py-2 rounded-full bg-neon-blue hover:bg-neon-green text-white font-semibold transition-all duration-300 shadow-lg">
              Sign Up
            </button>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-[#0a0a33] to-black flex items-center justify-center text-center px-6 overflow-hidden z-10">
        <div className="relative z-10 max-w-3xl space-y-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-white"
          >
            We{" "}
            <TypeAnimation
              sequence={["Develop", 2000, "Devote", 2000, "Deploy", 2000]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent"
            />{" "}
            invest in aspiring Web3 protocols
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-gray-300 text-lg md:text-xl"
          >
            T28 Capital helps startups grow from MVP to MSP and co-invests in
            their journeys.
          </motion.p>

          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow:
                "0 0 20px rgba(139, 92, 246, 0.7), 0 0 30px rgba(59, 130, 246, 0.6)", // purple + blue glow
            }}
            whileTap={{ scale: 0.95 }}
            className="mt-4 px-8 py-3 text-lg font-semibold rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-md transition duration-300 ease-in-out cursor-pointer"
          >
            Find How
          </motion.button>
        </div>

        {/* Background Blobs */}
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-blue-500 rounded-full filter blur-3xl opacity-40 z-0 animate-[blobMove_8s_ease-in-out_infinite]"></div>
        <div className="absolute top-32 left-1/2 w-[250px] h-[250px] bg-blue-500 rounded-full filter blur-3xl opacity-40 z-0 animate-[blobMove_8s_ease-in-out_infinite]"></div>
      </section>

      {/* Contact Section */}
      <section className="relative bg-gradient-to-tr from-[#000] via-[#0a0a33] to-[#000] px-4 py-24 overflow-hidden text-white">
      <div className="absolute w-96 h-96 bg-blue-700 rounded-full opacity-20 blur-3xl top-0 -left-20 animate-pulse-slow"></div>
<div className="absolute w-96 h-96 bg-fuchsia-600 rounded-full opacity-20 blur-2xl bottom-0 -right-20 animate-pulse-slower"></div>


        <div className="relative max-w-6xl mx-auto text-center z-10">
          <h2 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-blue-500 to-fuchsia-500 text-transparent bg-clip-text">
            Get in Touch
          </h2>
          <p className="text-white/70 mb-12 max-w-xl mx-auto">
            Reach out to us for any inquiries, partnerships, or support. We're
            here to help you succeed.
          </p>

          <div className="md:flex md:space-x-10 backdrop-blur-xl bg-white/5 rounded-3xl border border-white/10 shadow-[0_0_30px_rgba(255,255,255,0.05)] p-8">
            {/* Form */}
            <form className="flex-1 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <FloatingInput label="Full Name" type="text" />
                <FloatingInput label="Email Address" type="email" />
              </div>
              <FloatingInput label="Subject" type="text" />
              <FloatingTextarea label="Your Message" />
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-purple-600 hover:to-blue-600 transition-all px-6 py-3 rounded-xl text-white font-semibold hover:scale-105 shadow-lg cursor-pointer">
                ✨ Send Message
              </button>
            </form>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: -50, rotateX: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mt-10 md:mt-0 md:w-1/3 bg-white/10 border border-white/10 p-6 rounded-2xl space-y-6 text-left backdrop-blur-lg"
            >
              <h3 className="text-2xl font-bold">Reach Us At</h3>
              <ContactItem
                icon={<IoLocationOutline />}
                title="Hong Kong Office"
                desc="23/F, Chung Kiu Commercial Building, Mong Kok"
              />
              <ContactItem
                icon={<IoLocationOutline />}
                title="France Office"
                desc="60 Rue Francois 1er, Paris, France"
              />
              <ContactItem
                icon={<CiMail />}
                title="Email"
                desc="contact@yourcompany.com"
              />
              <ContactItem
                icon={<IoCallOutline />}
                title="Phone"
                desc="+1 (555) 123-4567"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CryptoNavbar;
