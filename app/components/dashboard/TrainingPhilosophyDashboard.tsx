'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { trainingPhilosophyFAQs } from '@/app/data/training-philosophy-faqs';
import { ProgressChart, QuadrantChart } from '../ui/TrainingCharts';

export function TrainingPhilosophyDashboard() {
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);
  const [openAccordionIndex, setOpenAccordionIndex] = useState<number | null>(null);

  const currentCategory = trainingPhilosophyFAQs[currentCategoryIndex];

  const toggleAccordion = (index: number) => {
    setOpenAccordionIndex(openAccordionIndex === index ? null : index);
  };

  return (
    <div className="page-enter">
      {/* Header */}
      <section className="relative min-h-[50vh] flex items-center justify-center pt-20 clip-slant pb-16 overflow-hidden bg-gradient-to-br from-[#7A8B66]/10 via-[#050505] to-[#050505]" aria-labelledby="philosophy-heading">
        <div className="absolute inset-0 bg-texture opacity-30 pointer-events-none z-0" aria-hidden="true" />
        <div className="max-w-5xl mx-auto px-4 relative z-10 text-center">
          <h1 id="philosophy-heading" className="font-oswald text-5xl md:text-7xl font-bold uppercase tracking-tight leading-[1] mb-6 text-white drop-shadow-2xl">
            Training <span className="text-[#7A8B66]">Philosophy</span>
          </h1>
          <p className="text-lg md:text-xl font-light max-w-3xl mx-auto text-[#C5C6C7] leading-relaxed">
            Our training philosophy is built on real-world results and transparent communication. We specialize in
            high-drive breeds and behavioral rehabilitation, focusing on shifting a dog&apos;s state of mind rather than
            just managing symptoms.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 flex flex-col md:flex-row gap-8">
        {/* Sidebar Navigation */}
        <aside className="md:w-1/3 lg:w-1/4">
          <div className="sticky top-24 bg-[#1A2030] p-6 rounded-lg border border-[#1A2030]">
            <h2 className="text-sm uppercase tracking-widest text-[#7A8B66] font-bold mb-6">Explore Topics</h2>
            <nav className="flex flex-col gap-2">
              {trainingPhilosophyFAQs.map((faq, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentCategoryIndex(index);
                    setOpenAccordionIndex(null);
                  }}
                  className={`text-left px-4 py-3 rounded-lg font-medium transition-colors duration-200 border-l-4 ${
                    index === currentCategoryIndex
                      ? 'bg-[#0B0C10] text-[#FF5E00] border-[#FF5E00]'
                      : 'text-[#C5C6C7] border-transparent hover:bg-[#0B0C10] hover:text-white'
                  }`}
                >
                  {faq.category}
                </button>
              ))}
            </nav>
          </div>
        </aside>

        {/* Main Content Area */}
        <section className="md:w-2/3 lg:w-3/4 flex flex-col gap-12">
          {/* Philosophy Insights Section */}
          <div className="bg-[#1A2030] p-6 md:p-8 rounded-lg border border-[#1A2030]">
            <h2 className="font-oswald text-2xl uppercase tracking-widest text-white mb-4">Training Philosophy Insights</h2>
            <p className="text-[#C5C6C7] mb-8 leading-relaxed">
              Before diving into specific questions, it is crucial to understand the foundation of our approach. Real-world
              reliability requires a balanced methodology and an understanding that behavioral modification takes time and
              consistency. Explore the visualizations below to see how we approach progress and conditioning.
            </p>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
              {/* Progress Chart */}
              <div className="flex flex-col bg-[#0B0C10] p-4 rounded-lg border border-[#1A2030]">
                <h3 className="font-oswald text-lg uppercase tracking-widest text-white text-center mb-2">The Path to Reliability</h3>
                <p className="text-xs text-center text-[#C5C6C7] mb-4">&quot;Rehabilitation is not a linear process.&quot;</p>
                <div className="relative w-full h-64 md:h-80">
                  <ProgressChart />
                </div>
              </div>

              {/* Quadrant Chart */}
              <div className="flex flex-col bg-[#0B0C10] p-4 rounded-lg border border-[#1A2030]">
                <h3 className="font-oswald text-lg uppercase tracking-widest text-white text-center mb-2">Balanced Operant Conditioning</h3>
                <p className="text-xs text-center text-[#C5C6C7] mb-4">&quot;Utilizing all four quadrants.&quot;</p>
                <div className="relative w-full h-64 md:h-80">
                  <QuadrantChart />
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div>
            <div className="mb-6">
              <h2 className="font-oswald text-3xl uppercase tracking-widest text-[#7A8B66] mb-2">{currentCategory.category}</h2>
              <p className="text-[#C5C6C7] leading-relaxed">{currentCategory.desc}</p>
            </div>

            <div className="flex flex-col gap-4">
              {currentCategory.questions.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-[#1A2030] rounded-lg border border-[#1A2030] overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => toggleAccordion(idx)}
                    className="w-full text-left px-6 py-5 flex justify-between items-center hover:bg-[#0B0C10] focus:outline-none"
                  >
                    <span className="font-semibold text-lg text-white pr-4">{item.q}</span>
                    <span className="text-[#FF5E00] font-bold text-xl flex-shrink-0">
                      {openAccordionIndex === idx ? <Minus size={24} /> : <Plus size={24} />}
                    </span>
                  </button>

                  {openAccordionIndex === idx && (
                    <div className="bg-[#0B0C10] px-6 py-5 border-t border-[#1A2030]">
                      <p className="text-[#C5C6C7] leading-relaxed">
                        {item.a.split('*').map((segment, i) =>
                          i % 2 === 0 ? (
                            <span key={i}>{segment}</span>
                          ) : (
                            <strong key={i} className="text-white">{segment}</strong>
                          )
                        )}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
