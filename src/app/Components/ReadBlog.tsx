'use client'
import { useRouter } from "next/navigation";
import Image from "next/image";
import Navbar from "./Navbar";

const ReadBlog = () => {
    const router = useRouter();

    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Navbar />

            {/* Blog Content */}
            <main className="flex-1">
                <div className="max-w-4xl mx-auto px-4 py-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                        {/* Left side - Image */}
                        <div className="relative aspect-[4/3]">
                            <Image
                                src="/images/mock-blog/cs.png"
                                alt="C# Gravestone"
                                fill
                                className="object-cover rounded-lg"
                            />
                        </div>
                        
                        {/* Right side - Title */}
                        <div className="flex flex-col justify-center">
                            <p className="text-sm text-black mb-2">Created by griffn</p>
                            <h1 className="text-4xl font-bold text-black">C# Is Dead</h1>
                        </div>
                    </div>

                    <article className="prose max-w-none text-black">
                        <p>
                            People have told me that C# is on its decline because of the upcoming artificial intelligence wave,
                            which is mainly used by Python. This is the reason more and more people are switching to Python,
                            to keep up with the hype.
                        </p>

                        <p>
                            Another reason people say C# is dead is that Java is much better! You can find Java everywhere,
                            from mobile phones to refrigerators. And this is true for a really big part.
                        </p>

                        <p>
                            Microsoft is focussing more on the cloud, like Azure, AI, and ML. That is why we would need less C#
                            and more knowledge of Azure Cloud. This way we can run awesome stuff on Azure Cloud!
                        </p>

                        <div className="mt-8 flex justify-center">
                            <button onClick={() => {}} className="text-black hover:underline">
                                → All Posts
                            </button>
                        </div>
                    </article>
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-yellow-100 py-4 text-center text-sm text-black mt-auto">
                © 2024 Waffle. All rights reserved.
            </footer>
        </div>
    );
};

export default ReadBlog; 