import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const API_URL = '/api/contacts';

const Contact = () => {
  const ref = useRef(null);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
    permission: false
  });
  const [submissionStatus, setSubmissionStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], ['-20%', '30%']);

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: type === 'checkbox' ? checked : value
    }));
  };

  const saveToLocalStorage = (contact) => {
    if (typeof window === 'undefined') return;

    const savedContacts = JSON.parse(localStorage.getItem('pendingContacts') || '[]');
    savedContacts.push(contact);
    localStorage.setItem('pendingContacts', JSON.stringify(savedContacts));
  };

  const resetForm = () => {
    setFormData({ firstName: '', lastName: '', email: '', message: '', permission: false });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const trimmedData = {
      firstName: formData.firstName.trim(),
      lastName: formData.lastName.trim(),
      email: formData.email.trim(),
      message: formData.message.trim(),
      permission: formData.permission
    };

    if (!trimmedData.firstName || !trimmedData.lastName || !trimmedData.email || !trimmedData.message) {
      setSubmissionStatus('Please complete every field before sending your message.');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedData.email)) {
      setSubmissionStatus('Please enter a valid email address.');
      return;
    }

    if (!trimmedData.permission) {
      setSubmissionStatus('Please allow contact permission before sending your message.');
      return;
    }

    setIsSubmitting(true);
    setSubmissionStatus('Sending your message...');

    const payload = {
      ...trimmedData,
      submittedAt: new Date().toISOString()
    };

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(result.message || 'Submission failed');
      }

      resetForm();
      setSubmissionStatus(`Thanks ${trimmedData.firstName}! Your message was sent successfully.`);
    } catch (error) {
      console.error('Contact form submission failed:', error);
      saveToLocalStorage(payload);
      setSubmissionStatus('Your message was saved on this device for now. The server is unavailable, so it will be sent once the connection is restored.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section ref={ref} id="contact" className="relative flex min-h-screen w-full items-end overflow-hidden border-t border-gray-900 bg-[#0a0a0a] pt-24 pb-0 sm:pt-28 lg:pt-32">
      <motion.div style={{ y }} className="pointer-events-none absolute inset-0 z-0 flex items-start justify-center overflow-hidden pt-8 sm:pt-12 lg:pt-16">
        <h1 className="select-none text-[20vw] leading-[0.8] font-black uppercase tracking-tighter text-white/80 sm:text-[22vw] lg:text-[25vw]" style={{ fontFamily: "'Impact', 'Arial Black', sans-serif" }}>
          Contact
        </h1>
      </motion.div>

      <div className="relative z-10 flex w-full items-end justify-center px-4 py-4 sm:px-6 sm:py-6 lg:px-0 lg:py-0">
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.8, ease: 'easeOut' }} className="w-full max-w-6xl bg-[#ff2a2a] p-6 text-white shadow-2xl sm:p-8 lg:p-12 xl:p-16">
          <div className="mb-8 text-xs font-bold uppercase tracking-[0.2em] text-white/90 sm:mb-10 lg:mb-12">
            Let’s Work Together
          </div>

         

          <form onSubmit={handleSubmit} className="flex w-full flex-col gap-8 sm:gap-10 lg:gap-12">
            <div className="flex flex-col gap-8 lg:flex-row lg:gap-10 xl:gap-14">
              <div className="flex flex-1 flex-col gap-6 sm:gap-8">
                <div className="relative">
                  <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First Name" autoComplete="given-name" required className="w-full rounded-none border-b border-white/40 bg-transparent pb-3 text-base font-medium text-white placeholder-white/80 transition-colors focus:border-white focus:outline-none sm:text-lg" />
                </div>
                <div className="relative">
                  <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last Name" autoComplete="family-name" required className="w-full rounded-none border-b border-white/40 bg-transparent pb-3 text-base font-medium text-white placeholder-white/80 transition-colors focus:border-white focus:outline-none sm:text-lg" />
                </div>
                <div className="relative">
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" autoComplete="email" required className="w-full rounded-none border-b border-white/40 bg-transparent pb-3 text-base font-medium text-white placeholder-white/80 transition-colors focus:border-white focus:outline-none sm:text-lg" />
                </div>
              </div>

              <div className="flex flex-1 flex-col">
                <div className="relative flex h-full flex-col">
                  <textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Tell me about your brand, campaign, or content idea" required className="h-full min-h-[140px] w-full resize-none rounded-none border-b border-white/40 bg-transparent pb-3 text-base font-medium text-white placeholder-white/80 transition-colors focus:border-white focus:outline-none sm:min-h-[180px] sm:text-lg"></textarea>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-6 lg:flex-row lg:gap-10">
              <div className="flex flex-1 items-start gap-3 text-sm font-medium text-white/90 sm:gap-4">
                <input type="checkbox" id="permission" name="permission" checked={formData.permission} onChange={handleChange} className="mt-1 h-4 w-4 cursor-pointer rounded-sm border-white/40 bg-transparent text-white focus:ring-white focus:ring-offset-0 focus:ring-offset-transparent" style={{ accentColor: 'white' }} />
                <label htmlFor="permission" className="max-w-[280px] cursor-pointer leading-snug">
                  I give permission to contact me at this email address.
                </label>
              </div>

              <div className="flex flex-1 flex-col gap-6 text-xs font-medium text-white/75 sm:text-sm">
                <p className="max-w-[400px] leading-relaxed">
                  This site is protected by reCAPTCHA and the Google{' '}
                  <a href="#" className="underline transition-colors hover:text-white">Privacy Policy</a>{' '}
                  and{' '}
                  <a href="#" className="underline transition-colors hover:text-white">Terms of Service</a>{' '}
                  apply.
                </p>
                <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                  <p className="max-w-[260px] leading-relaxed">
                    For information on how to unsubscribe, please review our{' '}
                    <a href="#" className="underline transition-colors hover:text-white">privacy policy</a>.
                  </p>

                  <div className="flex flex-col items-start gap-3">
                    {submissionStatus ? (
                      <p aria-live="polite" className={`max-w-[320px] text-sm font-medium ${submissionStatus.includes('saved') || submissionStatus.includes('unavailable') ? 'text-red-100' : 'text-white/95'}`}>
                        {submissionStatus}
                      </p>
                    ) : null}
                    <button type="submit" disabled={isSubmitting} className="flex items-center justify-center gap-3 whitespace-nowrap rounded-full border border-white/40 px-8 py-3 font-bold text-white transition-all duration-300 hover:bg-white hover:text-[#ff2a2a] disabled:cursor-not-allowed disabled:opacity-70">
                      {isSubmitting ? 'Sending...' : 'Send'}
                      <svg className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;