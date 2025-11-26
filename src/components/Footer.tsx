import { ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <section className="bg-[#111] text-[#F2F2F2] py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
                <div>
                    <h2 className="text-4xl md:text-5xl font-syne font-bold uppercase mb-4">LET'S <span className="text-[#E02020]">CHARGE</span></h2>
                    <p className="max-w-md text-gray-400 text-lg">
                    Ready to dominate the North Lakes market? Let's build a strategy that actually converts.
                    </p>
                </div>
                <button className="w-full md:w-auto px-12 py-6 bg-white text-black font-bold uppercase tracking-widest hover:bg-[#E02020] hover:text-white transition-all duration-300 rounded-full flex items-center justify-center gap-4 group">
                    Start Project <ArrowRight className="group-hover:translate-x-1 transition-transform"/>
                </button>
        </div>
        
        <footer className="mt-24 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs uppercase tracking-widest text-gray-500 text-center md:text-left gap-4 md:gap-0">
            <div className="flex flex-col gap-2">
                <p>© 2024 Red Ox Digital. All Rights Reserved.</p>
                <p className="normal-case tracking-normal opacity-60">
                    Based in Dakabin. Providing Small Business Internet Marketing Consulting to businesses across North Lakes, Mango Hill, and the Moreton Bay Region.
                </p>
            </div>
            <div className="flex gap-6">
                <a href="#" className="hover:text-white transition-colors">Instagram</a>
                <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
                <a href="#" className="hover:text-white transition-colors">Email</a>
            </div>
        </footer>
    </section>
  );
};

export default Footer;
