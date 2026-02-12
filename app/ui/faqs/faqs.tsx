"use client";

import { PlusIcon } from "@phosphor-icons/react/dist/ssr";
import { motion, AnimatePresence } from "motion/react";
import React, { useState } from "react";

const faqs = [
  {
    id: 1,
    question: "Where is Binance Wealth available?",
    answer:
      "Crypto Assets Wealth Management is a crypto solution specifically catered to wealth managers with a license/exemption to provide investment advisory or management services. For more details on our list of acceptable documents, please contact us directly.",
  },
  {
    id: 2,
    question: "How do I apply for a Binance Wealth account?",
    answer:
      "Wealth managers can apply by submitting their corporate registration, regulatory licensing proof, and KYC documentation through our institutional portal. Once submitted, a dedicated account manager will review your application within 3-5 business days.",
  },
  {
    id: 3,
    question: "What assets are supported for wealth management?",
    answer:
      "We support a wide range of digital assets including blue-chip cryptocurrencies (BTC, ETH), major stablecoins (USDT, USDC), and various high-liquidity altcoins. We also offer access to tokenized real-world assets for eligible institutional clients.",
  },
  {
    id: 4,
    question: "How is the security of institutional assets managed?",
    answer:
      "Assets are secured using Multi-Party Computation (MPC) technology and multi-signature authorization. For institutional clients, we also offer integration with Ceffu, our institutional custody partner, providing cold-storage and off-exchange settlement options.",
  },
  {
    id: 5,
    question: "What are the benefits of the Binance VIP Program?",
    answer:
      "VIP members enjoy tiered trading fee discounts, higher API rate limits, increased withdrawal thresholds, and 24/7 priority support. Additionally, high-tier members gain access to exclusive industry events and bespoke investment research.",
  },
  {
    id: 6,
    question: "Does Binance offer off-exchange collateral solutions?",
    answer:
      "Yes, through our partnership with Ceffu, institutional traders can use the Mirror program. This allows you to trade on the Binance exchange using assets held securely in independent, third-party custody, minimizing counterparty risk.",
  },
];


export default function FAQS() {

  const [activeId, setActiveId] = useState<number | null>(null);

  const toggleFaq = (id: number) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <div className="w-full my-10 font-switzer px-8">
      <h1 className="font-bold ipad:font-extrabold text-2xl ipad:text-4xl mb-10">
        Frequent Ask Questions (FAQs)
      </h1>
      <div className="flex flex-col gap-4">
        {faqs.map((faq, index) => (
          <FAQCard
            key={faq.id}
            faq={faq}
            index={index + 1}
            isOpen={activeId === faq.id}
            onToggle={() => toggleFaq(faq.id)}
          />
        ))}
      </div>
    </div>
  );
}

const FAQCard = ({ 
  faq, 
  index, 
  isOpen, 
  onToggle 
}: { 
  faq: typeof faqs[0]; 
  index: number; 
  isOpen: boolean; 
  onToggle: () => void;
}) => {
  return (
    <div 
      className={`w-full border border-primary transition-colors duration-300 ${isOpen ? 'bg-primary/5' : 'bg-transparent'}`}
    >
      <button 
        className="w-full flex items-center justify-between p-4 ipad:p-8 text-left"
        onClick={onToggle}
      >
        <div className="flex items-center gap-4 font-medium ipad:font-semibold ipad:text-lg">
          <span className="">{index.toString().padStart(2, '0')}.</span>
          <p>{faq.question}</p>
        </div>
        
        <motion.div
          animate={{ rotate: isOpen ? 135 : 0 }}
          transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
        >
          <PlusIcon size={24} />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className="px-8 pb-8 font-normal text-gray-600">
              <div className="border-t border-primary/10 pt-6">
                {faq.answer}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

