import { motion } from 'framer-motion';
import { Building2, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Mediterranean gradient with subtle texture */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-sky-50 via-cyan-50 to-white" />
        <div className="absolute -top-24 right-[-10%] h-[36rem] w-[36rem] rounded-full bg-gradient-to-tr from-sky-200/60 via-cyan-200/40 to-emerald-200/40 blur-3xl" />
        <div className="absolute -bottom-32 left-[-10%] h-[28rem] w-[28rem] rounded-full bg-gradient-to-tr from-amber-200/40 via-orange-200/30 to-rose-200/30 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28 relative">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full bg-emerald-50 text-emerald-700 px-3 py-1 text-xs font-semibold"
            >
              Specialisti in gestione per Bari e Puglia
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mt-3 text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900"
            >
              Più prenotazioni, meno stress. Dal lungomare di Bari alle perle della Puglia.
            </motion.h1>
            <p className="mt-5 text-lg md:text-xl text-gray-600">
              Ottimizza annunci, pricing e operatività con un approccio data‑driven pensato per il turismo mediterraneo.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#contatti"
                className="inline-flex items-center rounded-lg bg-sky-600 px-5 py-3 text-white font-semibold shadow hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
              >
                Inizia ora
              </a>
              <a
                href="#servizi"
                className="inline-flex items-center rounded-lg border border-sky-200 px-5 py-3 text-sky-700 font-semibold hover:bg-sky-50"
              >
                Scopri i servizi
              </a>
            </div>
            <div className="mt-8 flex items-center gap-3 text-sm text-gray-600">
              <Star className="text-amber-400" size={18} />
              <span>Oltre 200+ proprietà gestite con valutazione media 4.8/5</span>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="relative rounded-2xl border border-cyan-200 bg-white p-6 shadow-lg"
            >
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-xl bg-cyan-100 text-cyan-700 flex items-center justify-center">
                  <Building2 />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Dashboard</p>
                  <p className="font-semibold text-gray-900">Panoramica proprietà</p>
                </div>
              </div>
              <div className="mt-6 grid grid-cols-3 gap-4">
                {[
                  { label: 'Occupazione', value: '92%' },
                  { label: 'ADR', value: '€128' },
                  { label: 'RevPAR', value: '€118' },
                ].map((item) => (
                  <div key={item.label} className="rounded-xl bg-gradient-to-br from-sky-50 to-cyan-50 p-4">
                    <p className="text-sm text-gray-500">{item.label}</p>
                    <p className="text-xl font-bold text-gray-900">{item.value}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-xl bg-gradient-to-r from-sky-600 via-cyan-600 to-emerald-600 p-5 text-white">
                <p className="text-sm opacity-90">Suggerimenti automatici</p>
                <p className="mt-1 font-semibold">Aumenta le tariffe del 7% per il weekend</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
