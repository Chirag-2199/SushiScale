"use client";

import { useState } from "react";

const faqs = [
  {
    question: "How much ad spend do I need?",
    answer:
      "We recommend a minimum of $500/month in ad spend per client to generate meaningful data and consistent lead flow. This is separate from our management fee. Most businesses start between $500–$1,500/month and increase spend once campaigns are producing profitable results.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-white px-6 py-24"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50/50 to-white" />

      <div className="relative mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-14 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-blue-700">
            FAQ
          </div>

          <h2 className="text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">
            Common Questions
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-slate-600">
            Everything you need to know before getting started.
          </p>
        </div>

        {/* FAQ Card */}
        <div className="rounded-[32px] border border-slate-200 bg-white/80 shadow-xl backdrop-blur-xl overflow-hidden">
          {faqs.map((faq, index) => {
            const isOpen = open === index;

            return (
              <div key={faq.question}>
                <button
                  onClick={() =>
                    setOpen(isOpen ? null : index)
                  }
                  className="flex w-full items-center justify-between px-8 py-7 text-left transition-colors hover:bg-slate-50"
                >
                  <span className="pr-4 text-lg font-semibold text-slate-900">
                    {faq.question}
                  </span>

                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 transition-transform duration-300 ${isOpen ? "rotate-180" : ""
                      }`}
                  >
                    <svg
                      className="h-5 w-5 text-slate-500"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </button>

                <div
                  className={`grid transition-all duration-300 ${isOpen
                      ? "grid-rows-[1fr]"
                      : "grid-rows-[0fr]"
                    }`}
                >
                  <div className="overflow-hidden">
                    <div className="border-t border-slate-100 px-8 py-6">
                      <p className="leading-8 text-slate-600">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 text-center">
          <p className="mb-5 text-slate-600">
            Still have questions?
          </p>

          <a
            href="#booking"
            className="inline-flex items-center justify-center rounded-2xl bg-blue-600 px-6 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-xl"
          >
            Book A Free Strategy Call
          </a>
        </div>
      </div>
    </section>
  );
}