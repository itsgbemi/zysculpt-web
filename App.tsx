import React, { useState, useEffect } from 'react';
import Header from './components/Header.tsx';
import Hero from './components/Hero.tsx';
import ResumeTemplatesSection from './components/ResumeTemplatesSection.tsx';
import InterviewPrep from './components/InterviewPrep.tsx';
import JobsSection from './components/JobsSection.tsx';
import AtsScorer from './components/AtsScorer.tsx';
import Footer from './components/Footer.tsx';
import AtsFeatureSection from './components/AtsFeatureSection.tsx';
import CoverLetterFeatureSection from './components/CoverLetterFeatureSection.tsx';
import InterviewPrepFeatureSection from './components/InterviewPrepFeatureSection.tsx';
import CareerGoalSection from './components/CareerGoalSection.tsx';

type Mode = 'home' | 'resume' | 'cover_letter' | 'resignation' | 'interview_prep' | 'jobs' | 'ats_scorer';

const App: React.FC = () => {
  const getModeFromHash = (): Mode => {
    try {
      const hash = window.location.hash.replace('#', '');
      if (hash === 'home') return 'home';
      if (hash === 'resume') return 'resume';
      if (hash === 'cover-letter') return 'cover_letter';
      if (hash === 'resignation') return 'resignation';
      if (hash === 'interview-prep') return 'interview_prep';
      if (hash === 'jobs') return 'jobs';
      if (hash === 'ats-scorer') return 'ats_scorer';
    } catch (e) {
      console.warn("Unable to access window.location.hash");
    }
    return 'home';
  };

  const [mode, setMode] = useState<Mode>(getModeFromHash());

  useEffect(() => {
    const handleHashChange = () => {
      setMode(getModeFromHash());
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navItems: { label: string; value: Mode; hash: string }[] = [
    { label: 'Home', value: 'home', hash: '#home' },
    { label: 'For resume', value: 'resume', hash: '#resume' },
    { label: 'ATS Scorer', value: 'ats_scorer', hash: '#ats-scorer' },
    { label: 'For cover letter', value: 'cover_letter', hash: '#cover-letter' },
    { label: 'For resignation', value: 'resignation', hash: '#resignation' },
    { label: 'Interview Prep', value: 'interview_prep', hash: '#interview-prep' },
    { label: 'Jobs', value: 'jobs', hash: '#jobs' }
  ];

  const handleNavigate = (newMode: Mode) => {
    setMode(newMode);
    
    const newHash = newMode === 'home' ? '#home' :
                   newMode === 'resume' ? '#resume' : 
                   newMode === 'cover_letter' ? '#cover-letter' : 
                   newMode === 'resignation' ? '#resignation' :
                   newMode === 'interview_prep' ? '#interview-prep' :
                   newMode === 'jobs' ? '#jobs' :
                   '#ats-scorer';
    
    try {
      window.history.pushState(null, '', newHash);
    } catch (e) {
      console.warn("Browser denied script-based URL update.", e);
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-[#1918f0]/10 selection:text-[#1918f0] text-[#191929] font-['Inter Tight']">
      <Header onNavigate={handleNavigate} />
      
      <nav className="bg-white border-b border-gray-200 pt-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-start overflow-x-auto no-scrollbar gap-1 -mb-px">
            {navItems.map((item, index) => {
              const isActive = mode === item.value;
              return (
                <button
                  key={`${item.value}-${index}`}
                  onClick={() => handleNavigate(item.value)}
                  className={`px-6 py-3 text-sm font-bold transition-all whitespace-nowrap flex-shrink-0 border-b-2 ${
                    isActive 
                    ? 'text-[#1918f0] border-[#1918f0] z-10' 
                    : 'text-[#64748b] hover:text-[#191929] border-transparent'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      <main className="flex-1">
        {mode === 'interview_prep' ? (
          <InterviewPrep />
        ) : mode === 'jobs' ? (
          <JobsSection />
        ) : mode === 'ats_scorer' ? (
          <AtsScorer />
        ) : (
          <>
            <Hero mode={mode} />
            {mode === 'home' && (
              <>
                <AtsFeatureSection />
                <CoverLetterFeatureSection />
                <InterviewPrepFeatureSection />
                <CareerGoalSection />
              </>
            )}
            {mode === 'resume' && <ResumeTemplatesSection />}
          </>
        )}
      </main>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
};

export default App;