import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { blogPosts } from '@/lib/blog';
import './blog.css';

export const metadata = {
    title: 'Blogs | ShadowLabs',
    description: 'Latest insights from the ShadowLabs team on sales strategy, AI wingman technology, and smarter conversations.',
};

export default function BlogListing() {
    return (
        <div className="min-h-screen bg-white">
            <Header />

            <main className="pt-32 pb-20 px-4 sm:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h1 className="text-display mb-4 text-neutral-900">ShadowLabs Blogs</h1>
                        <p className="text-gray-500 text-body-large max-w-2xl mx-auto">
                            Insights on how to master sales conversations and leverage AI to build stronger customer relationships.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogPosts.map((post) => (
                            <Link
                                key={post.slug}
                                href={`/blog/${post.slug}`}
                                className="group flex flex-col bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
                            >
                                <div className="aspect-video relative overflow-hidden bg-gray-100">
                                    <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-cyan-500/10 flex items-center justify-center">
                                        <span className="text-teal-600 font-semibold tracking-wider text-sm uppercase">{post.category}</span>
                                    </div>
                                </div>
                                <div className="p-6 flex flex-col flex-1">
                                    <div className="flex items-center gap-2 mb-3">
                                        <span className="text-caption text-teal-600 font-medium px-2 py-1 bg-teal-50 rounded-md">
                                            {post.category}
                                        </span>
                                        <span className="text-caption text-gray-400">•</span>
                                        <span className="text-caption text-gray-400">{post.date}</span>
                                    </div>
                                    <h3 className="text-h3 text-gray-900 group-hover:text-teal-600 transition-colors mb-2">
                                        {post.title}
                                    </h3>
                                    <p className="text-body text-gray-500 line-clamp-3 mb-6">
                                        {post.excerpt}
                                    </p>
                                    <div className="mt-auto flex items-center text-teal-600 font-medium gap-2">
                                        Read More
                                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
