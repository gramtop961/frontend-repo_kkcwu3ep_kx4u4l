import Hero from './components/Hero';
import Services from './components/Services';
import PropertiesGrid from './components/PropertiesGrid';
import ContactSection from './components/ContactSection';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
          <a href="#" className="font-extrabold text-xl tracking-tight">
            <span className="bg-gradient-to-r from-sky-600 via-cyan-600 to-emerald-600 bg-clip-text text-transparent">Bari</span>
            <span className="ml-1">Property</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#servizi" className="hover:text-sky-600">Servizi</a>
            <a href="#case" className="hover:text-sky-600">Case di successo</a>
            <a href="#contatti" className="hover:text-sky-600">Contatti</a>
            <a href="#contatti" className="inline-flex items-center rounded-lg bg-sky-600 px-4 py-2 text-white font-semibold hover:bg-sky-700">Inizia</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <div id="servizi">
          <Services />
        </div>
        <div id="case">
          <PropertiesGrid />
        </div>
        <ContactSection />
      </main>

      <footer className="border-t border-gray-200 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-600">
          <p>© {new Date().getFullYear()} Bari Property — Tutti i diritti riservati</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-gray-900">Privacy</a>
            <a href="#" className="hover:text-gray-900">Termini</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
