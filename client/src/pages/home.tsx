import Hero from "@/components/hero";
import Services from "@/components/services";
import Contact from "@/components/contact";
import { motion } from "framer-motion";
import { Code2 } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans selection:bg-blue-100 selection:text-blue-900">
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 font-display font-bold text-xl text-slate-900">
            <div className="h-8 w-8 rounded-lg bg-primary text-white flex items-center justify-center">
              <Code2 className="h-5 w-5" />
            </div>
            <span>CHARLESMILLER<span className="text-slate-400 font-normal">.DEV.BR</span></span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#services" className="hover:text-primary transition-colors">Serviços</a>
            <a href="#about" className="hover:text-primary transition-colors">Sobre</a>
            <a 
              href="https://wa.me/5511999999999" 
              className="px-4 py-2 rounded-lg bg-slate-900 text-white hover:bg-slate-800 transition-colors"
            >
              Fale Comigo
            </a>
          </div>
        </div>
      </nav>

      <main>
        <Hero />
        <Services />
        <Contact />
      </main>

      <footer className="bg-slate-900 py-12 text-slate-400 text-sm">
        <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 font-display font-bold text-lg text-white">
            <span>CHARLESMILLER<span className="text-slate-600 font-normal">.DEV.BR</span></span>
          </div>
          <p>© {new Date().getFullYear()} Charles Miller. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
