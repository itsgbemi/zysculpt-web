import React from 'react';

interface CardItem {
  title: string;
  description?: string;
  bgColor: string;
  textColor: string;
  icon: React.ReactNode;
}

const CARDS: CardItem[] = [
  {
    title: "Your Hobbies",
    bgColor: "bg-[#E2F9FF]",
    textColor: "text-[#191929]",
    icon: <span className="text-lg">🎨</span>
  },
  {
    title: "Places to Visit",
    bgColor: "bg-[#2D6A4F]",
    textColor: "text-white",
    icon: <span className="text-lg">📍</span>
  },
  {
    title: "Personal Information",
    bgColor: "bg-[#F3E8FF]",
    textColor: "text-[#191929]",
    icon: <span className="text-lg">🔒</span>
  },
  {
    title: "Food & Cooking",
    description: "Share your favorite dishes, recipes, and discuss cuisines of the world and swap",
    bgColor: "bg-[#FEF08A]",
    textColor: "text-[#191929]",
    icon: <span className="text-lg">🌭</span>
  },
  {
    title: "Health Care",
    description: "Talk about personal health, fitness and healthy lifestyle choices, and nutritional diet menus",
    bgColor: "bg-[#BFDBFE]",
    textColor: "text-[#191929]",
    icon: <span className="text-lg">🥦</span>
  },
  {
    title: "Work & Career",
    description: "Share your professional background, talk about job roles, and discuss career aspirations",
    bgColor: "bg-[#FBCFE8]",
    textColor: "text-[#191929]",
    icon: <span className="text-lg">💼</span>
  },
  {
    title: "Favorite TV Series",
    description: "You can discuss your favorite shows, their genres and actors. Talk about what scenes are most memorable and why",
    bgColor: "bg-[#CCFBF1]",
    textColor: "text-[#191929]",
    icon: <span className="text-lg">🎞️</span>
  }
];

const StackedCards: React.FC = () => {
  return (
    <div className="relative w-full max-w-[440px] h-[600px] lg:h-[700px] flex flex-col items-center">
      <div className="sticky top-24 w-full h-full flex flex-col items-center">
        {CARDS.map((card, index) => {
          // We apply a stacking offset to create the visual stack effect from the image
          const offset = index * 45;
          const zIndex = index + 10;
          const isExpanded = index === CARDS.length - 1; // Last one expanded by default in hero

          return (
            <div
              key={index}
              className={`absolute w-full rounded-[40px] p-8 shadow-xl transition-all duration-500 border border-black/5 ${card.bgColor} ${card.textColor}`}
              style={{
                top: `${offset}px`,
                zIndex: zIndex,
                maxWidth: `${100 - (CARDS.length - 1 - index) * 4}%`,
              }}
            >
              <div className="flex justify-between items-start gap-4">
                <div className="space-y-3">
                  <h3 className="text-xl font-bold leading-tight">{card.title}</h3>
                  {card.description && (
                    <p className="text-sm opacity-70 leading-relaxed font-medium max-w-[240px]">
                      {card.description}
                    </p>
                  )}
                </div>
                <div className="w-12 h-12 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                  {card.icon}
                </div>
              </div>
              
              {/* Decorative squiggles similar to the image */}
              <div className="absolute bottom-4 right-8 opacity-20 pointer-events-none">
                <svg width="100" height="60" viewBox="0 0 100 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 50C30 10 70 90 90 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StackedCards;