import { motion } from "framer-motion";
import { Smile, Rocket, Heart, Smartphone, Zap, Star } from "lucide-react";
import phoneMockup from "@/assets/images/phone-mockup.png";

const features = [
  { icon: <Zap />, title: "Super Rápido", color: "text-yellow-500", bg: "bg-yellow-50" },
  { icon: <Star />, title: "Design Top", color: "text-primary", bg: "bg-blue-50" },
  { icon: <Smartphone />, title: "Pelo Celular", color: "text-green-500", bg: "bg-green-50" },
  { icon: <Heart />, title: "Feito com Amor", color: "text-red-500", bg: "bg-red-50" },
];

export default function Services() {
  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900">
            Por que ter um site comigo? 🤔
          </h2>
          <p className="text-xl text-slate-500 font-medium">É fácil, é rápido e seu cliente vai amar!</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 bg-accent/10 p-8 rounded-[3rem] border-4 border-dashed border-accent/30 flex justify-center">
              <img src={phoneMockup} alt="Phone" className="w-[280px] rounded-[3rem] shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500" />
              
              {/* Floating badges */}
              <div className="absolute -top-5 -right-5 bg-white p-4 rounded-2xl shadow-xl border-2 border-primary rotate-12">
                <span className="font-black text-primary">Seu site aqui! 📱</span>
              </div>
            </div>
          </motion.div>

          <div className="space-y-12">
            <h3 className="text-3xl font-black text-slate-900 leading-tight">
              O seu cliente te encontra no <span className="text-primary italic">Google</span> e fala com você direto no <span className="text-green-500 underline decoration-4 underline-offset-4">Zap!</span>
            </h3>
            
            <div className="grid grid-cols-2 gap-6">
              {features.map((f, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ scale: 1.05, rotate: i % 2 === 0 ? 2 : -2 }}
                  className={`${f.bg} p-6 rounded-3xl border-2 border-transparent hover:border-slate-200 transition-all cursor-default`}
                >
                  <div className={`${f.color} mb-4 h-12 w-12 flex items-center justify-center bg-white rounded-2xl shadow-sm`}>
                    {f.icon}
                  </div>
                  <p className="font-black text-slate-900">{f.title}</p>
                </motion.div>
              ))}
            </div>

            <div className="p-8 rounded-[2rem] bg-slate-900 text-white relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-150 transition-transform duration-700">
                <Rocket className="h-20 w-20" />
              </div>
              <p className="text-lg font-bold mb-2">Tudo isso a partir de:</p>
              <p className="text-5xl font-black text-accent">R$ 299,90</p>
              <p className="text-sm text-slate-400 mt-4 font-medium italic">* Plano básico para você começar hoje mesmo!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
