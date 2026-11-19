import React from 'react';
import { Map, MapPin, BarChart3, ArrowRight, Sparkles, ShieldCheck, ChevronRight } from 'lucide-react';

export default function StepArea({ onSelectArea, onGoToCekLead }) {
  return (
    <section className="space-y-8 max-w-4xl mx-auto py-2 animate-in fade-in duration-500">
      {/* Hero Banner Header with Layered Depth */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#4a1264] via-[#6f2c91] to-[#390d4e] p-7 sm:p-10 text-white shadow-2xl shadow-purple-950/25 border border-purple-400/30">
        {/* Abstract Background Lights */}
        <div className="absolute top-0 right-0 -mt-12 -mr-12 w-80 h-80 bg-purple-400/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-1/4 -mb-10 w-60 h-60 bg-fuchsia-400/20 rounded-full blur-2xl pointer-events-none"></div>

        <div className="relative z-10 max-w-2xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-white/15 backdrop-blur-md rounded-full text-xs font-bold text-purple-100 border border-white/20 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>Portal Kunjungan & Prospek AE</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight drop-shadow-sm text-white">
            Pilih Area Penugasan Sales
          </h1>

          <p className="text-purple-100/90 text-xs sm:text-sm leading-relaxed max-w-xl font-normal">
            Silakan pilih klaster wilayah untuk input prospek kunjungan baru, atau pantau perolehan data leads secara terpusat.
          </p>
        </div>
      </div>

      {/* Main Choice Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Card REGULER */}
        <div
          onClick={() => onSelectArea('REGULER')}
          className="group relative bg-white/90 backdrop-blur-sm border border-purple-100 hover:border-[#6f2c91] rounded-3xl p-7 shadow-sm hover:shadow-2xl hover:shadow-purple-900/15 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer flex flex-col justify-between overflow-hidden"
        >
          {/* Subtle Corner Decoration */}
          <div className="absolute -top-12 -right-12 w-32 h-32 bg-purple-100/60 rounded-full group-hover:scale-150 transition-transform duration-500 pointer-events-none"></div>

          <div>
            <div className="w-14 h-14 bg-gradient-to-tr from-purple-100 to-purple-50 text-[#6f2c91] rounded-2xl flex items-center justify-center ring-4 ring-purple-50 group-hover:bg-gradient-to-tr group-hover:from-[#6f2c91] group-hover:to-[#9333ea] group-hover:text-white transition-all duration-300 shadow-sm mb-6">
              <Map className="w-7 h-7" />
            </div>

            <h3 className="font-extrabold text-slate-800 text-xl tracking-tight group-hover:text-[#6f2c91] transition-colors">
              Area Reguler
            </h3>
            <p className="text-slate-500 text-xs sm:text-sm mt-2.5 leading-relaxed font-normal">
              Formulir pencatatan data leads kunjungan pelanggan untuk perumahan & klaster area Reguler.
            </p>
          </div>

          <div className="mt-8 pt-4 border-t border-purple-50 flex items-center justify-between">
            <span className="text-xs font-bold text-slate-400 group-hover:text-[#6f2c91] transition-colors">
              Mulai Input Leads
            </span>
            <div className="w-9 h-9 rounded-2xl bg-purple-50 text-[#6f2c91] flex items-center justify-center group-hover:bg-[#6f2c91] group-hover:text-white transition-all transform group-hover:translate-x-1 shadow-sm">
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </div>

        {/* Card RING & ECO */}
        <div
          onClick={() => onSelectArea('RING & ECO')}
          className="group relative bg-white/90 backdrop-blur-sm border border-purple-100 hover:border-[#6f2c91] rounded-3xl p-7 shadow-sm hover:shadow-2xl hover:shadow-purple-900/15 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer flex flex-col justify-between overflow-hidden"
        >
          {/* Subtle Corner Decoration */}
          <div className="absolute -top-12 -right-12 w-32 h-32 bg-purple-100/60 rounded-full group-hover:scale-150 transition-transform duration-500 pointer-events-none"></div>

          <div>
            <div className="w-14 h-14 bg-gradient-to-tr from-purple-100 to-purple-50 text-[#6f2c91] rounded-2xl flex items-center justify-center ring-4 ring-purple-50 group-hover:bg-gradient-to-tr group-hover:from-[#6f2c91] group-hover:to-[#9333ea] group-hover:text-white transition-all duration-300 shadow-sm mb-6">
              <MapPin className="w-7 h-7" />
            </div>

            <h3 className="font-extrabold text-slate-800 text-xl tracking-tight group-hover:text-[#6f2c91] transition-colors">
              Area Ring & Eco
            </h3>
            <p className="text-slate-500 text-xs sm:text-sm mt-2.5 leading-relaxed font-normal">
              Formulir pencatatan data leads kunjungan pelanggan untuk wilayah cakupan paket Ringan & Eco.
            </p>
          </div>

          <div className="mt-8 pt-4 border-t border-purple-50 flex items-center justify-between">
            <span className="text-xs font-bold text-slate-400 group-hover:text-[#6f2c91] transition-colors">
              Mulai Input Leads
            </span>
            <div className="w-9 h-9 rounded-2xl bg-purple-50 text-[#6f2c91] flex items-center justify-center group-hover:bg-[#6f2c91] group-hover:text-white transition-all transform group-hover:translate-x-1 shadow-sm">
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </div>

        {/* Card CEK JUMLAH DATA LEAD */}
        <div
          onClick={onGoToCekLead}
          className="sm:col-span-2 group relative bg-white/95 backdrop-blur-md border border-purple-200/80 hover:border-[#6f2c91] rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-2xl hover:shadow-purple-900/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div className="flex flex-col sm:flex-row items-center text-center sm:text-left gap-5">
            <div className="w-16 h-16 bg-gradient-to-tr from-[#6f2c91] to-[#9333ea] text-white rounded-2xl flex items-center justify-center shadow-lg shadow-purple-900/25 group-hover:scale-110 transition-transform duration-300 shrink-0">
              <BarChart3 className="w-8 h-8" />
            </div>
            <div>
              <h3 className="font-extrabold text-slate-800 text-xl tracking-tight group-hover:text-[#6f2c91] transition-colors">
                Cek Jumlah Data Lead
              </h3>
              <p className="text-slate-500 text-xs sm:text-sm mt-1 leading-relaxed max-w-xl font-normal">
                Periksa akumulasi perolehan prospek Sales AE (Cool, Warm, Hot, Closing) atau rekapitulasi performa tim ASM bulan berjalan.
              </p>
            </div>
          </div>

          <div className="w-full sm:w-auto flex justify-center">
            <button
              type="button"
              className="w-full sm:w-auto px-7 py-3.5 bg-gradient-to-r from-[#6f2c91] to-[#8426b3] hover:from-[#582173] hover:to-[#6f2c91] text-white font-bold text-xs sm:text-sm rounded-2xl transition-all shadow-md shadow-purple-900/20 hover:shadow-lg flex items-center justify-center gap-2"
            >
              <span>Buka Rekapitulasi</span>
              <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
