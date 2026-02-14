import React from 'react';
import { motion } from 'framer-motion';

const BattleArena = () => {
    return (
        <section className="py-24 px-4 relative border-t border-gray-800">
            <div className="max-w-4xl mx-auto text-center">
                <div className="inline-block bg-[#ff0055] text-black font-bold px-2 py-1 mb-4 text-xs font-mono transform -rotate-2">
                    SECTION 03: THE DEFEAT
                </div>

                <h2 className="font-comic text-5xl text-white mb-12">GAME OVER</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    {/* Bowling Lane Visual */}
                    <div className="border border-gray-700 bg-gray-900/50 p-6 rounded-xl relative overflow-hidden group flex flex-col items-center">
                        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,0,85,0.1)_50%,transparent_75%)] bg-[length:250%_250%] animate-[shimmer_3s_infinite]"></div>
                        <img src="/fotos/bowling.png" alt="Bowling" className="w-24 h-24 mb-4 object-contain filter drop-shadow-[0_0_10px_rgba(255,0,85,0.5)]" />
                        <h3 className="font-mono text-[#00f3ff] text-xl mb-2">BOWLING ALLEY</h3>
                        <p className="text-gray-400 text-sm">Target acquisition failed. Pins remained standing.</p>
                        <div className="mt-4 text-red-500 font-bold border border-red-500/30 bg-red-500/10 p-2 rounded">
                            LOSS DETECTED
                        </div>
                    </div>

                    {/* Arcade Cabinet Visual */}
                    <div className="border border-gray-700 bg-gray-900/50 p-6 rounded-xl relative overflow-hidden group flex flex-col items-center">
                        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(0,243,255,0.1)_50%,transparent_75%)] bg-[length:250%_250%] animate-[shimmer_3s_infinite_reverse]"></div>
                        <img src="/fotos/arcade.png" alt="Arcade" className="w-24 h-24 mb-4 object-contain filter drop-shadow-[0_0_10px_rgba(0,243,255,0.5)]" />
                        <h3 className="font-mono text-[#ff0055] text-xl mb-2">ARCADE ZONE</h3>
                        <p className="text-gray-400 text-sm">Reflexes insufficient. High score claimed by Player 1 (Majo).</p>
                        <div className="mt-4 text-red-500 font-bold border border-red-500/30 bg-red-500/10 p-2 rounded">
                            LOSS DETECTED
                        </div>
                    </div>
                </div>

                {/* Scoreboard */}
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-12 bg-black border-2 border-[#ff0055] p-6 max-w-sm mx-auto transform rotate-1 shadow-[8px_8px_0px_#ff0055]"
                >
                    <h4 className="font-mono text-xs text-gray-500 mb-4 tracking-[0.2em] border-b border-gray-800 pb-2">FINAL SCORE</h4>
                    <div className="flex justify-between items-end font-mono">
                        <div className="text-center">
                            <span className="block text-gray-400 text-sm mb-1">MAJO</span>
                            <span className="text-5xl text-[#00f3ff] font-bold">02</span>
                        </div>
                        <div className="text-gray-600 pb-2">vs</div>
                        <div className="text-center">
                            <span className="block text-gray-400 text-sm mb-1">FLIPPERMEN</span>
                            <span className="text-5xl text-red-600 font-bold">00</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default BattleArena;
