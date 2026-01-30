"use client";

import { useState, useEffect } from 'react';
import {
  trackDownloadClick,
  trackNavigation,
  trackFAQToggle,
  trackMobileMenuToggle,
  trackSectionView,
  trackExternalLinkClick
} from '@/lib/analytics';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

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

  // Track section views when they come into viewport
  useEffect(() => {
    const sections = ['features', 'about'];
    const observers: IntersectionObserver[] = [];

    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                trackSectionView(sectionId);
                observer.unobserve(entry.target);
              }
            });
          },
          { threshold: 0.3 }
        );
        observer.observe(element);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  const toggleFaq = (index: number | null) => {
    const newOpenFaq = openFaq === index ? null : index;
    setOpenFaq(newOpenFaq);

    // Track FAQ toggle
    if (newOpenFaq !== null) {
      trackFAQToggle(faqs[newOpenFaq].question, true);
    } else if (index !== null) {
      trackFAQToggle(faqs[index].question, false);
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      trackNavigation(id);
      trackSectionView(id);
    }
  };

  const faqs = [
    // {
    //   question: "Why use plan Shadow for enterprise?",
    //   answer: "Shadow is designed with enterprise needs in mind, offering scalable infrastructure, SSO integration, RBAC controls, and comprehensive audit logs. It helps standardize sales excellence across your entire organization while maintaining security and compliance standards."
    // },
    {
      question: "Is Shadow secure?",
      answer: "Absolutely. Shadow is built with privacy and security at its core. All data is encrypted, recordings are only made with consent, and you have complete control over what's stored, shared, and deleted. We're SOC 2 compliant and follow enterprise-grade security protocols."
    },
    {
      question: "Can I try it for free before starting?",
      answer: "Yes! Download it and see if it's for you. No credit card needed."
    },
    {
      question: "What languages and apps are supported?",
      answer: "We've got English and Hindi for now. Works with Zoom, Google Meet, and Teams basically anywhere you take calls."
    },
    {
      question: "What tools does Shadow work with?",
      answer: "Shadow works with all the meeting platforms, whatever you're already using. We play nice with your tech stack. "
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 sm:pt-32 pb-12 sm:pb-16 px-4 sm:px-8 animate-fade-in">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-display mb-4 text-neutral-900 animate-slide-up">
            Your Wingman for<br />Smarter Conversations
          </h1>

          <p className="text-gray-500 text-body-large mb-6 sm:mb-8 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Every superhero has a voice in their ear. Shadow has yours covered. <br />
            Shadow listens, thinks ahead, and slips you the right prompts while you’re on the call, <br />
            Just you, sounding ridiculously smart on every single call.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <button
              onClick={() => {
                const downloadUrl = 'https://drive.google.com/file/d/1EVlXOMnbr-WxmGVZ2AZf_lXd7obvXgGY/view?usp=drive_link';
                trackDownloadClick();
                trackExternalLinkClick(downloadUrl, 'download_app');
                window.open(downloadUrl, '_blank');
              }}
              className="bg-[#0f172a] text-white px-6 sm:px-8 py-3 sm:py-4 text-body rounded-lg hover:bg-[#1e293b] transition-all duration-300 font-medium flex items-center gap-2 hover:scale-105 shadow-lg hover:shadow-xl cursor-pointer w-full sm:w-auto justify-center"
            >
              <span>Download App</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-white text-gray-900 border border-gray-200 px-6 sm:px-8 py-3 sm:py-4 text-body rounded-lg hover:bg-gray-50 transition-all duration-300 font-medium flex items-center gap-2 hover:scale-105 shadow-sm hover:shadow-md cursor-pointer w-full sm:w-auto justify-center"
            >
              <span>Connect with Founder</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Dashboard Preview */}
        <div className="max-w-5xl mx-auto mt-12 sm:mt-16 px-4 sm:px-8 animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <div className="rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl border border-gray-200 hover:shadow-3xl transition-shadow duration-300">
            <img src="/images/image 10.png" alt="Dashboard Preview" className="w-full h-auto" />
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
          <h3 className="text-h2 mb-4 sm:mb-6 text-neutral-900">For You</h3>
          <p className="text-gray-600 text-body max-w-4xl">
            Your secret weapon for crushing every conversation. No one will know.
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
                <img src="/images/image 13.png" alt="Objection Handling" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-6 sm:p-8 text-center">
                <h3 className="text-h3 mb-2 sm:mb-3 text-gray-900">
                  Instant Answers from your data sources
                </h3>
                <p className="text-gray-600 text-body">
                  Someone drops a random question? Shadow instantly gives you the answer. No more guessing or winging it.
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
                  <img src="/images/image 19.png" alt="Higher Sales Facts on Tap" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-gray-50 rounded-2xl sm:rounded-3xl shadow-sm h-auto md:h-[484px] flex flex-col overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center justify-center flex-1 relative h-48 sm:h-auto overflow-hidden">
                <img src="/images/image 15.png" alt="Sharper Story Telling" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-6 sm:p-8 text-center">
                <h3 className="text-h3 mb-2 sm:mb-3 text-gray-900">
                  Tell Stories That Actually Land
                </h3>
                <p className="text-gray-600 text-body">
                  Shadow nudges you with the perfect example or stat at the perfect moment. Your stories hit different now.
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-gray-50 rounded-2xl sm:rounded-3xl shadow-sm h-auto md:h-[444px] flex flex-col hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="p-6 sm:p-10 text-center">
                <h3 className="text-h3 mb-3 sm:mb-4 text-gray-900">
                  Speak How You Actually Speak
                </h3>
                <p className="text-gray-600 text-body">
                  English? Hindi? Hinglish? Mix it all up. Shadow gets it and keeps you sounding smooth no matter what language flies out.
                </p>
              </div>
              <div className="flex-1 px-6 sm:px-10 pb-6 sm:pb-10 flex flex-col justify-end">
                <div className="relative rounded-xl sm:rounded-2xl overflow-hidden h-48 sm:h-full">
                  <img src="/images/image 16.png" alt="Multi-Lingual Support" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                </div>
              </div>
            </div>

            {/* Card 5 */}
            <div className="bg-gray-50 rounded-2xl sm:rounded-3xl shadow-sm h-auto md:h-[280px] md:col-span-2 flex flex-col sm:flex-row overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex-1 flex items-center justify-center relative h-48 sm:h-auto overflow-hidden">
                <img src="/images/image 3.png" alt="Personality Intelligence" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="flex-1 p-6 sm:p-10 flex flex-col justify-center">
                <h3 className="text-h3 mb-3 sm:mb-4 text-gray-900">
                  Read the Room - Personality Intelligence
                </h3>
                <p className="text-gray-600 text-body">
                  Shadow picks up on how they're talking and tells you how to vibe with them. Match their energy without even trying.
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
            Turn your whole team into closers. Shadow makes everyone sound like your best rep without the awkward coaching sessions.
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
                  Close More Deals, Obviously
                </h3>
                <p className="text-gray-600 text-body">
                  Your team gets instant answers to everything. No stalling, no "let me get back to you." Just smooth, confident closes.
                </p>
              </div>
              <div className="flex-1 px-6 sm:px-10 pb-6 sm:pb-10 flex flex-col justify-end">
                <div className="relative rounded-xl sm:rounded-2xl overflow-hidden h-64 sm:h-full">
                  <img src="/images/image 12.png" alt="Higher Sales Conversions" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                </div>
              </div>
            </div>

            {/* Card 2 - Top Right (Short) */}
            <div className="bg-white rounded-2xl sm:rounded-3xl shadow-sm h-auto md:h-[420px] flex flex-col overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center justify-center h-40 sm:h-48 overflow-hidden">
                <img src="/images/image 11.png" alt="Personalised Sales Pitch" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-6 sm:p-10 text-center">
                <h3 className="text-h3 mb-3 sm:mb-4 text-gray-900">
                  Personalized Pitch
                </h3>
                <p className="text-gray-600 text-body">
                  Shadow tailors the prompts based on user. It listens for intent and willingness to pay in real time, and nudges reps to the right offer.
                </p>
              </div>
            </div>

            {/* Card 3 - Bottom Left (Short) */}
            <div className="bg-white rounded-2xl sm:rounded-3xl shadow-sm h-auto md:h-[420px] flex flex-col overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center justify-center h-40 sm:h-48 overflow-hidden">
                <img src="/images/team.png" alt="Make Your Team Global" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-6 sm:p-10 text-center">
                <h3 className="text-h3 mb-3 sm:mb-4 text-gray-900">
                  Performance Equity Across<br />the Team
                </h3>
                <p className="text-gray-600 text-body">
                  Shadow learns from your top performers and teaches everyone else their moves. It's like copy-paste for sales skills.
                </p>
              </div>
            </div>

            {/* Card 4 - Bottom Right (Tall) */}
            <div className="bg-white rounded-2xl sm:rounded-3xl shadow-sm h-auto md:h-[600px] flex flex-col hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="p-6 sm:p-10 text-center">
                <h3 className="text-h3 mb-3 sm:mb-4 text-gray-900">
                  Go Global Without the Chaos
                </h3>
                <p className="text-gray-600 text-body">
                  Your team can sell anywhere, in any language, without sounding like robots. Shadow handles all the cultural weird stuff.
                </p>
              </div>
              <div className="flex-1 px-6 sm:px-10 pb-6 sm:pb-10 flex flex-col justify-end">
                <div className="relative rounded-xl sm:rounded-2xl overflow-hidden h-64 sm:h-full">
                  <img src="/images/performance.png" alt="Performance Equity" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
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
            <p className="text-caption text-gray-400 mb-4 sm:mb-6 uppercase tracking-wider">Why Shadow?</p>
            <h2 className="text-h1 text-neutral-900">
              We&apos;re not another boring<br />
              enterprise tool. We&apos;re<br />
              built different.
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
                <h3 className="text-body font-semibold text-black">Your Secrets Stay Secret</h3>
              </div>
              <div className="px-4 sm:px-20">
                <p className="text-gray-500 text-body">
                  Everything&apos;s encrypted. You control what stays and what gets deleted. Simple as that.
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
                <h3 className="text-body font-semibold text-black">Enterprise-Grade</h3>
              </div>
              <div className="px-4 sm:px-20">
                <p className="text-gray-500 text-body">
                  All the enterprise security stuff your IT team cares about. SSO, audit logs, the works. We speak their language so you don&apos;t have to.
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
                <h3 className="text-body font-semibold text-black">Learned From the Best (Real People)</h3>
              </div>
              <div className="px-4 sm:px-20">
                <p className="text-gray-500 text-body">
                  We studied what actually works in real conversations. No generic advice from some sales guru. Just actual patterns from people who crush it.
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
                <h3 className="text-body font-semibold text-black">Smart Research Engine</h3>
              </div>
              <div className="px-4 sm:px-20">
                <p className="text-gray-500 text-body">
                  Pulls exactly what you need from your own docs and data. Right fact, right moment. It&apos;s like having a research assistant who never sleeps.
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
                <h3 className="text-body font-semibold text-black">Gets Smarter With You</h3>
              </div>
              <div className="px-4 sm:px-20">
                <p className="text-gray-500 text-body">
                  Shadow learns how YOU talk, what YOUR team sells, what YOUR market needs. The more you use it, the more it feels like it&apos;s reading your mind.
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
            <img src="/images/image 8.png" alt="Meeting Platforms" className="mx-auto max-w-full sm:max-w-md" />
          </div>

          <div className="mb-16 sm:mb-20">
            <img src="/images/image 9.png" alt="Integrates with and Compatible for" className="mx-auto max-w-full sm:max-w-4xl" />
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
                  <span className="text-xs sm:text-sm text-gray-700">1 customized emails & prompts</span>
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

      {/* Connect with Founder Section */}
      <section id="contact" className="py-16 sm:py-24 px-4 sm:px-8 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-h1 mb-4 text-gray-900">Connect with Founder</h2>
            <p className="text-gray-600 text-body max-w-2xl mx-auto">
              Have questions or want to explore how Shadow can help your team? Let&apos;s chat.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-16 items-stretch">
            {/* Contact Options */}
            <div className="flex flex-col gap-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a
                  href="https://wa.me/919582819710"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 group flex flex-col items-center text-center"
                  onClick={() => trackExternalLinkClick('https://wa.me/919582819710', 'whatsapp')}
                >
                  <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </div>
                  <h4 className="text-body font-semibold text-gray-900 mb-1">WhatsApp</h4>
                  <p className="text-caption text-gray-500">Fastest response</p>
                </a>

                <a
                  href="https://www.linkedin.com/in/shubham16180/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 group flex flex-col items-center text-center"
                  onClick={() => trackExternalLinkClick('https://www.linkedin.com/in/shubham16180/', 'linkedin')}
                >
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </div>
                  <h4 className="text-body font-semibold text-gray-900 mb-1">LinkedIn</h4>
                  <p className="text-caption text-gray-500">Founder Profile</p>
                </a>
              </div>

              <a
                href="mailto:shubham@shadowlabs.ai"
                className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 group flex flex-1 items-center gap-4"
                onClick={() => trackExternalLinkClick('mailto:shubham@shadowlabs.ai', 'email')}
              >
                <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-body font-semibold text-gray-900">Email</h4>
                  <p className="text-body text-gray-600">shubham@shadowlabs.ai</p>
                </div>
              </a>
            </div>

            {/* Simple Contact Form */}
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm flex flex-col h-full">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const formData = new FormData(e.currentTarget);
                  const name = formData.get('name');
                  const message = formData.get('message');
                  const email = formData.get('email');
                  const whatsappUrl = `https://wa.me/919582819710?text=${encodeURIComponent(`Hi, I'm ${name} (${email}). ${message}`)}`;
                  window.open(whatsappUrl, '_blank');
                }}
                className="space-y-4 flex-1 flex flex-col"
              >
                <div>
                  <label className="block text-caption font-medium text-gray-700 mb-1">Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black/5 transition-all text-body"
                  />
                </div>
                <div>
                  <label className="block text-caption font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black/5 transition-all text-body"
                  />
                </div>
                <div className="flex-1 flex flex-col">
                  <label className="block text-caption font-medium text-gray-700 mb-1">Message</label>
                  <textarea
                    name="message"
                    required
                    placeholder="How can we help?"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black/5 transition-all text-body resize-none flex-1"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-black text-white py-4 rounded-xl font-medium hover:bg-gray-900 transition-all duration-300 hover:scale-[1.02] shadow-sm cursor-pointer mt-4"
                >
                  Send via WhatsApp
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

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
                    className="w-full flex items-center justify-between text-left group cursor-pointer"
                  >
                    <h3 className="text-body font-semibold text-gray-900 pr-4">
                      {faq.question}
                    </h3>
                    <svg
                      className={`w-5 h-5 text-gray-600 transition-transform flex-shrink-0 ${openFaq === index ? 'transform rotate-180' : ''
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
      <Footer />

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