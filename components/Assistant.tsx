
import React, { useState } from 'react';
import { getBurgerRecommendation } from '../services/geminiService';
import { Button } from './Button';

export const Assistant: React.FC = () => {
  const [mood, setMood] = useState('');
  const [recommendation, setRecommendation] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAsk = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!mood.trim()) return;
    setLoading(true);
    try {
      const result = await getBurgerRecommendation(mood);
      setRecommendation(result || '');
    } catch (error) {
      setRecommendation('Algo falló en la cocina. Pedí la STARTER PACK y no preguntes.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 px-6 bg-[#111] border-y-4 border-neon">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-heading text-4xl mb-4 text-neon">¿DUDAS? EL CHEF TE LEE LA MENTE.</h2>
        <p className="text-gray-400 mb-8 uppercase font-bold tracking-tighter">Decime cómo te sentís hoy y te digo qué tenés que morder.</p>
        
        <form onSubmit={handleAsk} className="flex flex-col gap-4">
          <input 
            type="text" 
            value={mood}
            onChange={(e) => setMood(e.target.value)}
            placeholder="Ej: 'Con hambre de dragón y ganas de algo caro'"
            className="bg-black border-2 border-white p-4 text-xl font-bold focus:border-neon outline-none text-white uppercase"
          />
          <Button type="submit" variant="secondary" disabled={loading}>
            {loading ? 'ANALIZANDO TU PSIQUIS...' : 'RECOMENDAME ALGO'}
          </Button>
        </form>

        {recommendation && (
          <div className="mt-8 p-6 border-4 border-neon bg-black neo-shadow">
            <p className="text-2xl font-black italic uppercase leading-none italic">"{recommendation}"</p>
          </div>
        )}
      </div>
    </section>
  );
};
