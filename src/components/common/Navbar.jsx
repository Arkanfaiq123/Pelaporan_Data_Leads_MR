import React from 'react';

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-[#581c87] via-[#6f2c91] to-[#7e22ce] sticky top-0 z-40 shadow-lg border-b border-purple-400/20 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center">
        {/* Brand */}
        <div className="flex items-center gap-3.5">
          <div className="bg-white/95 p-1.5 px-3 rounded-2xl shadow-md border border-white/40 flex items-center justify-center transform hover:scale-105 transition-transform duration-200">
            <img
              src="https://i.ibb.co.com/LDTC07KK/image-removebg-preview-1.png"
              alt="MyRepublic Logo"
              className="h-7 w-auto object-contain"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = '/MyRepublic_logo.png';
              }}
            />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-base font-black text-white tracking-wide drop-shadow-sm">
                MyRepublic <span className="text-amber-300 font-extrabold">Purwokerto</span>
              </span>
            </div>
            <p className="text-[11px] text-purple-200/90 font-medium tracking-wide">
              Sistem Pelaporan Data Leads
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
}
