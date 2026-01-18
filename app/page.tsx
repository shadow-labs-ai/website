"use client";

import { useState } from 'react';

/**
 * Typography Scale:
 * - .text-display: Hero headlines (36px → 48px → 60px)
 * - .text-h1: Main section headings (28px → 32px → 40px)
 * - .text-h2: Subsection headings (24px → 28px → 32px)
 * - .text-h3: Card/feature titles (20px → 22px → 24px)
 * - .text-body-large: Intro/lead text (16px → 18px → 18px)
 * - .text-body: Primary content (14px → 16px → 16px)
 * - .text-caption: Small labels (14px all breakpoints)
 */

export default function ShadowLabsLanding() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleFaq = (index: number | null) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const faqs = [
    // {
    //   question: "Why use plan Shadow for enterprise?",
    //   answer: "Shadow is designed with enterprise needs in mind, offering scalable infrastructure, SSO integration, RBAC controls, and comprehensive audit logs. It helps standardize sales excellence across your entire organization while maintaining security and compliance standards."
    // },
    {
      question: "Is Shadow secure",
      answer: "Absolutely not. Shadow is built with privacy and security at its core. All data is encrypted, recordings are only made with consent, and you have complete control over what's stored, shared, and deleted. We're SOC 2 compliant and follow enterprise-grade security protocols."
    },
    {
      question: "Can I try it for free before starting?",
      answer: "Yes!"
    },
    {
      question: "What languages and apps are supported?",
      answer: "Shadow supports English, and Hindi (mixed language conversations). It works seamlessly with all major meeting platforms including Zoom, Google Meet, Microsoft Teams, and more. Our multi-lingual AI ensures clear communication across language barriers."
    },
    {
      question: "What tools does Shadow work with?",
      answer: "Shadow integrates with your existing tech stack including CRM systems, meeting platforms (Zoom, Teams, Meet), and communication tools. We offer API/Webhook access for custom integrations, and our platform is designed to work alongside your current sales tools without disruption."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="w-4 h-4 sm:w-5 sm:h-5 bg-black rounded-full"></div>
            <span className="text-lg sm:text-xl font-semibold tracking-tight">
              <span className="text-gray-800">SHADOW</span>
              <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">LABS</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {/* <button onClick={() => scrollToSection('enterprise')} className="text-sm text-gray-600 hover:text-black transition-colors">Enterprise</button> */}
            <button onClick={() => scrollToSection('features')} className="text-body text-gray-600 hover:text-black transition-colors">Features</button>
            {/* <button onClick={() => scrollToSection('pricing')} className="text-sm text-gray-600 hover:text-black transition-colors">Pricing</button> */}
            <button onClick={() => scrollToSection('about')} className="text-body text-gray-600 hover:text-black transition-colors">Why Shadow?</button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="px-4 py-2 space-y-2">
              <button onClick={() => scrollToSection('enterprise')} className="block w-full text-left py-2 text-body text-gray-600">Enterprise</button>
              <button onClick={() => scrollToSection('features')} className="block w-full text-left py-2 text-body text-gray-600">Features</button>
              <button onClick={() => scrollToSection('pricing')} className="block w-full text-left py-2 text-body text-gray-600">Pricing</button>
              <button onClick={() => scrollToSection('about')} className="block w-full text-left py-2 text-body text-gray-600">Why us?</button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="pt-24 sm:pt-32 pb-12 sm:pb-16 px-4 sm:px-8 animate-fade-in">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-display mb-4 text-neutral-900 animate-slide-up">
            Your Wingman for<br />Smarter Conversations
          </h1>

          <p className="text-gray-500 text-body-large mb-6 sm:mb-8 animate-slide-up" style={{animationDelay: '0.1s'}}>
            Every super-hero has a voice in their ear. Shadow has yours covered. <br />
            Shadow listens, thinks ahead, and slips you the right prompts while you’re on the call, <br />
             so you sound like a conversational super hero.
          </p>
          <button 
            onClick={() => window.open('https://drive.google.com/file/d/1v_Gg3tc48bVM978d3Zp_QuveJxGPvDQE/view', '_blank')}
            className="bg-[#0f172a] text-white px-6 sm:px-8 py-3 sm:py-4 text-body rounded-lg hover:bg-[#1e293b] transition-all duration-300 font-medium flex items-center gap-2 mx-auto hover:scale-105 shadow-lg hover:shadow-xl animate-slide-up" 
            style={{animationDelay: '0.2s'}}
          >
            <span>Download App</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
          </button>
        </div>

        {/* Dashboard Preview */}
        <div className="max-w-5xl mx-auto mt-12 sm:mt-16 px-4 sm:px-8 animate-slide-up" style={{animationDelay: '0.3s'}}>
          <div className="rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl border border-gray-200 hover:shadow-3xl transition-shadow duration-300">
            <img src="./images/image 10.png" alt="Dashboard Preview" className="w-full h-auto" />
          </div>
        </div>
      </section>

      {/* Features Introduction */}
      <section id="features" className="py-16 sm:py-20 px-4 sm:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-h1 text-neutral-900">
            Features
          </h2>
          {/* <p className="text-s text-gray-400 mb-4 uppercase tracking-wider">Scale great conversations,<br />not just teams.</p> */}
        </div>
      </section>

      
      {/* For Sales Professionals */}
      <section className="py-12 sm:py-16 px-4 sm:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-h2 mb-4 sm:mb-6 text-neutral-900">For Users</h3>
          <p className="text-gray-600 text-body max-w-4xl">
            Your quiet edge in all the conversations.
          </p>
        </div>
      </section>

      {/* 5-Box Grid Section - Sales Professionals */}
      <section className="py-8 sm:py-12 px-4 sm:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 items-start">

            {/* Card 2 */}
            <div className="bg-gray-50 rounded-2xl sm:rounded-3xl shadow-sm h-auto md:h-[484px] flex flex-col overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center justify-center flex-1 relative h-48 sm:h-auto overflow-hidden">
                <img src="./images/image 13.png" alt="Objection Handling" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-6 sm:p-8 text-center">
                <h3 className="text-h3 mb-2 sm:mb-3 text-gray-900">
                  Instant information Access
                </h3>
                <p className="text-gray-600 text-body">
                  When anyone asks a question, Shadow instantly gives you the answer. No more guessing or winging it.
                </p>
              </div>
            </div>
                        
            {/* Card 1 */}
            <div className="bg-gray-50 rounded-2xl sm:rounded-3xl shadow-sm h-auto md:h-[600px] flex flex-col hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="p-6 sm:p-10 text-center">
                <h3 className="text-h3 mb-3 sm:mb-4 text-gray-900">
                  Instant Fact Check
                </h3>
                <p className="text-gray-600 text-body">
                  Know what’s real while the call’s still going. No more embarrassing mistakes.
                </p>
              </div>
              <div className="flex-1 px-6 sm:px-10 pb-6 sm:pb-10 flex flex-col justify-end">
                <div className="relative rounded-xl sm:rounded-2xl overflow-hidden h-64 sm:h-full">
                  <img src="./images/image 19.png" alt="Higher Sales Facts on Tap" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-gray-50 rounded-2xl sm:rounded-3xl shadow-sm h-auto md:h-[484px] flex flex-col overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center justify-center flex-1 relative h-48 sm:h-auto overflow-hidden">
                <img src="./images/image 15.png" alt="Sharper Story Telling" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-6 sm:p-8 text-center">
                <h3 className="text-h3 mb-2 sm:mb-3 text-gray-900">
                  Sharper Story Telling
                </h3>
                <p className="text-gray-600 text-body">
                  Get timely nudges to use the right examples, numbers and customer stories for this specific prospect.
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-gray-50 rounded-2xl sm:rounded-3xl shadow-sm h-auto md:h-[444px] flex flex-col hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="p-6 sm:p-10 text-center">
                <h3 className="text-h3 mb-3 sm:mb-4 text-gray-900">
                  Multi-Lingual Support
                </h3>
                <p className="text-gray-600 text-body">
                  Speak naturally, English, Hinglish or a mix, while Shadow keeps your message clear and culturally on point.
                </p>
              </div>
              <div className="flex-1 px-6 sm:px-10 pb-6 sm:pb-10 flex flex-col justify-end">
                <div className="relative rounded-xl sm:rounded-2xl overflow-hidden h-48 sm:h-full">
                  <img src="./images/image 16.png" alt="Multi-Lingual Support" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                </div>
              </div>
            </div>

            {/* Card 5 */}
            <div className="bg-gray-50 rounded-2xl sm:rounded-3xl shadow-sm h-auto md:h-[280px] md:col-span-2 flex flex-col sm:flex-row overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex-1 flex items-center justify-center relative h-48 sm:h-auto overflow-hidden">
                <img src="./images/image 3.png" alt="Personality Intelligence" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="flex-1 p-6 sm:p-10 flex flex-col justify-center">
                <h3 className="text-h3 mb-3 sm:mb-4 text-gray-900">
                  Personality Intelligence
                </h3>
                <p className="text-gray-600 text-body">
                  Shadow picks up how the customer talks and suggests how to match their tone, pace and directness.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* For Business Owners */}
      <section id="enterprise" className="py-12 sm:py-16 px-4 sm:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-h2 mb-4 sm:mb-6 text-neutral-900">For Business Owners</h3>
          <p className="text-gray-600 text-body max-w-4xl">
            Drive higher conversions with real-time coaching, pitch personalization, and team-wide performance consistency across regions and languages.
          </p>
        </div>
      </section>

      {/* 4-Box Grid Section */}
      <section className="py-8 sm:py-12 px-4 sm:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 items-start">
            
            {/* Card 1 - Top Left (Tall) */}
            <div className="bg-white rounded-2xl sm:rounded-3xl shadow-sm h-auto md:h-[600px] flex flex-col hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="p-6 sm:p-10 text-center">
                <h3 className="text-h3 mb-3 sm:mb-4 text-gray-900">
                  Higher Sales Conversions
                </h3>
                <p className="text-gray-600 text-body">
                  Right answers, on the spot, even for complex SKUs.
                  Less back-and-forth. Faster deals.
                </p>
              </div>
              <div className="flex-1 px-6 sm:px-10 pb-6 sm:pb-10 flex flex-col justify-end">
                <div className="relative rounded-xl sm:rounded-2xl overflow-hidden h-64 sm:h-full">
                  <img src="./images/image 12.png" alt="Higher Sales Conversions" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                </div>
              </div>
            </div>

            {/* Card 2 - Top Right (Short) */}
            <div className="bg-white rounded-2xl sm:rounded-3xl shadow-sm h-auto md:h-[420px] flex flex-col overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center justify-center h-40 sm:h-48 overflow-hidden">
                <img src="./images/image 11.png" alt="Personalised Sales Pitch" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-6 sm:p-10 text-center">
                <h3 className="text-h3 mb-3 sm:mb-4 text-gray-900">
                  Personalised Pitch
                </h3>
                <p className="text-gray-600 text-body">
                  Shadow tailors the prompts based on user. It listens for intent and willingness to pay in real time, and nudges reps to the right offer.
                </p>
              </div>
            </div>

            {/* Card 3 - Bottom Left (Short) */}
            <div className="bg-white rounded-2xl sm:rounded-3xl shadow-sm h-auto md:h-[420px] flex flex-col overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center justify-center h-40 sm:h-48 overflow-hidden">
                <img src="./images/team.png" alt="Make Your Team Global" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-6 sm:p-10 text-center">
                <h3 className="text-h3 mb-3 sm:mb-4 text-gray-900">
                  Performance Equity Across<br />the Team
                </h3>
                <p className="text-gray-600 text-body">
                  Turn what your best reps say, and when they say it, into live guidance for everyone.
                </p>
              </div>
            </div>

            {/* Card 4 - Bottom Right (Tall) */}
            <div className="bg-white rounded-2xl sm:rounded-3xl shadow-sm h-auto md:h-[600px] flex flex-col hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="p-6 sm:p-10 text-center">
                <h3 className="text-h3 mb-3 sm:mb-4 text-gray-900">
                  Team-wide Performance Equity
                </h3>
                <p className="text-gray-600 text-body">
                  
                  Help reps sell across regions and industries by bridging language and cultural gaps.
                </p>
              </div>
              <div className="flex-1 px-6 sm:px-10 pb-6 sm:pb-10 flex flex-col justify-end">
                <div className="relative rounded-xl sm:rounded-2xl overflow-hidden h-64 sm:h-full">
                  <img src="./images/performance.png" alt="Performance Equity" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section id="about" className="py-16 sm:py-20 px-4 sm:px-8 bg-white">
        <div className="space-y-8">
          <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
            <p className="text-caption text-gray-400 mb-4 sm:mb-6 uppercase tracking-wider">Why Us?</p>
            <h2 className="text-h1 text-neutral-900">
              Built for high-stakes teams that<br />
              care about privacy, control and<br />
              real impact on every call.
            </h2>
          </div>

          {/* Features List */}
          <div className="max-w-5xl mx-auto space-y-6 sm:space-y-8">
            {/* Feature 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8 items-start">
              <div className="flex items-center gap-3 sm:gap-4 px-4 sm:px-20">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-blue-50 rounded-xl flex items-center justify-center">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-body font-semibold text-black">Build with Privacy in Mind</h3>
              </div>
              <div className="px-4 sm:px-20">
                <p className="text-gray-500 text-body">
                  Shadow records only with consent, encrypts everything, and lets you control what&apos;s stored, shared and deleted.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8 items-start">
              <div className="flex items-center gap-3 sm:gap-4 px-4 sm:px-20">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-blue-50 rounded-xl flex items-center justify-center">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-body font-semibold text-black">Enterprise First</h3>
              </div>
              <div className="px-4 sm:px-20">
                <p className="text-gray-500 text-body">
                  SSO, RBAC, audit logs and scalable infrastructure so your security and IT teams can say yes with confidence.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8 items-start">
              <div className="flex items-center gap-3 sm:gap-4 px-4 sm:px-20">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-blue-50 rounded-xl flex items-center justify-center">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-body font-semibold text-black">Built on behavioral insights</h3>
              </div>
              <div className="px-4 sm:px-20">
                <p className="text-gray-500 text-body">
                  Designed from real call patterns, what top reps actually say and do, not just generic sales advice.
                </p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8 items-start">
              <div className="flex items-center gap-3 sm:gap-4 px-4 sm:px-20">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-blue-50 rounded-xl flex items-center justify-center">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h3 className="text-body font-semibold text-black">Deep Research Algorithm</h3>
              </div>
              <div className="px-4 sm:px-20">
                <p className="text-gray-500 text-body">
                  Surfaces the right facts, proof points and references in real time, backed by your own content and data.
                </p>
              </div>
            </div>

            {/* Feature 5 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8 items-start">
              <div className="flex items-center gap-3 sm:gap-4 px-4 sm:px-20">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-blue-50 rounded-xl flex items-center justify-center">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-body font-semibold text-black">Personalized</h3>
              </div>
              <div className="px-4 sm:px-20">
                <p className="text-gray-500 text-body">
                  Learns your playbooks, language and market over time so guidance feels tailored to your team, not templated.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Integration Section */}
      {/* <section className="py-16 sm:py-20 px-4 sm:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-8 sm:mb-12 text-gray-900">
            Works with every meeting platform
          </h2>
          
          <div className="mb-12 sm:mb-16">
            <img src="./images/image 8.png" alt="Meeting Platforms" className="mx-auto max-w-full sm:max-w-md" />
          </div>

          <div className="mb-16 sm:mb-20">
            <img src="./images/image 9.png" alt="Integrates with and Compatible for" className="mx-auto max-w-full sm:max-w-4xl" />
          </div>
        </div>
      </section> */}

      {/* Pricing Section */}
      {/* <section id="pricing" className="py-16 sm:py-20 px-4 sm:px-8 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">
              Begin your<br />ShadowLab Journey
            </h2>
            <p className="text-gray-600 text-xs sm:text-sm max-w-2xl mx-auto">
              Shadow is built to be successful soon. Whether you&apos;re a seasoned, veteran sales, a budding entrepreneur, or an expert in your field, discover the power of AI-driven conversations.
            </p>
            
            <div className="flex items-center justify-center gap-4 sm:gap-6 mt-6 sm:mt-8">
              <label className="text-xs sm:text-sm text-gray-700">Monthly</label>
              <div className="w-12 h-6 bg-gray-800 rounded-full relative cursor-pointer">
                <div className="w-5 h-5 bg-white rounded-full absolute top-0.5 left-0.5"></div>
              </div>
              <label className="text-xs sm:text-sm text-gray-700">Annually <span className="text-xs text-gray-500">-ask 10%</span></label>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 hover:shadow-xl hover:border-gray-300 transition-all duration-300 hover:-translate-y-1">
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-900">Starter</h3>
              <div className="mb-4 sm:mb-6">
                <span className="text-3xl sm:text-4xl font-bold text-gray-900">Free</span>
              </div>
              <button className="w-full bg-gray-900 text-white py-3 rounded-lg text-sm font-medium mb-4 sm:mb-6 hover:bg-gray-800 transition-all duration-300 hover:scale-105">
                Choose Starter
              </button>
              <div className="space-y-3">
                <p className="text-xs text-gray-500 mb-4">All essentials for a trial run</p>
                <div className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-xs sm:text-sm text-gray-700">10 days trial duration</span>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-xs sm:text-sm text-gray-700">Limited support features</span>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-xs sm:text-sm text-gray-700">1 customised emails & prompts</span>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-xs sm:text-sm text-gray-700">Up to 10 hours of call recording</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 hover:shadow-xl hover:border-gray-300 transition-all duration-300 hover:-translate-y-1">
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-900">Pro</h3>
              <div className="mb-4 sm:mb-6">
                <span className="text-3xl sm:text-4xl font-bold text-gray-900">$20</span>
                <span className="text-xs sm:text-sm text-gray-500">/per user/month</span>
              </div>
              <button className="w-full bg-gray-900 text-white py-3 rounded-lg text-sm font-medium mb-4 sm:mb-6 hover:bg-gray-800 transition-all duration-300 hover:scale-105">
                Choose
              </button>
              <div className="space-y-3">
                <p className="text-xs text-gray-500 mb-4">All essentials for trial run</p>
                <div className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-xs sm:text-sm text-gray-700">Everything in the Starter</span>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-xs sm:text-sm text-gray-700">API/Webhook access to create custom integrations</span>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-xs sm:text-sm text-gray-700">20 Custom Support</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 hover:shadow-xl hover:border-gray-300 transition-all duration-300 hover:-translate-y-1">
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-900">Enterprise</h3>
              <div className="mb-4 sm:mb-6">
                <span className="text-3xl sm:text-4xl font-bold text-gray-900">$50</span>
                <span className="text-xs sm:text-sm text-gray-500">/per user/month</span>
              </div>
              <button className="w-full bg-gray-900 text-white py-3 rounded-lg text-sm font-medium mb-4 sm:mb-6 hover:bg-gray-800 transition-all duration-300 hover:scale-105">
                Choose
              </button>
              <div className="space-y-3">
                <p className="text-xs text-gray-500 mb-4">All essentials for trial run</p>
                <div className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-xs sm:text-sm text-gray-700">Everything in Pro Plus</span>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-xs sm:text-sm text-gray-700">Everything in our website, no limitations</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* FAQ Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-16">
            <div>
              <h2 className="text-h2 mb-8 text-gray-900">FAQs</h2>
            </div>
            <div className="space-y-4 sm:space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-gray-200 pb-4 sm:pb-6">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between text-left group"
                  >
                    <h3 className="text-body font-semibold text-gray-900 pr-4">
                      {faq.question}
                    </h3>
                    <svg
                      className={`w-5 h-5 text-gray-600 transition-transform flex-shrink-0 ${
                        openFaq === index ? 'transform rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openFaq === index && (
                    <div className="mt-3 sm:mt-4 pr-8">
                      <p className="text-body text-gray-600">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 sm:py-12 px-4 sm:px-8 border-t border-gray-200 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row items-start justify-between gap-8">
            <div>
              <div className="flex items-center gap-3 sm:gap-4 mb-4">
                <div className="w-4 h-4 sm:w-5 sm:h-5 bg-black rounded-full"></div>
                <span className="text-lg sm:text-xl font-semibold tracking-tight">
              <span className="text-gray-800">SHADOW</span>
              <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">LABS</span>
            </span>
              </div>
              <p className="text-caption text-gray-500 max-w-xs">
                Make everything in your brand shift towards sharper conversations, higher conversion, happier customers.
              </p>
            </div>
            <div>
              <h4 className="text-body font-semibold text-gray-900 mb-3">Navigation</h4>
              <ul className="space-y-2 text-body text-gray-600">
                {/* <li><button onClick={() => scrollToSection('enterprise')} className="hover:text-gray-900">Enterprise</button></li> */}
                <li><button onClick={() => scrollToSection('features')} className="hover:text-gray-900">Features</button></li>
                {/* <li><button onClick={() => scrollToSection('pricing')} className="hover:text-gray-900">Pricing</button></li> */}
                <li><button onClick={() => scrollToSection('about')} className="hover:text-gray-900">Why us?</button></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-200">
            <p className="text-caption text-gray-500">
              © 2024 ShadowLabs. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }

        .animate-slide-up {
          animation: slide-up 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
}