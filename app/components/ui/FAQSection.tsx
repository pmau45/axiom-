'use client';

import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { buildFaqPageSchema, type FaqEntry } from '@/app/lib/schema';

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  items: FAQItem[];
  title?: string;
}

export function FAQSection({ items, title = 'Frequently Asked Questions' }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="space-y-6" aria-labelledby="faq-heading">
      {title && <h2 id="faq-heading" className="font-oswald text-4xl font-bold uppercase tracking-widest text-[#7A8B66] mb-8 text-center">{title}</h2>}

      <div className="space-y-4">
        {items.map((item, index) => (
          <details
            key={item.question}
            className="group border border-[#1A2030] rounded-lg bg-[#1A2030] hover:border-[#FF5E00]/50 transition-colors"
            open={openIndex === index}
            onClick={(e) => {
              e.preventDefault();
              handleToggle(index);
            }}
          >
            <summary className="cursor-pointer px-6 py-5 font-semibold text-white flex items-center justify-between hover:text-[#FF5E00] list-none">
              <span>{item.question}</span>
              <ChevronDown className="w-5 h-5 text-[#FF5E00] transition-transform group-open:rotate-180 flex-shrink-0 ml-4" />
            </summary>
            <div className="px-6 pb-5 border-t border-[#1A2030] text-[#C5C6C7] leading-relaxed pt-4">
              {item.answer}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}

/** JSON-LD FAQPage schema — accepts {question,answer} or {q,a} entries */
export function FAQSchema({ items }: { items: FaqEntry[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(buildFaqPageSchema(items)) }}
    />
  );
}
