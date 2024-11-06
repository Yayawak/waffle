'use client'
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { users } from "../data/users";

const SignIn = () => {
    const router = useRouter();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSignIn = () => {
        const user = users.find(
            (u) => u.username === username && u.password === password
        );

        if (user) {
            router.push('/home');
        } else {
            setError("Invalid username or password");
        }
    };

    return (
        <div className="min-h-screen bg-yellow-100 flex items-center justify-center p-4">
            <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                {/* Left Side - Form */}
                <div className="space-y-6">
                    <h1 className="text-4xl font-bold mb-8 text-black">Sign In</h1>

                    {error && (
                        <p className="text-red-500 text-sm">{error}</p>
                    )}

                    <div className="space-y-2">
                        <label className="block text-gray-700">Username</label>
                        <div className="relative">
                            <span className="absolute inset-y-0 left-3 flex items-center text-gray-500">
                                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none">
                                    <path
                                        d="M20 21C20 19.6044 20 18.9067 19.8278 18.3389C19.44 17.0605 18.4395 16.06 17.1611 15.6722C16.5933 15.5 15.8956 15.5 14.5 15.5H9.5C8.10444 15.5 7.40665 15.5 6.83886 15.6722C5.56045 16.06 4.56004 17.0605 4.17224 18.3389C4 18.9067 4 19.6044 4 21M16.5 7.5C16.5 9.98528 14.4853 12 12 12C9.51472 12 7.5 9.98528 7.5 7.5C7.5 5.01472 9.51472 3 12 3C14.4853 3 16.5 5.01472 16.5 7.5Z"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </span>
                            <input
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                placeholder="Enter your username"
                                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:border-black text-black placeholder-gray-400"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="block text-gray-700">Password</label>
                        <div className="relative">
                            <span className="absolute inset-y-0 left-3 flex items-center text-gray-500">
                                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none">
                                    <path
                                        d="M16 9V7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7V9M16 9H8M16 9H17.2C17.9917 9 18.3875 9 18.6938 9.10899C19.0127 9.22544 19.2746 9.48732 19.391 9.80618C19.5 10.1125 19.5 10.5083 19.5 11.3V16.7C19.5 17.4917 19.5 17.8875 19.391 18.1938C19.2746 18.5127 19.0127 18.7746 18.6938 18.891C18.3875 19 17.9917 19 17.2 19H6.8C6.00833 19 5.61249 19 5.30621 18.891C4.98732 18.7746 4.72544 18.5127 4.60899 18.1938C4.5 17.8875 4.5 17.4917 4.5 16.7V11.3C4.5 10.5083 4.5 10.1125 4.60899 9.80618C4.72544 9.48732 4.98732 9.22544 5.30621 9.10899C5.61249 9 6.00833 9 6.8 9H8"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </span>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter your password"
                                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:border-black text-black placeholder-gray-400"
                            />
                        </div>
                    </div>

                    <button
                        onClick={handleSignIn}
                        className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition-colors"
                    >
                        Log In
                    </button>

                    <p className="text-gray-600 text-center">
                        Don't have an account?{' '}
                        <Link href="/signup" className="text-black underline hover:text-gray-800">
                            Sign Up
                        </Link>
                    </p>
                </div>

                {/* Right Side - Image */}
                <div className="hidden md:block">
                    <div className="rounded-2xl overflow-hidden">
                        <Image
                            src="/images/clock.jpeg"
                            alt="Study Time"
                            width={600}
                            height={400}
                            className="object-cover w-full h-full"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn; 