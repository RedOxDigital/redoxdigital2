import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ContactFormModal from './ContactFormModal';

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="bg-[#111] text-[#F2F2F2] py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
                <div>
                    <h2 className="text-4xl md:text-5xl font-syne font-bold uppercase mb-4">LET'S <span className="text-[#E02020]">CHARGE</span></h2>
                    <p className="max-w-md text-gray-400 text-lg">
                    Ready to dominate the North Lakes market? Let's build a strategy that actually converts.
                    </p>
                </div>
                <button 
                    onClick={() => setIsModalOpen(true)}
                    className="w-full md:w-auto px-12 py-6 bg-white text-black font-bold uppercase tracking-widest hover:bg-[#E02020] hover:text-white transition-all duration-300 rounded-full flex items-center justify-center gap-4 group"
                >
                    Start Project <ArrowRight className="group-hover:translate-x-1 transition-transform"/>
                </button>
        </div>

        {/* Footer Links Section */}
        <div className="max-w-7xl mx-auto mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-white mb-4">Services</h3>
                <ul className="space-y-2">
                    <li><Link to="/web-design-north-lakes" className="text-gray-400 hover:text-white transition-colors text-sm">Web Design North Lakes</Link></li>
                    <li><Link to="/tradies-seo-north-lakes" className="text-gray-400 hover:text-white transition-colors text-sm">SEO for Tradies</Link></li>
                    <li><Link to="/facebook-ads-north-lakes" className="text-gray-400 hover:text-white transition-colors text-sm">Facebook Ads Management</Link></li>
                    <li><Link to="/google-ads-tradies-north-lakes" className="text-gray-400 hover:text-white transition-colors text-sm">Google Ads for Tradies</Link></li>
                </ul>
            </div>
            <div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-white mb-4">Free Resources</h3>
                <ul className="space-y-2">
                    <li><Link to="/google-review-request-email-template" className="text-gray-400 hover:text-white transition-colors text-sm">Google Review Email Templates</Link></li>
                    <li><Link to="/google-review-request-email-template#sms" className="text-gray-400 hover:text-white transition-colors text-sm">SMS Review Request Scripts</Link></li>
                    <li><Link to="/google-review-request-email-template#xero" className="text-gray-400 hover:text-white transition-colors text-sm">Xero Review Automation</Link></li>
                </ul>
            </div>
            <div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-white mb-4">Company</h3>
                <ul className="space-y-2">
                    <li><Link to="/" className="text-gray-400 hover:text-white transition-colors text-sm">Home</Link></li>
                    <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors text-sm">About Us</Link></li>
                </ul>
            </div>
            <div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-white mb-4">Contact</h3>
                <ul className="space-y-2">
                    <li><a href="mailto:info@redoxdigital.com.au" className="text-gray-400 hover:text-white transition-colors text-sm">info@redoxdigital.com.au</a></li>
                    <li><a href="tel:0493992661" className="text-gray-400 hover:text-white transition-colors text-sm">0493 992 661</a></li>
                    <li><span className="text-gray-500 text-sm">Dakabin, QLD 4503</span></li>
                </ul>
            </div>
        </div>
        
        <footer className="mt-16 pt-8 border-t border-white/10 flex flex-col gap-8">
            <div className="flex flex-col md:flex-row justify-between items-center text-xs uppercase tracking-widest text-gray-500 text-center md:text-left gap-4 md:gap-0">
                <div className="flex flex-col gap-2">
                    <p>© 2024 Red Ox Digital. All Rights Reserved.</p>
                    <p className="normal-case tracking-normal opacity-60">
                        Based in Dakabin. Providing Small Business Internet Marketing Consulting to businesses across North Lakes, Mango Hill, and the Moreton Bay Region.
                    </p>
                </div>
                <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                    <a href="mailto:info@redoxdigital.com.au" className="hover:text-white transition-colors">info@redoxdigital.com.au</a>
                    <a href="tel:0493992661" className="hover:text-white transition-colors">0493 992 661</a>
                </div>
            </div>
            <div className="flex justify-center pt-4">
                <Link to="/" className="hover:opacity-100 transition-opacity">
                    <img src="/ROD-logo.svg" alt="Red Ox Digital Logo" className="h-12 md:h-16 w-auto opacity-80 hover:opacity-100 transition-opacity" />
                </Link>
            </div>
        </footer>
        <ContactFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};

export default Footer;
