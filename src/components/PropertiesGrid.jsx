const properties = [
  {
    id: 1,
    title: 'Loft in centro storico',
    city: 'Firenze',
    revenue: '€3.200/mese',
    image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1800&auto=format&fit=crop'
  },
  {
    id: 2,
    title: 'Attico vista mare',
    city: 'Cagliari',
    revenue: '€4.100/mese',
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1800&auto=format&fit=crop'
  },
  {
    id: 3,
    title: 'Suite design',
    city: 'Milano',
    revenue: '€3.800/mese',
    image: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1800&auto=format&fit=crop'
  },
  {
    id: 4,
    title: 'Trullo ristrutturato',
    city: 'Ostuni',
    revenue: '€2.900/mese',
    image: 'https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&w=1800&auto=format&fit=crop'
  }
];

export default function PropertiesGrid() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Case di successo</h2>
            <p className="mt-3 text-gray-600">Esempi reali di proprietà ottimizzate: più occupazione, più ricavi.</p>
          </div>
          <a href="#contatti" className="hidden md:inline-flex text-blue-600 hover:text-blue-700 font-semibold">Vuoi risultati simili?</a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {properties.map((p) => (
            <article key={p.id} className="group rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.image} alt={p.title} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900">{p.title}</h3>
                <p className="text-sm text-gray-500">{p.city}</p>
                <p className="mt-3 text-sm font-medium text-green-700 bg-green-50 inline-flex px-2 py-1 rounded">{p.revenue}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
