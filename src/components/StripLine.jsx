import React from 'react';
import { motion } from 'framer-motion';

const StripLine = () => {
  const logos = [
    { name: 'GSS CarMakeOvers Semmbakkam', image: 'gss logo insta.jpg.jpeg' },
    { name: 'Vishaka Constructions', image: 'logo original.png' },
    { name: 'The Detailing MafiaTambaram', image: 'mafia logo.png' },
    
    { name: 'Relux Electric', image: 'Relux logo0.png' },
    { name: 'Sai Ashwini Homes', image: 'SAH LOGO.png' },
    { name: 'SLAM Madambakkam', image: 'SLAM LOGO PNG.png' },
   
    { name: 'FCA Sembakkam', image: 'FCA LOGO new version.png' },
    { name: 'Jayam Insurance', image: 'JAYAM f1.png' },
    { name: 'Netaji Vidhyalayam', image: 'Netaji School_logo.png' },
    { name: 'Southpoint Realtors', image: 'southpoint logo (secondary)-02.jpg.jpeg' },
    { name: 'Arun Marine Tourism', image: 'Marine tourism logo_01.png' },
    { name: 'PriyadharshiniMobiles', image: 'PDM logo 2.png' },
    { name: 'Sujes Bakes', image: 'Primary Logo PNG - Transparent.png' },
    { name: 'BLACK BOXES', image: 'BLACK BOXES.png' },
    { name: 'YUVIN Interiors ', image: 'YUVIN edited.png' },
    { name: 'GOGOCampign', image: 'gogo edited.png' }
  ];

  return (
    <section id="projects" className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 py-20 overflow-hidden font-sans relative">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-red-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <div data-aos="fade-up" className="text-center mb-16">
          <div className="inline-block border border-red-500/30 rounded-full px-5 py-1.5 text-sm text-red-400 font-bold mb-6 shadow-sm bg-red-500/5 backdrop-blur-sm">
            Featured Clients
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 tracking-tight">
            Brands I've Worked With
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto font-medium">
            Creating impactful digital content and campaigns for diverse businesses across multiple industries
          </p>
        </div>

        {/* Scrolling logos - First row */}
        <div className="relative mb-12 overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-900 via-gray-900 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-900 via-gray-900 to-transparent z-10 pointer-events-none"></div>

          <motion.div
            className="flex gap-8 items-center justify-start"
            animate={{ x: [0, -2400] }}
            transition={{
              duration: 35,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            {[...logos, ...logos].map((logo, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05, y: -8 }}
                className="flex-shrink-0 relative group"
              >
                <div className="w-40 h-40 flex flex-col items-center justify-center bg-white/5 border border-white/10 rounded-2xl px-6 py-4 backdrop-blur-sm hover:border-red-500/50 hover:bg-red-500/10 transition-all duration-300 cursor-pointer shadow-lg relative overflow-hidden">
                  <img
                    src={`/src/assets/logos/${logo.image}`}
                    alt={logo.name}
                    className="h-24 w-24 object-contain group-hover:brightness-125 transition-all duration-300 opacity-90 group-hover:opacity-100"
                  />
                  
                  {/* Brand name at bottom on hover */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-red-600 to-red-500 text-white px-2 py-2 text-center text-xs font-bold rounded-b-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-full group-hover:translate-y-0">
                    {logo.name}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Scrolling logos - Second row (reverse direction) */}
        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-900 via-gray-900 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-900 via-gray-900 to-transparent z-10 pointer-events-none"></div>

          <motion.div
            className="flex gap-8 items-center justify-start"
            animate={{ x: [-2400, 0] }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            {[...logos, ...logos].map((logo, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05, y: -8 }}
                className="flex-shrink-0 relative group"
              >
                <div className="w-40 h-40 flex flex-col items-center justify-center bg-white/5 border border-white/10 rounded-2xl px-6 py-4 backdrop-blur-sm hover:border-red-500/50 hover:bg-red-500/10 transition-all duration-300 cursor-pointer shadow-lg relative overflow-hidden">
                  <img
                    src={`/src/assets/logos/${logo.image}`}
                    alt={logo.name}
                    className="h-24 w-24 object-contain group-hover:brightness-125 transition-all duration-300 opacity-90 group-hover:opacity-100"
                  />
                  
                  {/* Brand name at bottom on hover */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-red-600 to-red-500 text-white px-2 py-2 text-center text-xs font-bold rounded-b-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-full group-hover:translate-y-0">
                    {logo.name}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom accent */}
        <div data-aos="fade-in" data-aos-delay="200" className="text-center mt-16 pt-12 border-t border-white/10">
          <p className="text-gray-400 text-sm md:text-base">
            <span className="text-red-400 font-bold">17+ brands</span> trusted me to elevate their digital presence
          </p>
        </div>
      </div>
    </section>
  );
};

export default StripLine;
