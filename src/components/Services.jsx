import { Home, Key, Shield, Calendar, TrendingUp, Camera, Globe, FileCheck, MapPin } from 'lucide-react';

const services = [
  {
    icon: Home,
    title: 'Gestione annunci',
    desc: 'Creazione e ottimizzazione su Airbnb, Booking e portali locali, con copy in italiano/inglese.',
    color: 'bg-sky-100 text-sky-700',
  },
  {
    icon: Calendar,
    title: 'Sincronizzazione calendari',
    desc: 'Disponibilità sempre aggiornata con sincronizzazione multi‑canale e prevenzione overbooking.',
    color: 'bg-cyan-100 text-cyan-700',
  },
  {
    icon: Key,
    title: 'Check‑in smart',
    desc: 'Automazioni per check‑in/out, guide digitali e accessi sicuri per gli ospiti.',
    color: 'bg-emerald-100 text-emerald-700',
  },
  {
    icon: Shield,
    title: 'Pulizie e manutenzione',
    desc: 'Coordinamento team, checklist e standard di qualità per ogni soggiorno.',
    color: 'bg-amber-100 text-amber-700',
  },
  {
    icon: TrendingUp,
    title: 'Pricing dinamico',
    desc: 'Strategie data‑driven per eventi locali (Bari e Puglia) e stagionalità, massimizzando il RevPAR.',
    color: 'bg-rose-100 text-rose-700',
  },
  {
    icon: Camera,
    title: 'Foto & staging',
    desc: 'Shooting professionale e home staging per aumentare il CTR e la conversione.',
    color: 'bg-indigo-100 text-indigo-700',
  },
  {
    icon: Globe,
    title: 'Comunicazione multilingue',
    desc: 'Risposte rapide in più lingue e automazioni per FAQ, regole e consigli locali.',
    color: 'bg-teal-100 text-teal-700',
  },
  {
    icon: FileCheck,
    title: 'Adempimenti & CIS',
    desc: 'Supporto su normative locali, registrazioni ospiti e Codice Identificativo Struttura.',
    color: 'bg-orange-100 text-orange-700',
  },
  {
    icon: MapPin,
    title: 'Partnership locali',
    desc: 'Tour, ristoranti e transfer: esperienze per valorizzare il soggiorno in Puglia.',
    color: 'bg-lime-100 text-lime-700',
  },
];

export default function Services() {
  return (
    <section id="servizi" className="py-16 md:py-24 bg-gradient-to-b from-white via-sky-50 to-cyan-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Servizi per Property Manager a Bari</h2>
          <p className="mt-3 text-gray-600">Una suite completa per aumentare redditività e soddisfazione degli ospiti in Puglia.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, desc, color }) => (
            <div key={title} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className={`h-12 w-12 rounded-xl flex items-center justify-center mb-4 ${color}`}>
                <Icon />
              </div>
              <h3 className="font-semibold text-lg text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
