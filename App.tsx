
import React, { useState, useEffect, useRef } from 'react';
import { Button } from './components/Button';
import { MENU_ITEMS, REVIEWS } from './constants';
import { FloatingCTA } from './components/FloatingCTA';
import { Assistant } from './components/Assistant';
import { Facebook, Instagram, Music2 } from 'lucide-react';

const App: React.FC = () => {
  const [burgersSold, setBurgersSold] = useState(842);
  const [showManifest, setShowManifest] = useState(false);
  const manifestRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setBurgersSold(prev => prev + Math.floor(Math.random() * 2));
    }, 15000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowManifest(true);
        }
      },
      { threshold: 0.1 }
    );

    if (manifestRef.current) {
      observer.observe(manifestRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const scrollToMenu = () => {
    document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleOrder = (burgerName: string) => {
    const phoneNumber = "5491132740347";
    const message = encodeURIComponent(`Hola ¿Como va? quiero la hamburguesa ${burgerName.toLowerCase()}...`);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen">
      {/* HERO SECTION */}
      <header className="relative h-screen flex flex-col justify-end p-6 md:p-12 overflow-hidden bg-black">
        <div className="absolute inset-0 z-0 opacity-60">
          <img 
            src="https://images.unsplash.com/photo-1571091718767-18b5b1457add?q=80&w=2000&auto=format&fit=crop" 
            alt="Macro burger close up" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="bg-neon text-black inline-block px-4 py-1 font-black mb-4 uppercase tracking-tighter">
            LABORATORIO DE SABOR CALLEJERO
          </div>
          <h1 className="font-heading text-6xl md:text-9xl leading-[0.8] tracking-tighter mb-8 uppercase">
            ANATOMÍA DEL <span className="text-neon block">EXCESO</span> REFINADO
          </h1>
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <Button size="lg" onClick={scrollToMenu}>
              QUIERO EL STARTER PACK
            </Button>
            <p className="max-w-xs text-sm uppercase font-bold text-gray-400">
              Carne de pastura y brioche artesanal. Una experiencia sensorial violenta pero sofisticada.
            </p>
          </div>
        </div>
      </header>

      {/* MANIFIESTO */}
      <section ref={manifestRef} className="py-24 bg-white text-black border-y-8 border-black overflow-hidden">
        <div className="flex overflow-hidden whitespace-nowrap mb-12 border-y-4 border-black bg-neon py-2">
          <div className="animate-[marquee_20s_linear_infinite] inline-block font-heading text-4xl">
            SIN COMISIONES • MÁS SABOR • LLEGA CALIENTE O ES GRATIS • CARNE DE PASTURA • PAN DE HOY • SIN COMISIONES • MÁS SABOR • LLEGA CALIENTE O ES GRATIS • CARNE DE PASTURA • PAN DE HOY •
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Card 01 */}
          <div className={`group border-4 border-black p-8 hover:bg-black hover:text-white transition-all duration-700 ease-out cursor-default neo-shadow ${showManifest ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <span className="font-heading text-6xl mb-4 block">01</span>
            <h3 className="font-heading text-2xl mb-4 uppercase">CARNE QUE SABE A CAMPO</h3>
            <p className="uppercase font-bold text-sm tracking-tight">100% pastura. Sin aditivos. Picada cada mañana para que la grasa brille en tu pantalla y explote en tu boca.</p>
          </div>
          {/* Card 02 */}
          <div className={`group border-4 border-black p-8 hover:bg-black hover:text-white transition-all duration-700 ease-out cursor-default neo-shadow delay-[200ms] ${showManifest ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <span className="font-heading text-6xl mb-4 block">02</span>
            <h3 className="font-heading text-2xl mb-4 uppercase">PAN QUE ABRAZA EL ALMA</h3>
            <p className="uppercase font-bold text-sm tracking-tight">Brioche de papa secreto. Nube elástica por fuera, tostado con manteca por dentro. El sostén de la locura.</p>
          </div>
          {/* Card 03 - Salsas (Delayed) */}
          <div className={`group border-4 border-black p-8 hover:bg-black hover:text-white transition-all duration-700 ease-out cursor-default neo-shadow delay-[400ms] ${showManifest ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <span className="font-heading text-6xl mb-4 block">03</span>
            <h3 className="font-heading text-2xl mb-4 uppercase">SALSAS DE LA CASA</h3>
            <p className="uppercase font-bold text-sm tracking-tight">Emulsiones violentas. Cada una es un laboratorio de umami diseñado para destruir tus estándares previos.</p>
          </div>
        </div>
      </section>

      {/* MENU / ORDER */}
      <section id="menu" className="py-24 px-6 max-w-7xl mx-auto">
        <h2 className="font-heading text-6xl md:text-8xl mb-12 tracking-tighter uppercase">EL REPERTORIO <span className="text-neon underline">CRIMINAL</span></h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MENU_ITEMS.map((item) => (
            <div key={item.id} className="border-4 border-white overflow-hidden group flex flex-col">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-110 group-hover:scale-100"
                />
                {item.tags?.map(tag => (
                  <span key={tag} className="absolute top-4 left-4 bg-neon text-black font-black px-2 py-1 text-xs uppercase">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="p-6 bg-black flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="font-heading text-2xl leading-none uppercase">{item.name}</h4>
                  <span className="font-heading text-2xl text-neon">${item.price}</span>
                </div>
                <p className="text-gray-400 text-sm mb-6 flex-grow uppercase font-bold tracking-tight">{item.description}</p>
                <Button 
                  fullWidth 
                  variant="primary"
                  onClick={() => handleOrder(item.name)}
                >
                  LA QUIERO AHORA
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* AI ASSISTANT */}
      <Assistant />

      {/* PROOF / UGC */}
      <section className="py-24 bg-black overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <h2 className="font-heading text-5xl md:text-7xl uppercase leading-none">TESTIGOS DEL <br/><span className="text-neon">COLAPSO SENSORIAL</span></h2>
            <div className="border-4 border-neon p-6 text-center neo-shadow">
              <p className="font-heading text-5xl text-neon">{burgersSold}</p>
              <p className="font-black uppercase text-xs">Burgers horneadas hoy</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {REVIEWS.map((review) => (
              <div key={review.id} className="border-2 border-gray-800 p-6 hover:border-neon transition-colors">
                <div className="flex items-center gap-4 mb-4">
                  <img src={review.image} alt={review.user} className="w-12 h-12 rounded-none border-2 border-white" />
                  <div>
                    <p className="font-bold uppercase text-sm leading-none">{review.user}</p>
                    <p className="text-neon text-xs font-black italic">{review.handle}</p>
                  </div>
                </div>
                <p className="text-sm font-bold uppercase tracking-tight italic">"{review.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-neon text-black py-16 px-6 border-t-8 border-black">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12">
          <div>
            <h2 className="font-heading text-6xl md:text-8xl tracking-tighter mb-4">METRO BURGER</h2>
            <p className="font-black uppercase max-w-md">Sin intermediarios. Sin comisiones. El precio justo por el exceso que te merecés.</p>
          </div>
          <div className="flex flex-col gap-4">
            <p className="font-heading text-2xl uppercase underline decoration-4">Cerca tuyo:</p>
            <a 
              href="https://www.google.com/maps/search/?api=1&query=Av.+Corrientes+1223,+Capital+Federal,+Argentina" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-bold uppercase hover:underline decoration-2 transition-all cursor-pointer block"
            >
              Av. Corrientes 1223, Capital Federal
            </a>
            <p className="font-bold uppercase">Abierto de 11:00 a 02:00</p>
            <div className="flex gap-4 mt-4">
               <a 
                href="https://facebook.com/metroburger" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-black text-white flex items-center justify-center border-2 border-black hover:bg-white hover:text-black transition-all active:translate-x-[2px] active:translate-y-[2px]"
               >
                 <Facebook size={24} />
               </a>
               <a 
                href="https://instagram.com/MetroBurger" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-black text-white flex items-center justify-center border-2 border-black hover:bg-white hover:text-black transition-all active:translate-x-[2px] active:translate-y-[2px]"
               >
                 <Instagram size={24} />
               </a>
               <a 
                href="https://tiktok.com/@metroburger" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-black text-white flex items-center justify-center border-2 border-black hover:bg-white hover:text-black transition-all active:translate-x-[2px] active:translate-y-[2px]"
               >
                 <Music2 size={24} />
               </a>
            </div>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t-2 border-black flex flex-col md:flex-row justify-between gap-4 font-black text-xs uppercase tracking-widest">
          <p>© 2026 METRO BURGER. PROPIEDAD INTELECTUAL DEL ASALTO GASTRONÓMICO.</p>
          <p>DESIGN BY METRO BURGER TECH</p>
        </div>
      </footer>

      {/* FLOATING CTA FOR MOBILE */}
      <FloatingCTA onClick={scrollToMenu} />

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
};

export default App;
