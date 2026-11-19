import React, { useState, useEffect } from 'react';
import Navbar from './components/common/Navbar';
import Toast from './components/common/Toast';
import Loader from './components/common/Loader';
import ReportView from './components/report/ReportView';
import { getAreaConfig } from './services/apiService';

export default function App() {
  const [clusters, setClusters] = useState({ "REGULER": [], "RING & ECO": [] });
  
  // Toast state
  const [toast, setToast] = useState({ show: false, title: '', message: '', type: 'success' });

  // Loader state
  const [loader, setLoader] = useState({ show: false, title: '', subtitle: '' });

  const showToast = (title, message, type = 'success') => {
    setToast({ show: true, title, message, type });
    setTimeout(() => {
      setToast(prev => ({ ...prev, show: false }));
    }, 4000);
  };

  const closeToast = () => {
    setToast(prev => ({ ...prev, show: false }));
  };

  useEffect(() => {
    async function initData() {
      try {
        const config = await getAreaConfig();
        if (config && config.clusters) {
          setClusters(config.clusters);
        }
      } catch (e) {
        console.error('Failed to load initial clusters:', e);
      }
    }
    initData();
  }, []);

  return (
    <div className="relative min-h-screen bg-[#f8f3fc] text-slate-800 flex flex-col font-sans selection:bg-[#6f2c91] selection:text-white overflow-x-hidden">
      {/* Background Decorative Ambient Glows */}
      <div className="fixed top-0 left-1/4 -translate-x-1/2 w-[600px] h-[450px] bg-gradient-to-br from-purple-400/15 to-fuchsia-400/5 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="fixed top-40 right-0 w-[550px] h-[550px] bg-gradient-to-bl from-purple-500/10 via-indigo-400/5 to-transparent rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="fixed bottom-0 left-10 w-[450px] h-[450px] bg-gradient-to-tr from-purple-300/10 to-transparent rounded-full blur-2xl pointer-events-none -z-10"></div>

      {/* Global Toast */}
      <Toast toast={toast} onClose={closeToast} />

      {/* Global Loader Modal */}
      <Loader
        isLoading={loader.show}
        title={loader.title || "Memuat Data"}
        subtitle={loader.subtitle || "Sedang memproses..."}
      />

      {/* Top Navbar */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-1 w-full max-w-6xl mx-auto p-4 sm:p-6 lg:p-8 mt-2 relative z-10">
        <ReportView
          clusters={clusters}
          showToast={showToast}
          setLoader={setLoader}
        />
      </main>

      {/* Footer */}
      <footer className="mt-16 bg-white/70 backdrop-blur-md border-t border-purple-100 py-8 text-center text-xs text-slate-500 w-full relative z-10">
        <div className="max-w-3xl mx-auto px-4 flex flex-col items-center gap-2">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="font-extrabold text-slate-700 tracking-wide">MyRepublic Purwokerto &bull; Sistem Sales AE</span>
          </div>
          <p className="text-[11px] text-slate-400">
            Platform Pelaporan Real-Time &bull; Dioptimalkan untuk Mobile Smartphone & Desktop
          </p>
        </div>
      </footer>
    </div>
  );
}
