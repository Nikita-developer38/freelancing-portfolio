"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaServer, FaCloudUploadAlt } from "react-icons/fa";

const services = [
  {
    icon: <FaReact className="text-blue-500 text-5xl" />,
    title: "Frontend Development",
    description:
      "Modern and responsive UI using React, Tailwind CSS, and more.",
  },
  {
    icon: <FaNodeJs className="text-green-600 text-5xl" />,
    title: "Backend Development",
    description:
      "Secure and scalable server-side logic with Node.js and Express.",
  },
  {
    icon: <FaServer className="text-purple-600 text-5xl" />,
    title: "Full Stack Development",
    description:
      "End-to-end web apps using the MERN stack with seamless integration.",
  },
  {
    icon: <FaCloudUploadAlt className="text-indigo-600 text-5xl" />,
    title: "Deployment",
    description: "Deploying apps using platforms like Vercel, Netlify.",
  },
];

const Services = () => {
  return (
    <section className="py-16 my-20 bg-gray-50 dark:bg-black" id="services">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12"
        >
          My Services
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2 dark:text-black">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
