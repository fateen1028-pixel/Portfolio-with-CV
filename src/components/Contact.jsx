import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-primary-bg relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-accent/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-secondary-bg/30 backdrop-blur-xl rounded-3xl border border-white/5 p-8 md:p-14 shadow-2xl"
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-5xl font-bold text-text-light mb-4">Let's Work Together</h2>
            <p className="text-gray-400">Have a project in mind? I'm always open to discussing new ideas.</p>
          </div>

          {/* FINAL WORKING FORM */}
          <form
            className="space-y-6"
            action="https://api.web3forms.com/submit"
            method="POST"
          >
            {/* Web3Forms Access Key */}
            <input type="hidden" name="access_key" value={import.meta.env.VITE_WEB3_FORMS_ACCESS_KEY} />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full px-4 py-4 bg-primary-bg/50 border border-white/10 rounded-xl text-text-light 
                  focus:outline-none focus:border-primary-accent focus:bg-primary-bg transition-all placeholder-gray-600"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-4 bg-primary-bg/50 border border-white/10 rounded-xl text-text-light 
                  focus:outline-none focus:border-primary-accent focus:bg-primary-bg transition-all placeholder-gray-600"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
              <textarea
                rows="4"
                name="message"
                required
                className="w-full px-4 py-4 bg-primary-bg/50 border border-white/10 rounded-xl text-text-light 
                focus:outline-none focus:border-primary-accent focus:bg-primary-bg transition-all resize-none placeholder-gray-600"
                placeholder="Tell me about your project..."
              ></textarea>
            </div>

            {/* Submit Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-primary-accent to-secondary-accent hover:opacity-90 
              text-white font-bold rounded-xl shadow-lg transition-all"
            >
              Send Message
            </motion.button>
          </form>

          <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-gray-400">
            <div className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer">
              <Mail size={18} />
              <span>hello@portfolio.dev</span>
            </div>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-white transition-colors transform hover:scale-110"><Linkedin size={24} /></a>
              <a href="#" className="hover:text-white transition-colors transform hover:scale-110"><Github size={24} /></a>
            </div>
          </div>
        </motion.div>

        <footer className="mt-20 text-center text-gray-600 text-sm">
          <p>© {new Date().getFullYear()} AI Developer Portfolio. Crafted with React & Tailwind CSS v4.</p>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
