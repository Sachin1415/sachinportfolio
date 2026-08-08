import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      company: 'EC4YOU',
      position: 'Digital Marketing Specialist',
      type: 'Full-time',
      startDate: 'November 10, 2025',
      endDate: 'Present',
      description: 'Creating impactful digital content and campaigns, managing social media presence, developing marketing strategies, and coordinating creative production for digital marketing initiatives.',
      responsibilities: [
        'Content Strategy & Creation',
        'Social Media Marketing & Management',
        'Campaign Planning & Execution',
        'Video Production & Editing',
        'Brand Growth Strategy',
        'Client Communication & Coordination',
      ],
      skills: ['Content Writing', 'Social Media Marketing', 'Video Production', 'Campaign Planning', 'Brand Strategy'],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <section id="experience" className="bg-white pt-24 pb-32 px-6 md:px-12 w-full relative overflow-hidden font-sans">
      {/* Background pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-100/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-100/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div data-aos="fade-up" className="mb-16">
          <div className="inline-block border border-red-300 rounded-full px-5 py-1.5 text-sm text-red-600 font-bold mb-6 shadow-sm bg-red-50">
            Work Experience
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-5xl font-black text-gray-900 mb-4 tracking-tight">
            Professional Journey
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl font-medium">
            My professional experience in digital marketing, content creation, and brand strategy
          </p>
        </div>

        {/* Experience Timeline */}
        <motion.div
          className="relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Timeline line */}
          <div className="hidden md:block absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-red-400 via-red-500 to-red-400"></div>

          {/* Experience items */}
          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="relative md:ml-32"
              >
                {/* Timeline dot */}
                <div className="hidden md:flex absolute -left-12 top-6 items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.3 }}
                    className="w-6 h-6 bg-gradient-to-br from-red-400 to-red-600 rounded-full border-4 border-white shadow-lg"
                  ></motion.div>
                </div>

                {/* Card */}
                <motion.div
                  whileHover={{ y: -8 }}
                  className="group bg-white rounded-3xl border-2 border-red-100 shadow-sm hover:shadow-2xl hover:shadow-red-500/10 transition-all duration-500 p-8 md:p-10 overflow-hidden relative"
                >
                  {/* Background accent */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-red-50/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none"></div>

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Header */}
                    <div className="mb-6">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                        <div>
                          <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-2">{exp.company}</h3>
                          <p className="text-lg font-bold text-red-600">{exp.position}</p>
                        </div>
                        <div className="mt-4 md:mt-0 flex items-center gap-3">
                          <span className="inline-block px-4 py-1.5 bg-red-100 text-red-700 rounded-full text-xs font-bold">
                            {exp.type}
                          </span>
                        </div>
                      </div>

                      {/* Date range */}
                      <div className="flex items-center gap-2 text-sm font-semibold text-gray-500">
                        <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 4h-2V2h-2v2H9V2H7v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z" />
                        </svg>
                        <span>
                          {exp.startDate} — {exp.endDate}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed mb-6 font-medium">
                      {exp.description}
                    </p>

                    {/* Responsibilities */}
                    <div className="mb-6">
                      <h4 className="text-sm font-bold text-gray-900 mb-3 uppercase tracking-wide">Key Responsibilities</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {exp.responsibilities.map((resp, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm text-gray-600 font-medium">{resp}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Skills */}
                    <div>
                      <h4 className="text-sm font-bold text-gray-900 mb-3 uppercase tracking-wide">Skills Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, i) => (
                          <motion.span
                            key={i}
                            whileHover={{ scale: 1.05 }}
                            className="px-3 py-1.5 bg-gradient-to-r from-red-50 to-red-100 text-red-700 rounded-full text-xs font-semibold border border-red-200 hover:border-red-400 transition-all duration-300"
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 pt-12 border-t border-gray-200 text-center"
        >
          <p className="text-gray-600 mb-6 font-medium max-w-2xl mx-auto">
            Leveraging my expertise in digital marketing and creative production to deliver results-driven campaigns and content that elevate brand presence.
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-3.5 bg-gradient-to-r from-red-500 to-red-600 text-white font-bold rounded-full hover:shadow-lg hover:shadow-red-500/40 transition-all duration-300 transform hover:-translate-y-1"
          >
            Let's Collaborate
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
