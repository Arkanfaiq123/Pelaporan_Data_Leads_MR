import React from 'react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 bg-gradient-to-r from-[#44115b] via-[#6f2c91] to-[#551972] border-b border-purple-400/20 shadow-lg shadow-purple-950/20 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between">
        {/* Brand */}
        <div className="flex items-center gap-3.5">
          <div className="bg-white/95 p-1.5 px-3 rounded-2xl shadow-md border border-white/40 flex items-center justify-center transform hover:scale-105 transition-all duration-300">
            <img
              src="https://i.ibb.co.com/LDTC07KK/image-removebg-preview-1.png"
              alt="MyRepublic Logo"
              className="h-8 w-auto object-contain"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = '/MyRepublic_logo.png';
              }}
            />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-lg font-black text-white tracking-tight drop-shadow">
                MyRepublic <span className="text-amber-300 font-black">Purwokerto</span>
              </span>
            </div>
            <p className="text-[11px] text-purple-200/90 font-medium tracking-wide">
              Sistem Pelaporan Data Leads
            </p>
          </div>
        </div>

        {/* Live Indicator */}
        <div className="flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-md px-3 py-1.5 rounded-full text-white text-xs font-semibold shadow-inner">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
          <span className="text-[11px] font-bold text-purple-100 uppercase tracking-wider">Portal Aktif</span>
        </div>
      </div>
    </header>
  );
}
