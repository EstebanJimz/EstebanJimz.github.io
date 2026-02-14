import React from 'react';
import { motion } from 'framer-motion';

const LootDrop = () => {
    return (
        <section className="py-20 px-4">
            <div className="max-w-4xl mx-auto">
                <div className="flex items-center gap-2 mb-8">
                    <div className="h-px bg-gray-700 flex-1"></div>
                    <span className="font-mono text-xs text-yellow-500 tracking-widest">LOOT CRATE OPENED</span>
                    <div className="h-px bg-gray-700 flex-1"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Item 1: Plushie */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="bg-gray-900/40 border border-yellow-500/30 p-6 rounded-lg relative group"
                    >
                        <div className="absolute top-2 right-2 text-yellow-500 text-xs font-mono">RARE ITEM</div>
                        <img src="/fotos/plushie.png" alt="Plushie" className="w-24 h-24 mb-4 object-contain filter drop-shadow-[0_0_10px_rgba(255,215,0,0.5)] grayscale group-hover:grayscale-0 transition-all duration-500" />
                        <h3 className="text-white font-comic text-xl mb-2">SUPPLY RUN: JUGUETÓN</h3>
                        <p className="text-gray-400 font-mono text-sm">Deploying tactical plushie for morale support.</p>
                    </motion.div>

                    {/* Item 2: Coffee */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="bg-gray-900/40 border border-yellow-500/30 p-6 rounded-lg relative group"
                    >
                        <div className="absolute top-2 right-2 text-yellow-500 text-xs font-mono">CONSUMABLE</div>
                        <img src="/fotos/coffee.png" alt="Coffee" className="w-24 h-24 mb-4 object-contain filter drop-shadow-[0_0_10px_rgba(255,215,0,0.5)] grayscale group-hover:grayscale-0 transition-all duration-500" />
                        <h3 className="text-white font-comic text-xl mb-2">21 PICK COFFEE</h3>
                        <p className="text-gray-400 font-mono text-sm">Caffeine injection initiated. System recharge complete.</p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default LootDrop;
