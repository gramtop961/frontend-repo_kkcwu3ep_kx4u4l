import { Home, Key, Shield, Calendar } from 'lucide-react';

const services = [
  {
    icon: Home,
    title: 'Gestione annunci',
    desc: 'Creazione e ottimizzazione degli annunci su più portali (Airbnb, Booking, VRBO).',
  },
  {
    icon: Calendar,
    title: 'Sincronizzazione calendari',
    desc: 'Disponibilità sempre aggiornata con sincronizzazione multi-canale e prevenzione overbooking.',
  },
  {
    icon: Key,
    title: 'Check-in smart',
    desc: 'Procedure di check-in/out automatizzate e guide digitali per gli ospiti.',
  },
  {
    icon: Shield,
    title: 'Pulizie e manutenzione',
    desc: 'Coordinamento team, checklist e standard di qualità per ogni soggiorno.',
  },
];

export default function Services() {
  return (
    <section id="servizi" className="py-16 md:py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Servizi per Property Manager</h2>
          <p className="mt-3 text-gray-600">Strumenti e processi per aumentare redditività e soddisfazione degli ospiti.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-12 w-12 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center mb-4">
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
