"use client";

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { trackNavigation, trackSectionView } from '@/lib/analytics';

export default function Footer() {
    const pathname = usePathname();
    const router = useRouter();

    const scrollToSection = (id: string) => {
        if (pathname === '/') {
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
                trackNavigation(id);
                trackSectionView(id);
            }
        } else {
            router.push(`/#${id}`);
        }
    };

    return (
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
                            Sharper conversations. More wins. Happier customers. Less stress. That&apos;s the vibe.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-body font-semibold text-gray-900 mb-3">Navigation</h4>
                        <ul className="space-y-2 text-body text-gray-600">
                            <li><button onClick={() => scrollToSection('features')} className="hover:text-gray-900 cursor-pointer">Features</button></li>
                            <li><button onClick={() => scrollToSection('about')} className="hover:text-gray-900 cursor-pointer">Why Shadow?</button></li>
                            <li><button onClick={() => scrollToSection('contact')} className="hover:text-gray-900 cursor-pointer">Connect with Founder</button></li>
                            <li><Link href="/blog" className="hover:text-gray-900 cursor-pointer">Blogs</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-gray-200">
                    <p className="text-caption text-gray-500">
                        © {new Date().getFullYear()} ShadowLabs. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
