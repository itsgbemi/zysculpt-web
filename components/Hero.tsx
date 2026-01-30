import React from 'react';
import ChatCard from './ChatCard.tsx';
import StackedCards from './StackedCards.tsx';

interface HeroProps {
  mode: 'home' | 'resume' | 'cover_letter' | 'resignation';
}

const Hero: React.FC<HeroProps> = ({ mode }) => {
  const getHeroContent = () => {
    switch(mode) {
      case 'home':
        return {
          title: (
            <>
              The AI <span className="font-instrument italic">career assistant</span> for high achievers.
            </>
          ),
          desc: "From first-draft resumes to live mock interviews, Zysculpt uses advanced AI to build your professional future."
        };
      case 'cover_letter':
        return {
          title: (
            <>
              The AI cover letter builder that makes you <span className="animate-highlight">stand out</span>.
            </>
          ),
          desc: "Zysculpt crafts persuasive cover letters that highlight your unique value and land you more interviews."
        };
      case 'resignation':
        return {
          title: (
            <>
              The AI resignation letter builder for a graceful <span className="animate-highlight">exit</span>.
            </>
          ),
          desc: "Exit with confidence and professionalism. Zysculpt helps you maintain positive relationships during career transitions."
        };
      default:
        return {
          title: (
            <>
              Become the <span className="animate-highlight">hired</span> candidate for the job.
            </>
          ),
          desc: "Zysculpt turns your experience and any job description into a resume recruiters want to read."
        };
    }
  };

  const { title, desc } = getHeroContent();

  return (
    <section className="relative overflow-hidden pt-12 pb-24 lg:pt-20 lg:pb-40 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="max-w-2xl self-start pt-10">
            <h1 className="text-5xl lg:text-7xl font-semibold leading-[1.15] mb-8 text-[#191929] tracking-[-0.04em]">
              {title}
            </h1>
            <p className="text-xl text-[#191929]/80 leading-relaxed max-w-xl">
              {desc}
            </p>
          </div>
          <div className="flex justify-center lg:justify-end animate-in fade-in zoom-in duration-700">
            {mode === 'home' ? (
              <StackedCards />
            ) : (
              <ChatCard mode={mode} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;