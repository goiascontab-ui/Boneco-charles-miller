import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Smartphone } from "lucide-react";
import heroChar from "@/assets/images/playful-hero.png";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="blob -top-20 -left-20" />
      <div className="blob bottom-0 right-0 bg-accent" />
      
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex-1 text-center lg:text-left space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border-2 border-primary/20 text-primary font-bold animate-bounce">
              <Sparkles className="h-5 w-5" />
              <span>O SITE MAIS LEGAL DA CIDADE!</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-tight">
              Seu negócio vai <span className="text-primary underline decoration-accent decoration-8 underline-offset-4">BOMBAR</span> na internet! 🚀
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-600 font-medium max-w-xl mx-auto lg:mx-0">
              Cansado de site chato? Eu crio páginas incríveis que funcionam direto no seu <span className="text-primary font-bold">celular</span> e atraem clientes de verdade!
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start pt-4">
              <a 
                href="https://wa.me/5511999999999"
                className="group relative inline-flex h-16 items-center justify-center rounded-2xl bg-primary px-10 text-xl font-black text-white shadow-[0_8px_0_0_#0369a1] active:translate-y-1 active:shadow-none transition-all"
              >
                QUERO O MEU AGORA!
                <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-2 transition-transform" />
              </a>
              
              <div className="flex flex-col items-center sm:items-start">
                <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">A partir de</span>
                <span className="text-3xl font-black text-accent bg-white px-3 py-1 rounded-lg shadow-sm border-2 border-accent/20">R$ 299,90</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ scale: 0.5, opacity: 0, rotate: -10 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            transition={{ type: "spring", damping: 15 }}
            className="flex-1 relative"
          >
            <div className="relative z-10">
              <img src={heroChar} alt="Fun character" className="w-full max-w-md mx-auto" />
            </div>
            {/* Playful elements */}
            <div className="absolute top-10 right-10 h-20 w-20 bg-yellow-400 rounded-full animate-pulse blur-xl opacity-30" />
            <div className="absolute -bottom-5 -left-5 h-24 w-24 bg-primary rounded-full animate-bounce blur-xl opacity-20" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
