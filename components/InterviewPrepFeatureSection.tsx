import React from 'react';

const InterviewPrepFeatureSection: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#191929] leading-tight">
              Master your interview before it even starts.
            </h2>
            <p className="text-lg text-[#191929]/60 leading-relaxed">
              Our live AI mock interviews use real-time voice technology to simulate high-pressure hiring scenarios. Get instant feedback on your answers and build the confidence you need to land the offer.
            </p>
            <div className="pt-4">
              <button 
                onClick={() => window.location.hash = '#interview-prep'}
                className="primary-btn px-8 py-4 rounded-full font-bold text-sm shadow-xl shadow-[#1918f0]/20 flex items-center gap-3"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" /></svg>
                Try Voice Interview
              </button>
            </div>
          </div>

          <div className="relative">
            {/* Voice Interface Replica */}
            <div className="bg-[#191929] rounded-[40px] p-10 shadow-2xl relative z-10">
              <div className="flex flex-col items-center text-center space-y-8">
                <div className="w-20 h-20 rounded-full bg-[#1918f0] flex items-center justify-center relative">
                  <div className="absolute inset-0 rounded-full bg-[#1918f0] animate-ping opacity-20"></div>
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" /></svg>
                </div>
                <div className="space-y-2">
                  <div className="text-white font-bold text-lg">AI Interviewer</div>
                  <div className="text-blue-400 text-xs font-black uppercase tracking-widest">Listening...</div>
                </div>
                <div className="flex gap-1.5 h-8 items-center">
                  {[...Array(6)].map((_, i) => (
                    <div 
                      key={i} 
                      className="w-1.5 bg-[#1918f0] rounded-full animate-pulse" 
                      style={{ 
                        height: `${[40, 70, 90, 60, 80, 50][i]}%`,
                        animationDelay: `${i * 0.15}s`
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
            {/* Background Decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#1918f0]/20 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InterviewPrepFeatureSection;