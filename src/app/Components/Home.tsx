'use client'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from './Navbar';
import blogData from './../../../data/blogPosts.json';
import { BlogPost } from '@/types/blog';
import { useRouter } from "next/navigation";

const Home: React.FC = () => {
    const router = useRouter();
    const featuredPost: BlogPost = blogData.featuredPost;
    const blogPosts: BlogPost[] = blogData.blogPosts;

    const handleBlogClick = () => {
        router.push('/blog');  // All blogs will redirect to the C# blog for now
    };

    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <main className="max-w-6xl mx-auto px-4 py-8">
                {/* Featured Post */}
                <article 
                    className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-8 cursor-pointer hover:opacity-90 transition-opacity"
                    onClick={handleBlogClick}
                >
                    <div className="space-y-4">
                        <h1 className="text-4xl font-bold text-black">{featuredPost.title}</h1>
                        <p className="text-gray-700">{featuredPost.content}</p>
                        <button className="text-gray-600 hover:text-gray-900">Read →</button>
                    </div>
                    <div className="relative h-[400px]">
                        <Image
                            src={featuredPost.image}
                            alt={featuredPost.title}
                            fill
                            className="object-cover rounded-lg"
                        />
                    </div>
                </article>

                {/* Blog Posts Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {blogPosts.map((post) => (
                        <article 
                            key={post.id} 
                            className="space-y-4 cursor-pointer hover:opacity-90 transition-opacity"
                            onClick={handleBlogClick}
                        >
                            <div className="relative h-[200px]">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    className="object-cover rounded-lg"
                                />
                            </div>
                            <h2 className="text-xl font-bold text-black">{post.title}</h2>
                            <p className="text-gray-700 text-sm">{post.excerpt || post.content}</p>
                        </article>
                    ))}
                </div>

                {/* More Articles Section */}
                <section className="mt-16">
                    <h2 className="text-xl font-bold mb-8 text-black">More articles</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Add more article components here */}
                    </div>
                </section>
            </main>
            <footer className="bg-yellow-100 py-4 text-center text-sm text-gray-600">
                © 2024 Waffle. All rights reserved.
            </footer>
        </div>
    );
};

export default Home; 