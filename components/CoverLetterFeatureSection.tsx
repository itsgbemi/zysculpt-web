import React from 'react';

const CoverLetterFeatureSection: React.FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative">
            {/* Visual Mockup */}
            <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100 relative z-10">
              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded-full bg-[#1918f0] flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 3L14.5 8.5L20 11L14.5 13.5L12 19L9.5 13.5L4 11L9.5 8.5L12 3Z"></path></svg>
                  </div>
                  <span className="text-sm font-bold text-[#191929]">AI Generated Content</span>
                </div>
                <div className="space-y-2">
                  <div className="h-2 bg-gray-200 rounded-full w-full"></div>
                  <div className="h-2 bg-gray-200 rounded-full w-full"></div>
                  <div className="h-2 bg-gray-200 rounded-full w-3/4"></div>
                </div>
                <div className="pt-4 space-y-2">
                  <div className="h-2 bg-gray-200 rounded-full w-full"></div>
                  <div className="h-2 bg-gray-200 rounded-full w-5/6"></div>
                </div>
                <div className="pt-4 flex gap-3">
                  <div className="h-8 bg-[#1918f0]/10 rounded-lg w-24 flex items-center justify-center">
                    <span className="text-[10px] font-bold text-[#1918f0]">Professional</span>
                  </div>
                  <div className="h-8 bg-gray-100 rounded-lg w-24 flex items-center justify-center">
                    <span className="text-[10px] font-bold text-gray-400">Creative</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Decorative background element */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#1918f0]/10 rounded-full blur-3xl -z-10"></div>
          </div>

          <div className="order-1 lg:order-2 space-y-6">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#191929] leading-tight">
              Write cover letters that actually get read.
            </h2>
            <p className="text-lg text-[#191929]/60 leading-relaxed">
              Ditch the generic templates. Our AI analyzes the job description and your unique career history to draft persuasive, targeted cover letters that capture recruiter attention in seconds.
            </p>
            <ul className="space-y-4 pt-4">
              {[
                "Targeted keywords for every application",
                "Tone adjustment from formal to creative",
                "Instant PDF and Docx export"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-[#191929] font-medium">
                  <div className="w-5 h-5 rounded-full bg-[#1918f0]/10 flex items-center justify-center text-[#1918f0]">
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="4"><path d="M5 13l4 4L19 7" /></svg>
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoverLetterFeatureSection;