import React from 'react';
import { Map, MapPin, BarChart3, ArrowRight, Sparkles, Compass, Users } from 'lucide-react';

export default function StepArea({ onSelectArea, onGoToCekLead }) {
  return (
    <section className="space-y-8 max-w-4xl mx-auto py-3 animate-in fade-in duration-500">
      {/* Hero Banner Header */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#581c87] via-[#6f2c91] to-[#4a154b] p-6 sm:p-9 text-white shadow-xl shadow-purple-900/10 border border-purple-400/20">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-1/3 -mb-8 w-48 h-48 bg-purple-400/25 rounded-full blur-xl pointer-events-none"></div>

        <div className="relative z-10 space-y-2 max-w-xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/15 backdrop-blur-md rounded-full text-xs font-bold text-purple-100 border border-white/20">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            Sistem Input & Manajemen Leads AE
          </div>
          <h1 className="text-2xl sm:text-3xl font-black tracking-tight drop-shadow-sm">
            Pilih Area Penugasan Sales
          </h1>
          <p className="text-purple-100/90 text-xs sm:text-sm leading-relaxed">
            Pilih klaster penugasan kunjungan prospek pelanggan atau periksa rekap data leads yang telah masuk secara real-time.
          </p>
        </div>
      </div>

      {/* Main Choice Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Card REGULER */}
        <div
          onClick={() => onSelectArea('REGULER')}
          className="group relative bg-white border border-purple-100 hover:border-[#6f2c91] rounded-3xl p-7 shadow-sm hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 cursor-pointer flex flex-col justify-between overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-purple-600/5 rounded-bl-full pointer-events-none group-hover:scale-125 transition-transform duration-500"></div>

          <div>
            <div className="flex items-center justify-between mb-5">
              <div className="w-14 h-14 bg-purple-100/70 text-[#6f2c91] rounded-2xl flex items-center justify-center ring-4 ring-purple-100/50 group-hover:bg-gradient-to-tr group-hover:from-[#6f2c91] group-hover:to-[#9333ea] group-hover:text-white transition-all duration-300 shadow-sm">
                <Map className="w-7 h-7" />
              </div>
            </div>

            <h3 className="font-black text-slate-800 text-lg uppercase tracking-wide group-hover:text-[#6f2c91] transition-colors">
              Area Reguler
            </h3>
            <p className="text-slate-500 text-xs sm:text-sm mt-2 leading-relaxed">
              Input form kunjungan pelanggan prospek untuk perumahan dan klaster kategori Reguler.
            </p>
          </div>

          <div className="mt-6 pt-4 border-t border-purple-50 flex items-center justify-between">
            <span className="text-xs font-bold text-slate-400 group-hover:text-[#6f2c91] transition-colors">
              Buka Form Pelaporan
            </span>
            <div className="w-8 h-8 rounded-full bg-purple-100/80 text-[#6f2c91] flex items-center justify-center group-hover:bg-[#6f2c91] group-hover:text-white transition-all transform group-hover:translate-x-1">
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </div>

        {/* Card RING & ECO */}
        <div
          onClick={() => onSelectArea('RING & ECO')}
          className="group relative bg-white border border-purple-100 hover:border-[#6f2c91] rounded-3xl p-7 shadow-sm hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 cursor-pointer flex flex-col justify-between overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-purple-600/5 rounded-bl-full pointer-events-none group-hover:scale-125 transition-transform duration-500"></div>

          <div>
            <div className="flex items-center justify-between mb-5">
              <div className="w-14 h-14 bg-purple-100/70 text-[#6f2c91] rounded-2xl flex items-center justify-center ring-4 ring-purple-100/50 group-hover:bg-gradient-to-tr group-hover:from-[#6f2c91] group-hover:to-[#8533b0] group-hover:text-white transition-all duration-300 shadow-sm">
                <MapPin className="w-7 h-7" />
              </div>
            </div>

            <h3 className="font-black text-slate-800 text-lg uppercase tracking-wide group-hover:text-[#6f2c91] transition-colors">
              Area Ring & Eco
            </h3>
            <p className="text-slate-500 text-xs sm:text-sm mt-2 leading-relaxed">
              Input form kunjungan pelanggan prospek untuk wilayah penugasan paket Ringan & Eco.
            </p>
          </div>

          <div className="mt-6 pt-4 border-t border-purple-50 flex items-center justify-between">
            <span className="text-xs font-bold text-slate-400 group-hover:text-[#6f2c91] transition-colors">
              Buka Form Pelaporan
            </span>
            <div className="w-8 h-8 rounded-full bg-purple-100/80 text-[#6f2c91] flex items-center justify-center group-hover:bg-[#6f2c91] group-hover:text-white transition-all transform group-hover:translate-x-1">
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </div>

        {/* Card CEK JUMLAH DATA LEAD */}
        <div
          onClick={onGoToCekLead}
          className="sm:col-span-2 group relative bg-gradient-to-r from-white via-purple-50/50 to-white border border-purple-200/90 hover:border-[#6f2c91] rounded-3xl p-6 sm:p-7 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col sm:flex-row items-center justify-between gap-5"
        >
          <div className="flex flex-col sm:flex-row items-center text-center sm:text-left gap-5">
            <div className="w-16 h-16 bg-gradient-to-tr from-[#6f2c91] to-[#8b2fc9] text-white rounded-2xl flex items-center justify-center shadow-md shadow-purple-900/20 group-hover:scale-110 transition-transform duration-300 shrink-0">
              <BarChart3 className="w-8 h-8" />
            </div>
            <div>
              <h3 className="font-black text-slate-800 text-lg uppercase tracking-wide group-hover:text-[#6f2c91] transition-colors">
                Cek Jumlah Data Lead
              </h3>
              <p className="text-slate-500 text-xs sm:text-sm mt-0.5 leading-relaxed max-w-xl">
                Cek total perolehan prospek Sales AE (Cool, Warm, Hot, Closing) atau rekapitulasi performa tim ASM bulan berjalan.
              </p>
            </div>
          </div>

          <div className="w-full sm:w-auto flex justify-center">
            <button
              type="button"
              className="w-full sm:w-auto px-7 py-3.5 bg-[#6f2c91] hover:bg-[#581c87] text-white font-extrabold text-xs sm:text-sm rounded-2xl transition-all shadow-md group-hover:shadow-lg flex items-center justify-center gap-2"
            >
              <span>Buka Rekapitulasi</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
