import { MapPin, Camera, Users, ShieldCheck } from 'lucide-react';

const AdvantageTradies = () => {
  return (
    <section className="border-t border-black/10 bg-white py-20 md:py-32">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left Visual */}
          <div className="relative order-2 lg:order-1">
            <div className="relative">
              <div className="relative overflow-hidden">
                <img
                  src="/images/tradies/tradies-advantage-background.webp"
                  alt="Local SEO consultant filming on-site with North Lakes tradie - Strategic Media Content"
                  className="h-[400px] w-full object-cover md:h-[500px]"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    if (target.src !== '/images/tradies/tradies-advantage-background.jpg') {
                      target.src = '/images/tradies/tradies-advantage-background.jpg';
                    }
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                {/* Location Tag */}
                <div className="absolute bottom-6 left-6 bg-white px-4 py-3 shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="h-3 w-3 animate-pulse rounded-full bg-green-500" />
                    <div>
                      <span className="block text-[10px] font-bold uppercase tracking-widest text-gray-500">
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
              <div className="absolute -bottom-8 -right-4 z-20 max-w-[280px] bg-[#1a1a1a] p-6 text-white shadow-2xl md:-right-8 md:p-8">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E02020]">
                    <Camera className="h-5 w-5" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#E02020]">
                    The Difference
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-gray-300">
                  Most agencies work from a desk and use stock photos. We show up at your job site
                  with a camera and capture what makes your work special.
                </p>
              </div>

              {/* Background Accent */}
              <div className="absolute -left-4 -top-4 -z-10 h-full w-full bg-[#E02020]/10" />
            </div>
          </div>

          {/* Right Content */}
          <div className="order-1 lg:order-2">
            {/* Section Label */}
            <div className="mb-6 flex items-center gap-3">
              <div className="h-[2px] w-12 bg-[#E02020]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#E02020] md:text-sm">
                Why Red Ox Digital
              </span>
            </div>

            {/* H2 */}
            <h2 className="mb-8 font-syne text-4xl font-bold uppercase leading-[0.95] md:text-5xl lg:text-6xl">
              We Are Local & <br />
              <span className="text-[#E02020]">Hands-On</span>
            </h2>

            {/* Body Copy */}
            <div className="mb-10 space-y-5 text-lg leading-relaxed text-gray-700">
              <p>
                We believe the best way to market your business is to actually show your work.
                Because we are right here in North Lakes, we can come to your job sites and see what
                you do firsthand.
              </p>
              <p>
                We capture real photos and videos of your current projects and use them to build a
                powerful online profile. This combination of local SEO for tradies and strategic
                media proves to local customers that you are a real, trusted expert in their
                community.
              </p>
            </div>

            {/* Advantages Grid - Hardcoded */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {/* Advantage 1 */}
              <div className="group bg-[#F2F2F2] p-5 transition-colors duration-300 hover:bg-[#1a1a1a]">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-white text-[#1a1a1a] transition-colors duration-300 group-hover:bg-[#E02020] group-hover:text-white">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-syne text-sm font-bold uppercase transition-colors group-hover:text-white">
                      Based in North Lakes
                    </h3>
                    <p className="text-sm leading-relaxed text-gray-600 transition-colors group-hover:text-gray-400">
                      We are not some agency in Sydney or overseas. We live and work right here in
                      your community.
                    </p>
                  </div>
                </div>
              </div>

              {/* Advantage 2 */}
              <div className="group bg-[#F2F2F2] p-5 transition-colors duration-300 hover:bg-[#1a1a1a]">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-white text-[#1a1a1a] transition-colors duration-300 group-hover:bg-[#E02020] group-hover:text-white">
                    <Camera className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-syne text-sm font-bold uppercase transition-colors group-hover:text-white">
                      On-Site Content
                    </h3>
                    <p className="text-sm leading-relaxed text-gray-600 transition-colors group-hover:text-gray-400">
                      We come to your job sites to capture real photos and videos. No stock images.
                      Just your actual work.
                    </p>
                  </div>
                </div>
              </div>

              {/* Advantage 3 */}
              <div className="group bg-[#F2F2F2] p-5 transition-colors duration-300 hover:bg-[#1a1a1a]">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-white text-[#1a1a1a] transition-colors duration-300 group-hover:bg-[#E02020] group-hover:text-white">
                    <Users className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-syne text-sm font-bold uppercase transition-colors group-hover:text-white">
                      Face-to-Face
                    </h3>
                    <p className="text-sm leading-relaxed text-gray-600 transition-colors group-hover:text-gray-400">
                      We meet you in person. We grab a coffee. We learn your business so we can
                      market it properly.
                    </p>
                  </div>
                </div>
              </div>

              {/* Advantage 4 */}
              <div className="group bg-[#F2F2F2] p-5 transition-colors duration-300 hover:bg-[#1a1a1a]">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-white text-[#1a1a1a] transition-colors duration-300 group-hover:bg-[#E02020] group-hover:text-white">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-syne text-sm font-bold uppercase transition-colors group-hover:text-white">
                      One Tradie Per Trade
                    </h3>
                    <p className="text-sm leading-relaxed text-gray-600 transition-colors group-hover:text-gray-400">
                      We only work with one plumber, one builder, one electrician in North Lakes. No
                      conflicts.
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
