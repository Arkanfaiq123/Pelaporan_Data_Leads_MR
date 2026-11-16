import React from 'react';
import { ArrowLeft, Target, FileText, ChevronRight, CheckCircle2 } from 'lucide-react';
import { AREA_MASTER_DATA } from '../../data/constants';

export default function StepStrategy({ areaName, onBack, onProceed }) {
  const areaInfo = AREA_MASTER_DATA[areaName] || {
    title: areaName,
    notes: 'Pastikan kelengkapan form data kunjungan pelanggan di area ini.'
  };

  const isEco = areaName === 'RING & ECO';

  return (
    <section className="space-y-6 max-w-3xl mx-auto py-2 animate-in fade-in duration-300">
      <button
        type="button"
        onClick={onBack}
        className="inline-flex items-center gap-2 text-xs font-bold text-[#6f2c91] hover:text-[#582173] px-3 py-1.5 rounded-xl hover:bg-purple-100/60 transition"
      >
        <ArrowLeft className="w-4 h-4" /> Kembali ke Pilih Area
      </button>

      <div className="bg-white rounded-3xl border border-slate-200/80 shadow-lg overflow-hidden">
        {/* Banner Header */}
        <div
          className={`p-6 sm:p-7 text-white flex justify-between items-center ${
            isEco
              ? 'bg-gradient-to-r from-emerald-700 via-teal-700 to-emerald-800'
              : 'bg-gradient-to-r from-[#6f2c91] via-[#8533b0] to-[#581c87]'
          }`}
        >
          <div>
            <span className="text-[11px] font-black uppercase tracking-wider text-white/80">
              Strategi & Panduan Penugasan
            </span>
            <h3 className="text-2xl sm:text-3xl font-black tracking-tight mt-0.5">{areaName}</h3>
          </div>
          <div className="p-3 bg-white/15 rounded-2xl backdrop-blur-md border border-white/20">
            <Target className="w-6 h-6 text-white" />
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6">
          <div className="flex items-center gap-2.5">
            <div className={`p-2 rounded-xl ${isEco ? 'bg-emerald-50 text-emerald-700' : 'bg-purple-50 text-[#6f2c91]'}`}>
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-extrabold text-slate-800 text-sm">Instruksi & Standar Operasional Sales</h4>
              <p className="text-xs text-slate-400">Ikuti poin arahan di bawah sebelum memulai input prospek</p>
            </div>
          </div>

          <div
            className={`rounded-2xl p-5 border text-sm leading-relaxed whitespace-pre-line font-medium ${
              isEco
                ? 'bg-emerald-50/40 border-emerald-100 text-emerald-950'
                : 'bg-purple-50/40 border-purple-100 text-slate-700'
            }`}
          >
            {areaInfo.notes}
          </div>

          {/* Checklist reminder */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-600">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>Pastikan ID SC UMP dan nama AE terdaftar valid.</span>
            </div>
            <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-600">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>Kualifikasi respon pelanggan (Cool, Warm, Hot, Closing).</span>
            </div>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="px-6 sm:px-8 py-5 bg-slate-50/80 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs text-slate-400 font-medium hidden sm:inline">
            Langkah 2 dari 3 &bull; Persiapan Form
          </span>
          <button
            type="button"
            onClick={onProceed}
            className={`w-full sm:w-auto px-7 py-3.5 text-white font-extrabold rounded-2xl text-sm transition-all shadow-md hover:shadow-xl flex items-center justify-center gap-2 ${
              isEco
                ? 'bg-emerald-600 hover:bg-emerald-700'
                : 'bg-[#6f2c91] hover:bg-[#582173]'
            }`}
          >
            <span>Lanjutkan Mengisi Form Leads</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
