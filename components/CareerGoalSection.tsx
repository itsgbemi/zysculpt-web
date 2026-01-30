import React from 'react';

const CareerGoalSection: React.FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1918f0]/10 text-[#1918f0] text-xs font-black uppercase tracking-widest">
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/></svg>
            Unlock Your Potential
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-[#191929] leading-tight tracking-tight">
            Turn your career goals <br className="hidden lg:block" /> into a reality.
          </h2>
          <p className="text-xl text-[#191929]/60 leading-relaxed">
            Whether it's a promotion, a career pivot, or your first big break, Zysculpt provides the tools to navigate every step of your professional journey with confidence.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <button 
              onClick={() => window.location.hash = '#jobs'}
              className="primary-btn px-10 py-4 rounded-full font-bold text-sm shadow-xl shadow-[#1918f0]/20 transition-all hover:scale-105"
            >
              Start Career Journey
            </button>
            <button 
              onClick={() => window.location.hash = '#resume'}
              className="px-10 py-4 border-2 border-[#1918f0] text-[#1918f0] rounded-full font-bold text-sm hover:bg-[#1918f0] hover:text-white transition-all"
            >
              Build Resume
            </button>
          </div>
        </div>

        {/* Visual Achievement Path */}
        <div className="mt-20 relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {[
              { step: "01", title: "Targeted Search", desc: "Find roles that match your skill set and aspirations perfectly." },
              { step: "02", title: "Smart Application", desc: "Apply with ATS-optimized documents that tell your story." },
              { step: "03", title: "Offer Secured", desc: "Nail your interviews and land the professional package you deserve." }
            ].map((goal, i) => (
              <div key={i} className="bg-gray-50 p-8 rounded-[32px] border border-gray-100 text-left space-y-4 hover:shadow-xl transition-all group">
                <div className="text-4xl font-black text-[#1918f0]/10 group-hover:text-[#1918f0]/20 transition-colors">{goal.step}</div>
                <h3 className="text-xl font-bold text-[#191929]">{goal.title}</h3>
                <p className="text-sm text-[#191929]/60 leading-relaxed">{goal.desc}</p>
              </div>
            ))}
          </div>
          {/* Background decoration */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-64 bg-[#1918f0]/5 rounded-full blur-3xl -z-10"></div>
        </div>
      </div>
    </section>
  );
};

export default CareerGoalSection;