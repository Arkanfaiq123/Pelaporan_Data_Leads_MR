import React, { useState, useMemo, useRef, useEffect } from 'react';
import { ArrowLeft, Search, ChevronDown, Save, X, Check } from 'lucide-react';
import { PRODUCTS_DATA, LEAD_STATUS_OPTIONS } from '../../data/constants';
import { searchIdSc, submitKunjungan } from '../../services/apiService';

export default function StepForm({ areaName, clusters, onBack, onFormSubmitted, showToast, setLoader }) {
  const [scIdInput, setScIdInput] = useState('');
  const [asm, setAsm] = useState('');
  const [ae, setAe] = useState('');
  const [isSearchingSc, setIsSearchingSc] = useState(false);

  // Cluster search combobox
  const [clusterSearch, setClusterSearch] = useState('');
  const [selectedCluster, setSelectedCluster] = useState('');
  const [isClusterDropdownOpen, setIsClusterDropdownOpen] = useState(false);
  const clusterDropdownRef = useRef(null);

  // Form fields
  const [namaCapel, setNamaCapel] = useState('');
  const [noHp, setNoHp] = useState('');
  const [hpError, setHpError] = useState('');
  const [alamat, setAlamat] = useState('');
  const [isp, setIsp] = useState('');
  const [paket, setPaket] = useState('');
  const [statusLead, setStatusLead] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Filter clusters by current area
  const areaClusters = useMemo(() => {
    return clusters[areaName] || [];
  }, [clusters, areaName]);

  const filteredClusters = useMemo(() => {
    if (!clusterSearch.trim()) return areaClusters.slice(0, 100);
    const q = clusterSearch.toLowerCase().trim();
    return areaClusters.filter(c => c.toLowerCase().includes(q)).slice(0, 100);
  }, [areaClusters, clusterSearch]);

  // Close cluster dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (clusterDropdownRef.current && !clusterDropdownRef.current.contains(event.target)) {
        setIsClusterDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Search ID SC UMP
  const handleSearchSc = async () => {
    if (!scIdInput.trim()) {
      showToast('Peringatan', 'Masukkan ID SC UMP terlebih dahulu', 'warning');
      return;
    }

    setIsSearchingSc(true);
    setLoader({ show: true, title: 'Mencari Data', subtitle: 'Mencocokkan ID dengan database...' });

    try {
      const res = await searchIdSc(scIdInput.trim());
      setLoader({ show: false });
      setIsSearchingSc(false);

      if (res.success && res.data) {
        setAsm(res.data.asm || '');
        setAe(res.data.ae || '');
        showToast('Ditemukan', `AE: ${res.data.ae} | ASM: ${res.data.asm}`, 'success');
      } else {
        setAsm('');
        setAe('');
        showToast('Tidak Ditemukan', res.message || 'ID SC UMP tidak valid', 'error');
      }
    } catch (err) {
      setLoader({ show: false });
      setIsSearchingSc(false);
      showToast('Koneksi Gagal', 'Gagal memproses data', 'error');
    }
  };

  // Validate phone number
  const handleNoHpChange = (e) => {
    const raw = e.target.value.replace(/[^0-9]/g, '');
    setNoHp(raw);

    if (raw.length > 0) {
      const isValid = (raw.startsWith('08') || raw.startsWith('628')) && raw.length >= 10 && raw.length <= 14;
      if (!isValid) {
        setHpError('Nomor harus diawali 08 atau 628 dengan panjang 10-14 digit angka.');
      } else {
        setHpError('');
      }
    } else {
      setHpError('');
    }
  };

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!asm || !ae) {
      showToast('Validasi Gagal', 'Harap cari dan temukan ID SC UMP yang valid terlebih dahulu!', 'warning');
      return;
    }

    if (!selectedCluster) {
      showToast('Validasi Gagal', 'Silakan pilih Nama Cluster dari daftar!', 'warning');
      return;
    }

    if (hpError || noHp.length < 10) {
      showToast('Validasi Gagal', 'Nomor HP Capel tidak valid!', 'warning');
      return;
    }

    const payload = {
      area: areaName,
      asm,
      ae,
      namaCapel: namaCapel.trim(),
      noHp: noHp.trim(),
      alamatCapel: alamat.trim(),
      ispSekarang: isp.trim(),
      paketDiminati: paket,
      statusLead,
      cluster: selectedCluster
    };

    setIsSubmitting(true);
    setLoader({ show: true, title: 'Menyimpan Data', subtitle: 'Sedang merekam kunjungan prospek...' });

    try {
      const res = await submitKunjungan(payload);
      setLoader({ show: false });
      setIsSubmitting(false);

      if (res.success) {
        showToast('Laporan Sukses!', `Data kunjungan untuk ${namaCapel} berhasil disimpan!`, 'success');
        onFormSubmitted();
      } else {
        showToast('Gagal Menyimpan', res.message || 'Terjadi kesalahan sistem', 'error');
      }
    } catch (err) {
      setLoader({ show: false });
      setIsSubmitting(false);
      showToast('Error', 'Gagal menghubungi server.', 'error');
    }
  };

  return (
    <section className="space-y-6 max-w-4xl mx-auto py-2 animate-in fade-in duration-300">
      <button
        type="button"
        onClick={onBack}
        className="inline-flex items-center gap-2 text-xs font-bold text-[#6f2c91] hover:text-[#582173] px-3.5 py-1.5 rounded-xl hover:bg-purple-100/60 transition"
      >
        <ArrowLeft className="w-4 h-4" /> Kembali ke Strategi
      </button>

      <div className="bg-white/95 backdrop-blur-md rounded-3xl border border-purple-100 shadow-xl shadow-purple-950/5 overflow-hidden">
        {/* Form Header Banner */}
        <div className="bg-gradient-to-r from-[#4a1264] via-[#6f2c91] to-[#390d4e] p-6 sm:p-8 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-2xl pointer-events-none -mt-10 -mr-10"></div>
          <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-[11px] font-black uppercase tracking-wider text-purple-200">
                Formulir Kunjungan Prospek Sales
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight mt-1">Input Data Leads</h2>
              <p className="text-xs sm:text-sm text-purple-100/80 mt-1">
                Lengkapi informasi prospek pelanggan dengan akurat untuk pencatatan sistem AE.
              </p>
            </div>
            <div className="self-start sm:self-center px-4 py-1.5 bg-white/15 backdrop-blur-md border border-white/20 rounded-full text-xs font-black tracking-wider uppercase text-white shadow-sm">
              {areaName}
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-7">
          {/* SECTION 1: IDENTITAS SALES AE */}
          <div className="space-y-4">
            <h3 className="text-sm font-extrabold text-slate-800 uppercase tracking-wider flex items-center gap-2 border-b border-purple-100 pb-2">
              <span className="w-6 h-6 rounded-lg bg-purple-100 text-[#6f2c91] flex items-center justify-center text-xs font-black">1</span>
              Identitas Sales AE
            </h3>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center gap-1">
                Cari Berdasarkan ID SC UMP <span className="text-rose-500">*</span>
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  required
                  value={scIdInput}
                  onChange={(e) => setScIdInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      handleSearchSc();
                    }
                  }}
                  placeholder="Masukkan ID SC (Contoh: 1002 / 6182994)"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#6f2c91] focus:border-[#6f2c91] transition font-medium"
                />
                <button
                  type="button"
                  onClick={handleSearchSc}
                  disabled={isSearchingSc}
                  className="bg-gradient-to-r from-[#6f2c91] to-[#8c38b8] hover:from-[#582173] hover:to-[#6f2c91] text-white font-bold px-5 py-2.5 rounded-xl text-xs sm:text-sm transition shadow-sm flex items-center gap-2 shrink-0 disabled:opacity-50"
                >
                  <Search className="w-4 h-4" />
                  <span>Cari Data</span>
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">Nama ASM</label>
                <input
                  type="text"
                  readOnly
                  value={asm}
                  placeholder="Terisi otomatis setelah pencarian ID SC..."
                  className="w-full bg-slate-100/80 border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm text-slate-700 font-bold focus:outline-none cursor-not-allowed"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">Nama AE</label>
                <input
                  type="text"
                  readOnly
                  value={ae}
                  placeholder="Terisi otomatis setelah pencarian ID SC..."
                  className="w-full bg-slate-100/80 border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm text-slate-700 font-bold focus:outline-none cursor-not-allowed"
                />
              </div>
            </div>
          </div>

          {/* SECTION 2: LOKASI & CLUSTER */}
          <div className="space-y-4">
            <h3 className="text-sm font-extrabold text-slate-800 uppercase tracking-wider flex items-center gap-2 border-b border-purple-100 pb-2">
              <span className="w-6 h-6 rounded-lg bg-purple-100 text-[#6f2c91] flex items-center justify-center text-xs font-black">2</span>
              Lokasi & Klaster
            </h3>

            <div className="relative" ref={clusterDropdownRef}>
              <label className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center gap-1">
                Pilih Nama Cluster <span className="text-rose-500">*</span>
              </label>
              <div className="relative">
                <input
                  type="text"
                  required
                  value={clusterSearch}
                  onChange={(e) => {
                    setClusterSearch(e.target.value);
                    setIsClusterDropdownOpen(true);
                  }}
                  onFocus={() => setIsClusterDropdownOpen(true)}
                  placeholder="Ketik nama klaster / perumahan yang dituju..."
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-3.5 pr-10 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#6f2c91] focus:border-[#6f2c91] transition font-medium"
                />
                <div
                  className="absolute right-3.5 top-3 text-slate-400 cursor-pointer"
                  onClick={() => setIsClusterDropdownOpen(prev => !prev)}
                >
                  <ChevronDown className="w-4 h-4" />
                </div>
              </div>

              {selectedCluster && (
                <div className="mt-2 inline-flex items-center gap-1.5 px-3 py-1 bg-purple-100/80 text-[#6f2c91] rounded-lg text-xs font-bold">
                  <Check className="w-3.5 h-3.5 text-[#6f2c91]" />
                  <span>Klaster Terpilih: {selectedCluster}</span>
                </div>
              )}

              {isClusterDropdownOpen && (
                <div className="absolute left-0 right-0 mt-1.5 bg-white border border-slate-200 rounded-2xl shadow-xl max-h-56 overflow-y-auto z-50 divide-y divide-slate-50">
                  <div className="p-2.5 sticky top-0 bg-purple-50 border-b border-purple-100 text-[11px] font-bold text-[#6f2c91] tracking-wider uppercase">
                    Cari Dari {areaClusters.length} Klaster ({areaName})
                  </div>
                  {filteredClusters.length === 0 ? (
                    <div className="p-4 text-center text-xs text-slate-400 font-medium italic">
                      Klaster tidak ditemukan untuk kata kunci tersebut.
                    </div>
                  ) : (
                    filteredClusters.map((c, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => {
                          setSelectedCluster(c);
                          setClusterSearch(c);
                          setIsClusterDropdownOpen(false);
                        }}
                        className="w-full text-left px-4 py-2.5 text-xs sm:text-sm text-slate-700 hover:bg-purple-50 hover:text-[#6f2c91] transition-colors block font-medium"
                      >
                        {c}
                      </button>
                    ))
                  )}
                </div>
              )}
            </div>
          </div>

          {/* SECTION 3: DATA CALON PELANGGAN (CAPEL) */}
          <div className="space-y-4">
            <h3 className="text-sm font-extrabold text-slate-800 uppercase tracking-wider flex items-center gap-2 border-b border-purple-100 pb-2">
              <span className="w-6 h-6 rounded-lg bg-purple-100 text-[#6f2c91] flex items-center justify-center text-xs font-black">3</span>
              Informasi Calon Pelanggan
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Nama Calon Pelanggan <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={namaCapel}
                  onChange={(e) => setNamaCapel(e.target.value)}
                  placeholder="Nama Lengkap Calon Pelanggan"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#6f2c91] focus:border-[#6f2c91] transition font-medium"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Nomor WhatsApp / HP <span className="text-rose-500">*</span>
                </label>
                <input
                  type="tel"
                  required
                  value={noHp}
                  onChange={handleNoHpChange}
                  maxLength={14}
                  placeholder="08xxxxxxxxxx"
                  className={`w-full bg-slate-50 border rounded-xl px-3.5 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 transition font-medium ${
                    hpError ? 'border-rose-400 focus:ring-rose-200' : 'border-slate-200 focus:ring-[#6f2c91] focus:border-[#6f2c91]'
                  }`}
                />
                {hpError && <p className="text-[11px] text-rose-500 mt-1">{hpError}</p>}
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Alamat Lengkap Capel <span className="text-rose-500">*</span>
                </label>
                <textarea
                  rows="2"
                  required
                  value={alamat}
                  onChange={(e) => setAlamat(e.target.value)}
                  placeholder="Jalan, Blok, No. Rumah, RT/RW, Patokan..."
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#6f2c91] focus:border-[#6f2c91] transition font-medium resize-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  ISP Saat Ini <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={isp}
                  onChange={(e) => setIsp(e.target.value)}
                  placeholder="Contoh: Belum Berlangganan / Indihome"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#6f2c91] focus:border-[#6f2c91] transition font-medium"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Pilih Paket Diminati <span className="text-rose-500">*</span>
                </label>
                <select
                  required
                  value={paket}
                  onChange={(e) => setPaket(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm text-slate-800 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#6f2c91] focus:border-[#6f2c91] transition font-semibold"
                >
                  <option value="" disabled>-- Pilih Paket Layanan --</option>
                  {PRODUCTS_DATA.map((prod, i) => (
                    <option key={i} value={prod.name}>
                      {prod.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Status Respon Lead / Follow-Up <span className="text-rose-500">*</span>
                </label>
                <select
                  required
                  value={statusLead}
                  onChange={(e) => setStatusLead(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm text-slate-800 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#6f2c91] focus:border-[#6f2c91] transition font-bold"
                >
                  <option value="" disabled>-- Kualifikasi Status Respon --</option>
                  {LEAD_STATUS_OPTIONS.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* ACTIONS */}
          <div className="pt-6 border-t border-purple-100 flex flex-col sm:flex-row gap-3 justify-end">
            <button
              type="button"
              onClick={onBack}
              className="py-3 px-6 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-2xl text-xs sm:text-sm transition flex items-center justify-center gap-2 order-2 sm:order-1"
            >
              <X className="w-4 h-4" /> Batalkan
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="py-3.5 px-8 bg-gradient-to-r from-[#6f2c91] to-[#8c38b8] hover:from-[#582173] hover:to-[#6f2c91] text-white font-extrabold rounded-2xl text-xs sm:text-sm transition-all shadow-md shadow-purple-900/20 hover:shadow-lg flex items-center justify-center gap-2 disabled:opacity-50 order-1 sm:order-2"
            >
              <Save className="w-4 h-4" /> Simpan Laporan Kunjungan
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
