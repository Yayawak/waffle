'use client'
import { useRouter } from "next/navigation";
import Image from "next/image";

const Navbar = () => {
  const router = useRouter();

  return (
    <nav className="bg-yellow-100 px-4 py-2 flex items-center justify-between">
      {/* Logo */}
      <button 
        onClick={() => router.push('/home')} 
        className="flex items-center cursor-pointer"
      >
        <Image
          src="/images/mock-blog/waffle-logo.png"
          alt="Waffle Logo"
          width={40}
          height={40}
          className="rounded-full"
        />
      </button>

      {/* Search Bar */}
      <div className="flex-1 max-w-2xl mx-4">
        <div className="relative flex items-center">
          <input
            type="text"
            placeholder="What do you want to know?"
            className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:border-gray-400"
          />
          <button className="absolute right-0 h-full px-4 bg-orange-200 rounded-r-full hover:bg-orange-300 transition-colors">
            <svg
              className="w-5 h-5 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Right Side Buttons */}
      <div className="flex items-center gap-4">
        <button
          onClick={() => router.push('/new')}
          className="px-4 py-1 bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
        >
          New
        </button>
        <button onClick={() => router.push('/profile')}>
          <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
            <svg
              className="w-6 h-6 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </div>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;