"use client";

import { useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { trackNavigation, trackMobileMenuToggle, trackSectionView } from '@/lib/analytics';

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pathname = usePathname();
    const router = useRouter();

    const scrollToSection = (id: string) => {
        if (pathname === '/') {
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
                setMobileMenuOpen(false);
                trackNavigation(id);
                trackSectionView(id);
            }
        } else {
            router.push(`/#${id}`);
            setMobileMenuOpen(false);
        }
    };

    return (
        <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-3 sm:gap-4">
                    <div className="w-4 h-4 sm:w-5 sm:h-5 bg-black rounded-full"></div>
                    <span className="text-lg sm:text-xl font-semibold tracking-tight">
                        <span className="text-gray-800">SHADOW</span>
                        <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">LABS</span>
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    <button onClick={() => scrollToSection('features')} className="text-body text-gray-600 hover:text-black transition-colors cursor-pointer">Features</button>
                    <button onClick={() => scrollToSection('about')} className="text-body text-gray-600 hover:text-black transition-colors cursor-pointer">Why Shadow?</button>
                    <button onClick={() => scrollToSection('contact')} className="text-body text-gray-600 hover:text-black transition-colors cursor-pointer">Connect with Founder</button>
                    <Link href="/blog" className="text-body text-gray-600 hover:text-black transition-colors">Blogs</Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => {
                        const newState = !mobileMenuOpen;
                        setMobileMenuOpen(newState);
                        trackMobileMenuToggle(newState);
                    }}
                    className="md:hidden p-2 cursor-pointer"
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
                        <button onClick={() => scrollToSection('features')} className="block w-full text-left py-2 text-body text-gray-600 cursor-pointer">Features</button>
                        <button onClick={() => scrollToSection('about')} className="block w-full text-left py-2 text-body text-gray-600 cursor-pointer">Why Shadow?</button>
                        <button onClick={() => scrollToSection('contact')} className="block w-full text-left py-2 text-body text-gray-600 cursor-pointer">Connect with Founder</button>
                        <Link href="/blog" onClick={() => setMobileMenuOpen(false)} className="block w-full text-left py-2 text-body text-gray-600 cursor-pointer">Blogs</Link>
                    </div>
                </div>
            )}
        </header>
    );
}
