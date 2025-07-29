"use client";
import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import { FloatingDock } from "./Floating-Dock";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-10 mt-20">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Branding */}
        <div>
          <h2 className="text-xl font-bold text-white">Nikita Murmure</h2>
          <p className="mt-2 text-sm">Full Stack Web Developer</p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">Quick Links</h3>
          <ul className="space-y-1 text-sm">
            <li>
              <a href="#home" className="hover:text-white transition">
                Home
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-white transition">
                Services
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-white transition">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-white transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div>
          <FloatingDock
            items={[
              {
                title: "GitHub",
                icon: <FaGithub />,
                href: "https://github.com/Nikita-developer38",
              },
              {
                title: "LinkedIn",
                icon: <FaLinkedin />,
                href: "https://www.linkedin.com/in/nikita-murmure-37706b250",
              },
              {
                title: "Mail",
                icon: <FaEnvelope />,
                href: "mailto:nikitamurmure3835@gmail.com",
              },

              {
                title: "Call",
                icon: <IoIosCall />,
                href: "tel:+917028218138",
              },
            ]}
          />
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
        &copy; {new Date().getFullYear()} Nikita Murmure. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
