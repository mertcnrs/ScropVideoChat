import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@radix-ui/themes';

export default function Home(): React.ReactNode {
  return (
    <div className="h-screen bg-gradient-to-b from-black to-purple-900 text-white overflow-hidden">
      {/* Header */}
      <nav className="flex justify-between items-center px-4 md:px-8 py-4 relative z-10">
        <div className="flex items-center space-x-4 md:space-x-8">
          <span className="text-2xl md:text-3xl font-bold">Anivo</span>
          <div className="md:hidden flex space-x-3">
            <Link href="/" className="text-sm hover:text-purple-400">Keşfet</Link>
            <Link href="/" className="text-sm hover:text-purple-400">İndir</Link>
          </div>
          <div className="hidden md:block space-x-6 text-lg">
            <Link href="/" className="border-b-2 border-purple-500 hover:text-purple-400 transition-colors">Anayasfa</Link>
            <Link href="/" className="hover:text-purple-400 transition-all">Keşfet</Link>
            <Link href="/" className="hover:text-purple-400 transition-all">İndir</Link>
          </div>
        </div>
        <Link href="/chat">
          <button className="bg-purple-600 hover:bg-purple-700 px-4 md:px-6 py-2 rounded-full text-white text-sm md:text-base">
            Oturum Aç
          </button>
        </Link>
      </nav>

      {/* Background Sliders */}
      <div className="fixed inset-0 overflow-hidden bg-black/40">
        {/* Left Slider - Moving Up */}
        <div className="absolute left-0 top-0 w-[33%] md:block hidden h-screen px-0.5">
          <div className="relative w-full h-[200vh] animate-slide-up">
            <Image 
              src="/banner-mb1.png" 
              alt="Background 1" 
              fill
              className="object-cover rounded-lg"
              sizes="33vw"
            />
            <Image 
              src="/banner-mb1.png" 
              alt="Background 1" 
              fill
              className="object-cover top-full rounded-lg"
              sizes="33vw"
            />
          </div>
        </div>
        
        {/* Center Slider - Moving Down */}
        <div className="absolute left-0 md:left-[33.5%] top-0 w-[49.5%] md:w-[33%] h-screen px-0.5">
          <div className="relative w-full h-[200vh] animate-slide-down">
            <Image 
              src="/banner-mb2.png" 
              alt="Background 2" 
              fill
              className="object-cover rounded-lg"
              sizes="(min-width: 768px) 33vw, 50vw"
            />
            <Image 
              src="/banner-mb2.png" 
              alt="Background 2" 
              fill
              className="object-cover top-full rounded-lg"
              sizes="(min-width: 768px) 33vw, 50vw"
            />
          </div>
        </div>
        
        {/* Right Slider - Moving Up */}
        <div className="absolute right-0 top-0 w-[49.5%] md:w-[33%] h-screen px-0.5">
          <div className="relative w-full h-[200vh] animate-slide-up-delayed">
            <Image 
              src="/banner-mb3.png" 
              alt="Background 3" 
              fill
              className="object-cover rounded-lg"
              sizes="(min-width: 768px) 33vw, 50vw"
            />
            <Image 
              src="/banner-mb3.png" 
              alt="Background 3" 
              fill
              className="object-cover top-full rounded-lg"
              sizes="(min-width: 768px) 33vw, 50vw"
            />
          </div>
        </div>

        {/* Bottom Gradient Overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-[70vh] bg-gradient-to-t from-black via-black/90 to-transparent"></div>
      </div>

      {/* Hero Section */}
      <div className="absolute bottom-0 left-0 right-0 z-20 px-4 sm:px-6 lg:px-8 pb-10">
        <div className="text-center flex flex-col items-center">
          <div className="mb-8">
            <h1 className="text-7xl font-bold mb-5 text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-white animate-gradient">Yüz Yüze</h1>
            <p className="text-xl mb-8 text-purple-100">Başlamak için tuşa tıkla</p>
            <Link href="/chat">
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white text-xl font-semibold px-12 py-4 rounded-full shadow-lg transform transition hover:scale-105 glow-button animate-pulse-scale">
                Görüntülü Sohbete Başla
              </button>
            </Link>
          </div>
          <button className="bg-white text-black hover:bg-gray-100 px-8 py-3 rounded-full transition-all font-medium">
            Uygulamayı İndir
          </button>
        </div>
      </div>
    </div>
  );
}
