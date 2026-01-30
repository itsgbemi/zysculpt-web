import React from 'react';

const AtsFeatureSection: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#191929] leading-tight">
              Built for the Applicant Tracking System.
            </h2>
            <p className="text-lg text-[#191929]/60 leading-relaxed">
              Your resume isn't just for human eyes anymore. We optimize every pixel and word to ensure you sail past algorithmic filters with a near-perfect score. Our templates are architected to be machine-readable while remaining visually stunning for recruiters.
            </p>
            
            <ul className="space-y-4 pt-4">
              {[
                "Targeted keywords for every application",
                "Tone adjustment from formal to creative",
                "Machine-readable formatting"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-[#191929] font-medium">
                  <div className="w-5 h-5 rounded-full bg-[#1918f0]/10 flex items-center justify-center text-[#1918f0]">
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="4"><path d="M5 13l4 4L19 7" /></svg>
                  </div>
                  {item}
                </li>
              ))}
            </ul>

            <div className="pt-4 flex items-center gap-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="user" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <p className="text-sm font-bold text-[#191929]/80">Trusted by 10,000+ high achievers</p>
            </div>
          </div>

          <div className="relative">
            {/* Template Replica (Monochrome, Left-aligned except dates) */}
            <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-8 w-full max-w-sm mx-auto relative z-10 scale-105 aspect-[1/1.414] flex flex-col">
              <div className="space-y-5 h-full text-left">
                {/* Header - Left Aligned */}
                <div className="space-y-1.5 pb-4 border-b border-gray-100">
                  <div className="text-2xl font-bold text-[#191929]">Olive Fanning</div>
                  <div className="text-[9px] text-[#191929]/50 font-medium tracking-tight">
                    olive.fanning@email.com, +1 234 567 890, New York, NY
                  </div>
                </div>

                {/* Professional Summary */}
                <div className="space-y-2">
                  <div className="text-[9px] font-bold text-[#191929] border-b border-gray-100 pb-1">Professional Summary</div>
                  <div className="space-y-1.5">
                    <div className="h-1 bg-gray-200 rounded-full w-full"></div>
                    <div className="h-1 bg-gray-200 rounded-full w-full"></div>
                    <div className="h-1 bg-gray-100 rounded-full w-4/5"></div>
                  </div>
                </div>

                {/* Experience Section */}
                <div className="space-y-4">
                  <div className="text-[9px] font-bold text-[#191929] border-b border-gray-100 pb-1">Professional Experience</div>
                  
                  {/* Job 1 */}
                  <div className="space-y-2.5">
                    <div className="flex justify-between items-start">
                      <div className="h-2.5 bg-gray-400 rounded-full w-2/5"></div>
                      <div className="h-1.5 bg-gray-200 rounded-full w-1/5"></div>
                    </div>
                    <div className="space-y-1.5">
                      <div className="h-1 bg-gray-100 rounded-full w-full"></div>
                      <div className="h-1 bg-gray-100 rounded-full w-full"></div>
                      <div className="h-1 bg-gray-100 rounded-full w-11/12"></div>
                    </div>
                  </div>

                  {/* Job 2 */}
                  <div className="space-y-2.5">
                    <div className="flex justify-between items-start">
                      <div className="h-2.5 bg-gray-400 rounded-full w-1/3"></div>
                      <div className="h-1.5 bg-gray-200 rounded-full w-1/5"></div>
                    </div>
                    <div className="space-y-1.5">
                      <div className="h-1 bg-gray-100 rounded-full w-full"></div>
                      <div className="h-1 bg-gray-100 rounded-full w-full"></div>
                    </div>
                  </div>
                </div>

                {/* Education Section */}
                <div className="space-y-3">
                  <div className="text-[9px] font-bold text-[#191929] border-b border-gray-100 pb-1">Education</div>
                  <div className="flex justify-between items-start">
                    <div className="h-2.5 bg-gray-400 rounded-full w-3/5"></div>
                    <div className="h-1.5 bg-gray-200 rounded-full w-1/5"></div>
                  </div>
                </div>

                {/* Skills Section */}
                <div className="space-y-3 mt-auto">
                  <div className="text-[9px] font-bold text-[#191929] border-b border-gray-100 pb-1">Technical Skills</div>
                  <div className="flex flex-wrap gap-1.5">
                    <div className="h-4.5 bg-gray-50 rounded w-14 border border-gray-100"></div>
                    <div className="h-4.5 bg-gray-50 rounded w-18 border border-gray-100"></div>
                    <div className="h-4.5 bg-gray-50 rounded w-12 border border-gray-100"></div>
                    <div className="h-4.5 bg-gray-50 rounded w-16 border border-gray-100"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Edge Cards - Only ATS Match remains */}
            <div className="absolute -top-6 -right-4 lg:-right-8 bg-white rounded-2xl shadow-xl border border-gray-100 p-4 z-20 animate-bounce duration-[3000ms]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path d="M5 13l4 4L19 7" /></svg>
                </div>
                <div>
                  <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">ATS Match</div>
                  <div className="text-xl font-black text-[#191929]">98.4%</div>
                </div>
              </div>
            </div>

            {/* Background Decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#1918f0]/5 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AtsFeatureSection;