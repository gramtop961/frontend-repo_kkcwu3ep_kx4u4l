import { Mail, Phone, MessageSquare } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contatti" className="py-16 md:py-24 bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">Parliamo del tuo portafoglio</h2>
            <p className="mt-3 text-gray-300">Richiedi una consulenza gratuita: analizziamo potenziale ricavi, pricing dinamico e setup operativo.</p>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <a href="mailto:hello@propertypro.it" className="flex items-center gap-2 rounded-xl bg-white/10 p-4 hover:bg-white/15 transition">
                <Mail size={18} />
                <span>Email</span>
              </a>
              <a href="tel:+39000000000" className="flex items-center gap-2 rounded-xl bg-white/10 p-4 hover:bg-white/15 transition">
                <Phone size={18} />
                <span>Telefono</span>
              </a>
              <a href="#" className="flex items-center gap-2 rounded-xl bg-white/10 p-4 hover:bg-white/15 transition">
                <MessageSquare size={18} />
                <span>Chat</span>
              </a>
            </div>
          </div>
          <form className="bg-white rounded-2xl p-6 text-gray-900 shadow-xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-gray-600">Nome</label>
                <input type="text" className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Mario Rossi" />
              </div>
              <div>
                <label className="text-sm text-gray-600">Email</label>
                <input type="email" className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="mario@email.com" />
              </div>
            </div>
            <div className="mt-4">
              <label className="text-sm text-gray-600">Numero di proprietà</label>
              <select className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>1-3</option>
                <option>4-10</option>
                <option>11-30</option>
                <option>30+</option>
              </select>
            </div>
            <div className="mt-4">
              <label className="text-sm text-gray-600">Messaggio</label>
              <textarea rows="4" className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Raccontaci delle tue proprietà..."></textarea>
            </div>
            <button type="button" className="mt-6 w-full rounded-lg bg-blue-600 px-4 py-3 text-white font-semibold hover:bg-blue-700">Invia richiesta</button>
            <p className="mt-3 text-xs text-gray-500">Niente spam. Rispondiamo entro 24 ore.</p>
          </form>
        </div>
      </div>
    </section>
  );
}
