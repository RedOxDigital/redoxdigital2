import Layout from '../components/Layout';
import HeroTradies from '../components/tradies/HeroTradies';
import ProblemTradies from '../components/tradies/ProblemTradies';
import SolutionTradies from '../components/tradies/SolutionTradies';
import ServicesTradies from '../components/tradies/ServicesTradies';
import FAQTradies from '../components/tradies/FAQTradies';
import CTATradies from '../components/tradies/CTATradies';

const TradiesSEO = () => {
  return (
    <Layout 
      title="Tradies SEO & Strategic Media | North Lakes Digital Consultant"
      description="Expert Tradies SEO & Media Content for North Lakes businesses. Get your plumbing, electrical, or building business ranked #1 on Maps & trusted by locals."
      canonical="https://redoxdigital.com.au/tradies-seo-north-lakes"
      showPreloader={false}
    >
      <HeroTradies />
      <ProblemTradies />
      <SolutionTradies />
      
      {/* Advantage Section - Inline */}
      <section className="py-20 md:py-32 bg-white border-t border-black/10">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Left Visual */}
            <div className="relative order-2 lg:order-1">
              <div className="relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1200&auto=format&fit=crop"
                  alt="SEO consultant on site with a North Lakes tradie"
                  className="w-full h-[400px] md:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-6 left-6 bg-white px-4 py-3 shadow-lg">
                  <span className="text-sm font-bold text-[#1a1a1a]">North Lakes & Moreton Bay</span>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-[2px] bg-[#E02020]" />
                <span className="text-xs font-bold uppercase tracking-widest text-[#E02020]">
                  Why Red Ox Digital
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-syne font-bold uppercase leading-[0.95] mb-8">
                We Are Local & <br/><span className="text-[#E02020]">Hands-On</span>
              </h2>

              <div className="space-y-5 text-lg text-gray-700 leading-relaxed mb-10">
                <p>We believe the best way to market your business is to actually show your work. Because we are right here in North Lakes, we can come to your job sites and see what you do firsthand.</p>
                <p>We capture real photos and videos of your current projects and use them to build a powerful online profile. This combination of local SEO for tradies and strategic media proves to local customers that you are a real, trusted expert in their community.</p>
              </div>

              {/* Desktop Grid - Hidden on mobile */}
              <div className="hidden sm:grid sm:grid-cols-2 gap-4">
                <div className="p-5 bg-[#F2F2F2]">
                  <h3 className="font-syne font-bold uppercase text-sm mb-1">Based in North Lakes</h3>
                  <p className="text-sm text-gray-600">We live and work right here in your community.</p>
                </div>
                <div className="p-5 bg-[#F2F2F2]">
                  <h3 className="font-syne font-bold uppercase text-sm mb-1">On-Site Content</h3>
                  <p className="text-sm text-gray-600">We capture real photos and videos of your work.</p>
                </div>
                <div className="p-5 bg-[#F2F2F2]">
                  <h3 className="font-syne font-bold uppercase text-sm mb-1">Face-to-Face</h3>
                  <p className="text-sm text-gray-600">We meet you in person and learn your business.</p>
                </div>
                <div className="p-5 bg-[#F2F2F2]">
                  <h3 className="font-syne font-bold uppercase text-sm mb-1">One Tradie Per Trade</h3>
                  <p className="text-sm text-gray-600">No conflicts. We only work with one per industry.</p>
                </div>
              </div>

              {/* Mobile Horizontal Scroll - Hidden on tablet/desktop */}
              <div className="sm:hidden -mx-6 px-6">
                <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide" style={{ WebkitOverflowScrolling: 'touch' }}>
                  <div className="flex-shrink-0 w-[75vw] max-w-[300px] p-6 bg-[#F2F2F2] snap-center">
                    <div className="w-10 h-10 rounded-full bg-[#E02020]/10 flex items-center justify-center mb-4">
                      <svg className="w-5 h-5 text-[#E02020]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                    </div>
                    <h3 className="font-syne font-bold uppercase text-base mb-2">Based in North Lakes</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">We live and work right here in your community. Not in Sydney. Not overseas.</p>
                  </div>
                  <div className="flex-shrink-0 w-[75vw] max-w-[300px] p-6 bg-[#F2F2F2] snap-center">
                    <div className="w-10 h-10 rounded-full bg-[#E02020]/10 flex items-center justify-center mb-4">
                      <svg className="w-5 h-5 text-[#E02020]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                    </div>
                    <h3 className="font-syne font-bold uppercase text-base mb-2">On-Site Content</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">We capture real photos and videos of your work. No stock images.</p>
                  </div>
                  <div className="flex-shrink-0 w-[75vw] max-w-[300px] p-6 bg-[#F2F2F2] snap-center">
                    <div className="w-10 h-10 rounded-full bg-[#E02020]/10 flex items-center justify-center mb-4">
                      <svg className="w-5 h-5 text-[#E02020]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
                    </div>
                    <h3 className="font-syne font-bold uppercase text-base mb-2">Face-to-Face</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">We meet you in person and learn your business so we can market it properly.</p>
                  </div>
                  <div className="flex-shrink-0 w-[75vw] max-w-[300px] p-6 bg-[#F2F2F2] snap-center">
                    <div className="w-10 h-10 rounded-full bg-[#E02020]/10 flex items-center justify-center mb-4">
                      <svg className="w-5 h-5 text-[#E02020]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                    </div>
                    <h3 className="font-syne font-bold uppercase text-base mb-2">One Tradie Per Trade</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">No conflicts. We only work with one plumber, one builder, one electrician in North Lakes.</p>
                  </div>
                </div>
                {/* Swipe Indicator */}
                <div className="flex items-center justify-center gap-2 mt-2">
                  <div className="flex gap-1">
                    <div className="w-6 h-1 bg-[#E02020] rounded-full"></div>
                    <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
                    <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
                    <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
                  </div>
                  <span className="text-[10px] uppercase tracking-widest text-gray-400 ml-2">Swipe</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ServicesTradies />
      <FAQTradies />
      <CTATradies />
    </Layout>
  );
};

export default TradiesSEO;

