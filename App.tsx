
import React, { useState, useEffect } from 'react';
import { 
  Shield, 
  Hammer, 
  Droplets, 
  Home, 
  Clock, 
  Phone, 
  MapPin, 
  Star, 
  CheckCircle2, 
  Menu, 
  X, 
  ArrowRight,
  Facebook,
  Instagram,
  Twitter
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { BUSINESS_INFO, SERVICES, REVIEWS } from './constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 flex items-center gap-2">
            <div className="bg-blue-600 p-2 rounded-lg">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <span className={`font-bold text-xl tracking-tight ${scrolled ? 'text-slate-900' : 'text-white'}`}>
              Williams Brothers
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className={`text-sm font-semibold transition-colors ${scrolled ? 'text-slate-600 hover:text-blue-600' : 'text-white/90 hover:text-white'}`}
              >
                {link.name}
              </a>
            ))}
            <a 
              href={`tel:${BUSINESS_INFO.phone}`}
              className="bg-blue-600 text-white px-5 py-2.5 rounded-full text-sm font-bold hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-200"
            >
              Call Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className={scrolled ? 'text-slate-900' : 'text-white'}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block px-3 py-4 text-base font-medium text-slate-700 hover:text-blue-600 hover:bg-slate-50 rounded-md"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4">
                <a 
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="block w-full text-center bg-blue-600 text-white px-5 py-3 rounded-lg text-base font-bold"
                >
                  Free Estimate: {BUSINESS_INFO.phone}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1635424710928-0544e8512eae?q=80&w=2070&auto=format&fit=crop" 
          alt="Roofing background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-transparent"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 bg-blue-600/20 backdrop-blur-sm border border-blue-400/30 px-3 py-1 rounded-full mb-6">
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            <span className="text-sm font-bold tracking-wide uppercase">Top Rated in Deer Park (4.8 Stars)</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
            Quality You Can <span className="text-blue-500">Trust</span>, Service You Can Count On.
          </h1>
          <p className="text-xl text-slate-200 mb-10 leading-relaxed max-w-xl">
            Providing expert roofing and construction services to Deer Park and the surrounding areas. Open 24/7 for all your emergency needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#contact" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl text-lg font-bold flex items-center justify-center gap-2 transition-all shadow-xl shadow-blue-900/20"
            >
              Get A Free Estimate <ArrowRight className="w-5 h-5" />
            </a>
            <a 
              href={`tel:${BUSINESS_INFO.phone}`}
              className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-xl text-lg font-bold flex items-center justify-center gap-2 transition-all"
            >
              <Phone className="w-5 h-5" /> {BUSINESS_INFO.phone}
            </a>
          </div>
          
          <div className="mt-12 flex items-center gap-8">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <img 
                  key={i} 
                  className="w-10 h-10 rounded-full border-2 border-slate-900" 
                  src={`https://picsum.photos/seed/${i + 10}/100/100`} 
                  alt="Reviewer" 
                />
              ))}
            </div>
            <div className="text-sm">
              <div className="flex text-yellow-400 gap-0.5 mb-1">
                {[1, 2, 3, 4, 5].map((s) => <Star key={s} className="w-4 h-4 fill-yellow-400" />)}
              </div>
              <p className="font-semibold">{BUSINESS_INFO.reviewCount}+ Satisfied Customers</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-3">Our Expertise</h2>
          <p className="text-4xl font-extrabold text-slate-900 mb-4">Complete Roofing Solutions</p>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:border-blue-100 hover:bg-white hover:shadow-2xl hover:shadow-blue-600/5 transition-all duration-300"
            >
              <div className="bg-white group-hover:bg-blue-600 p-4 rounded-2xl w-fit shadow-sm group-hover:shadow-blue-200 transition-all duration-300 mb-6">
                <span className="text-blue-600 group-hover:text-white">{service.icon}</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                {service.description}
              </p>
              <a href="#contact" className="text-blue-600 font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                Learn More <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TrustSection: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 relative">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop" 
                alt="Construction team" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Experience Badge */}
            <div className="absolute -bottom-10 -right-10 bg-blue-600 text-white p-8 rounded-3xl shadow-2xl z-20 hidden md:block">
              <p className="text-5xl font-black mb-1">20+</p>
              <p className="text-sm font-bold uppercase tracking-wider opacity-80">Years Experience</p>
            </div>
            {/* Decorative element */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-100 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob"></div>
          </div>

          <div className="lg:w-1/2">
            <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-3">About Us</h2>
            <h3 className="text-4xl font-extrabold text-slate-900 mb-6 leading-tight">
              A Family Legacy of <span className="text-blue-600">Excellence</span> in Construction
            </h3>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              For over two decades, Williams Brothers Roofing & Construction has been the premier choice for residents in Deer Park. We aren't just contractors; we're your neighbors. We understand the unique challenges Texas weather brings to your home.
            </p>
            
            <div className="space-y-4 mb-10">
              {[
                "Fully Licensed & Insured for your peace of mind",
                "24/7 Emergency Storm Damage Response",
                "Highest Quality Materials & Lifetime Warranties",
                "Family Owned and Locally Operated"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="bg-green-100 p-1 rounded-full">
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                  </div>
                  <span className="font-semibold text-slate-700">{item}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-6 p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
              <div className="flex flex-col">
                <div className="flex items-center gap-2 mb-1">
                  <Clock className="w-5 h-5 text-blue-600" />
                  <span className="font-bold">Always Available</span>
                </div>
                <p className="text-sm text-slate-500">{BUSINESS_INFO.hours}</p>
              </div>
              <div className="flex flex-col border-l border-slate-100 pl-6">
                <div className="flex items-center gap-2 mb-1">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  <span className="font-bold">Local Experts</span>
                </div>
                <p className="text-sm text-slate-500">Deer Park, Texas</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Reviews: React.FC = () => {
  return (
    <section id="reviews" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-3">Testimonials</h2>
            <p className="text-4xl font-extrabold text-slate-900 mb-4">What Our Clients Are Saying</p>
          </div>
          <div className="flex items-center gap-4 bg-slate-50 px-6 py-4 rounded-2xl border border-slate-100">
            <div className="text-3xl font-black text-slate-900">{BUSINESS_INFO.rating}</div>
            <div className="flex flex-col">
              <div className="flex text-yellow-400">
                {[1, 2, 3, 4, 5].map((s) => <Star key={s} className="w-4 h-4 fill-yellow-400" />)}
              </div>
              <div className="text-sm text-slate-500 font-medium">Based on {BUSINESS_INFO.reviewCount} reviews</div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {REVIEWS.map((review) => (
            <div key={review.id} className="bg-slate-50 p-8 rounded-3xl border border-slate-100 flex flex-col h-full">
              <div className="flex text-yellow-400 mb-4">
                {[...Array(review.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-yellow-400" />)}
              </div>
              <p className="text-slate-700 italic mb-6 flex-grow leading-relaxed">"{review.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xl">
                  {review.author[0]}
                </div>
                <div>
                  <div className="font-bold text-slate-900">{review.author}</div>
                  <div className="text-xs text-slate-500 font-medium">{review.date}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-blue-500 font-bold uppercase tracking-widest text-sm mb-3">Get in Touch</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold mb-8">Ready to Start Your Next Project?</h3>
            <p className="text-slate-400 text-lg mb-12 leading-relaxed">
              Don't wait for a leak to become a disaster. Contact Williams Brothers today for a professional, no-obligation estimate on your roof or construction project.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-5">
                <div className="bg-blue-600/20 p-4 rounded-2xl text-blue-500">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-1">Call Us 24/7</p>
                  <a href={`tel:${BUSINESS_INFO.phone}`} className="text-2xl font-bold hover:text-blue-500 transition-colors">
                    {BUSINESS_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="bg-blue-600/20 p-4 rounded-2xl text-blue-500">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-1">Our Location</p>
                  <p className="text-xl font-bold leading-relaxed">{BUSINESS_INFO.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="bg-blue-600/20 p-4 rounded-2xl text-blue-500">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-1">Working Hours</p>
                  <p className="text-xl font-bold">{BUSINESS_INFO.hours}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 md:p-12 rounded-[2.5rem] text-slate-900 shadow-2xl">
            {submitted ? (
              <div className="text-center py-12">
                <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10 text-green-600" />
                </div>
                <h4 className="text-2xl font-bold mb-2">Message Sent!</h4>
                <p className="text-slate-600 mb-8">Thank you for reaching out. We'll be in touch very soon to discuss your project.</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="text-blue-600 font-bold"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Full Name</label>
                    <input 
                      required
                      type="text" 
                      placeholder="John Doe"
                      className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Phone Number</label>
                    <input 
                      required
                      type="tel" 
                      placeholder="(555) 000-0000"
                      className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Email Address</label>
                  <input 
                    required
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Project Details</label>
                  <textarea 
                    rows={4} 
                    placeholder="Tell us about your roofing needs..."
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all resize-none"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-5 rounded-xl text-lg font-bold transition-all shadow-xl shadow-blue-600/20 disabled:bg-blue-400 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : 'Send My Request'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <span className="font-bold text-2xl tracking-tight">Williams Brothers</span>
            </div>
            <p className="text-slate-400 max-w-sm mb-8">
              Protecting homes and families in Deer Park since 2004. Quality materials, expert craftsmanship, and unmatched customer service.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-blue-500 transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-blue-500 transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-blue-500 transition-all">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#services" className="text-slate-400 hover:text-blue-500 transition-colors">Services</a></li>
              <li><a href="#about" className="text-slate-400 hover:text-blue-500 transition-colors">About Us</a></li>
              <li><a href="#reviews" className="text-slate-400 hover:text-blue-500 transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="text-slate-400 hover:text-blue-500 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-500 mt-1" />
                <span className="text-slate-400">{BUSINESS_INFO.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-500" />
                <span className="text-slate-400">{BUSINESS_INFO.phone}</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-blue-500" />
                <span className="text-slate-400">{BUSINESS_INFO.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Williams Brothers Roofing & Construction. All rights reserved.
          </p>
          <div className="flex gap-8 text-sm text-slate-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <TrustSection />
      <Reviews />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
