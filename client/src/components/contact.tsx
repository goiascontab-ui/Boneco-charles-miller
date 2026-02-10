import { motion } from "framer-motion";
import { MessageCircle, Mail, PartyPopper } from "lucide-react";

export default function Contact() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          className="bg-accent rounded-[3.5rem] p-12 md:p-20 text-center space-y-10 relative overflow-hidden shadow-2xl shadow-accent/20"
        >
          {/* Decorative shapes */}
          <div className="absolute top-10 left-10 h-10 w-10 bg-white/20 rounded-full animate-bounce" />
          <div className="absolute bottom-20 right-10 h-20 w-20 bg-primary/20 rounded-[2rem] rotate-45" />

          <div className="space-y-4 relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/30 backdrop-blur-sm rounded-full text-slate-900 font-black">
              <PartyPopper className="h-5 w-5" />
              VAMOS NESSA?
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900">
              Pronto para transformar seu negócio?
            </h2>
            <p className="text-xl md:text-2xl text-slate-800 font-medium max-w-2xl mx-auto">
              Chama no Zap agora e vamos criar o site mais bonito que você já viu!
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center relative z-10">
            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-20 items-center justify-center rounded-[2rem] bg-slate-900 px-12 text-2xl font-black text-white hover:scale-105 active:scale-95 transition-transform shadow-xl"
            >
              <MessageCircle className="mr-3 h-8 w-8 text-green-400 fill-green-400" />
              CHAMAR NO ZAP!
            </a>
            <a
              href="mailto:contato@charlesmiller.dev.br"
              className="inline-flex h-20 items-center justify-center rounded-[2rem] border-4 border-slate-900 bg-transparent px-10 text-xl font-black text-slate-900 hover:bg-slate-900 hover:text-white transition-all"
            >
              <Mail className="mr-3 h-6 w-6" />
              E-mail
            </a>
          </div>
          
          <p className="text-slate-800 font-bold italic pt-4">
            Sites profissionais • Atendimento nota 10 • Preço justo
          </p>
        </motion.div>
      </div>
    </section>
  );
}
