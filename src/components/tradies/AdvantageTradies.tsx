import { MapPin, Camera, Users, ShieldCheck } from 'lucide-react';

const AdvantageTradies = () => {
  return (
    <section className="py-20 md:py-32 bg-white border-t border-black/10">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Visual */}
          <div className="relative order-2 lg:order-1">
            <div className="relative">
              <div className="relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1200&auto=format&fit=crop"
                  alt="SEO consultant on site with a North Lakes tradie capturing strategic media content"
                  className="w-full h-[400px] md:h-[500px] object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                
                {/* Location Tag */}
                <div className="absolute bottom-6 left-6 bg-white px-4 py-3 shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold block">
                        Currently Servicing
                      </span>
                      <span className="text-sm font-bold text-[#1a1a1a]">
                        North Lakes & Moreton Bay
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Card */}
              <div className="absolute -bottom-8 -right-4 md:-right-8 bg-[#1a1a1a] text-white p-6 md:p-8 max-w-[280px] z-20 shadow-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#E02020] flex items-center justify-center">
                    <Camera className="w-5 h-5" />
                  </div>
                  <span className="text-xs uppercase tracking-widest font-bold text-[#E02020]">
                    The Difference
                  </span>
                </div>
                <p className="text-sm text-gray-300 leading-relaxed">
                  Most agencies work from a desk and use stock photos. We show up at your job site with a camera and capture what makes your work special.
                </p>
              </div>

              {/* Background Accent */}
              <div className="absolute -top-4 -left-4 w-full h-full bg-[#E02020]/10 -z-10" />
            </div>
          </div>

          {/* Right Content */}
          <div className="order-1 lg:order-2">
            {/* Section Label */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-[2px] bg-[#E02020]" />
              <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-[#E02020]">
                Why Red Ox Digital
              </span>
            </div>

            {/* H2 */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-syne font-bold uppercase leading-[0.95] mb-8">
              We Are Local & <br/>
              <span className="text-[#E02020]">Hands-On</span>
            </h2>

            {/* Body Copy */}
            <div className="space-y-5 text-lg text-gray-700 leading-relaxed mb-10">
              <p>
                We believe the best way to market your business is to actually show your work. Because we are right here in North Lakes, we can come to your job sites and see what you do firsthand.
              </p>
              <p>
                We capture real photos and videos of your current projects and use them to build a powerful online profile. This combination of local SEO for tradies and strategic media proves to local customers that you are a real, trusted expert in their community.
              </p>
            </div>

            {/* Advantages Grid - Hardcoded */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Advantage 1 */}
              <div className="group p-5 bg-[#F2F2F2] hover:bg-[#1a1a1a] transition-colors duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white group-hover:bg-[#E02020] flex items-center justify-center text-[#1a1a1a] group-hover:text-white transition-colors duration-300 flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-syne font-bold uppercase text-sm mb-1 group-hover:text-white transition-colors">
                      Based in North Lakes
                    </h3>
                    <p className="text-sm text-gray-600 group-hover:text-gray-400 transition-colors leading-relaxed">
                      We are not some agency in Sydney or overseas. We live and work right here in your community.
                    </p>
                  </div>
                </div>
              </div>

              {/* Advantage 2 */}
              <div className="group p-5 bg-[#F2F2F2] hover:bg-[#1a1a1a] transition-colors duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white group-hover:bg-[#E02020] flex items-center justify-center text-[#1a1a1a] group-hover:text-white transition-colors duration-300 flex-shrink-0">
                    <Camera className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-syne font-bold uppercase text-sm mb-1 group-hover:text-white transition-colors">
                      On-Site Content
                    </h3>
                    <p className="text-sm text-gray-600 group-hover:text-gray-400 transition-colors leading-relaxed">
                      We come to your job sites to capture real photos and videos. No stock images. Just your actual work.
                    </p>
                  </div>
                </div>
              </div>

              {/* Advantage 3 */}
              <div className="group p-5 bg-[#F2F2F2] hover:bg-[#1a1a1a] transition-colors duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white group-hover:bg-[#E02020] flex items-center justify-center text-[#1a1a1a] group-hover:text-white transition-colors duration-300 flex-shrink-0">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-syne font-bold uppercase text-sm mb-1 group-hover:text-white transition-colors">
                      Face-to-Face
                    </h3>
                    <p className="text-sm text-gray-600 group-hover:text-gray-400 transition-colors leading-relaxed">
                      We meet you in person. We grab a coffee. We learn your business so we can market it properly.
                    </p>
                  </div>
                </div>
              </div>

              {/* Advantage 4 */}
              <div className="group p-5 bg-[#F2F2F2] hover:bg-[#1a1a1a] transition-colors duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white group-hover:bg-[#E02020] flex items-center justify-center text-[#1a1a1a] group-hover:text-white transition-colors duration-300 flex-shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-syne font-bold uppercase text-sm mb-1 group-hover:text-white transition-colors">
                      One Tradie Per Trade
                    </h3>
                    <p className="text-sm text-gray-600 group-hover:text-gray-400 transition-colors leading-relaxed">
                      We only work with one plumber, one builder, one electrician in North Lakes. No conflicts.
                    </p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default AdvantageTradies;
