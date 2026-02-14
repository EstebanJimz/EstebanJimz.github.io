import React, { useState } from 'react';
import { motion } from 'framer-motion';

const PeterFooter = () => {
    const [showConfetti, setShowConfetti] = useState(false);

    const triggerConfetti = () => {
        setShowConfetti(true);
        // Reset after animation
        setTimeout(() => setShowConfetti(false), 5000);
    };

    return (
        <footer className="bg-black text-white py-12 relative overflow-hidden border-t-8 border-spider-red">
            {showConfetti && (
                <div className="fixed inset-0 pointer-events-none z-50 flex items-center justify-center overflow-hidden">
                    {/* Simple CSS-based confetti or particles */}
                    {[...Array(50)].map((_, i) => (
                        <motion.div
                            key={i}
                            initial={{ y: -100, x: Math.random() * window.innerWidth, opacity: 1 }}
                            animate={{ y: window.innerHeight + 100, rotate: 360 }}
                            transition={{ duration: Math.random() * 2 + 3, ease: 'linear' }}
                            className="absolute text-2xl"
                            style={{ left: 0 }}
                        >
                            {Math.random() > 0.5 ? '❤️' : '🕷️'}
                        </motion.div>
                    ))}
                </div>
            )}

            <div className="container mx-auto px-4 text-center z-10 relative">
                <div className="mb-8">
                    <h2 className="font-comic text-4xl mb-6 text-spider-red">PANEL DE CONTROL</h2>
                    <div className="flex justify-center gap-6 flex-wrap">
                        <button className="bg-gray-800 hover:bg-gray-700 border-2 border-gray-600 text-white font-bold py-3 px-6 rounded-lg transition-all transform hover:scale-105 font-mono">
                            INSTAGRAM
                        </button>
                        <button className="bg-gray-800 hover:bg-gray-700 border-2 border-gray-600 text-white font-bold py-3 px-6 rounded-lg transition-all transform hover:scale-105 font-mono">
                            WHATSAPP
                        </button>
                    </div>
                </div>

                <div className="my-12">
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={triggerConfetti}
                        className="bg-spider-red hover:bg-red-700 text-white font-comic text-3xl py-4 px-12 border-4 border-white shadow-[0_0_20px_rgba(192,57,43,0.6)] rounded-xl relative overflow-hidden group"
                    >
                        <span className="relative z-10">TE QUIERO 3000</span>
                        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
                    </motion.button>
                </div>

                <p className="text-gray-500 font-mono text-sm">
                    DEVELOPED BY YOUR FRIENDLY NEIGHBORHOOD DEVELOPER
                    <br />
                    © {new Date().getFullYear()} SPIDER-VERSE ED.
                </p>
            </div>
        </footer>
    );
};

export default PeterFooter;
