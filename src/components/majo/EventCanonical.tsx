import React from 'react';
import { motion } from 'framer-motion';

const EventCanonical = () => {
    return (
        <section className="py-24 px-4 relative flex flex-col items-center">
            <div className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-[#00f3ff] to-transparent opacity-30"></div>

            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="max-w-2xl text-center relative z-10"
            >
                <div className="inline-block border border-[#00f3ff] bg-[#00f3ff]/10 px-3 py-1 rounded-full text-xs font-mono text-[#00f3ff] mb-6">
                    EVENT DETECTED: CANONICAL
                </div>

                <h2 className="text-4xl md:text-5xl font-comic text-white mb-6">LA CHUPISA DE ISAAC</h2>

                <div className="bg-black/80 border-2 border-dashed border-gray-700 p-8 rounded-lg relative overflow-hidden flex flex-col items-center">
                    {/* Pixel Art Beer Icon */}
                    <motion.img 
                        src="/fotos/beer.png" 
                        alt="Pixel Beer" 
                        className="w-32 h-32 mb-4 object-contain filter drop-shadow-[0_0_10px_rgba(0,243,255,0.5)]"
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    />

                    <p className="font-mono text-gray-300 leading-relaxed text-lg">
                        "La invitación de Isaac. Una jarra compartida y el inicio de la misión en el mundo real."
                    </p>

                    <div className="mt-4 flex justify-center gap-2">
                        <span className="text-xs font-mono text-gray-500 border border-gray-800 px-2 py-1 bg-black">LOCATION: UNKNOWN_COORDS</span>
                        <span className="text-xs font-mono text-[#00f3ff] border border-[#00f3ff]/30 px-2 py-1 bg-[#00f3ff]/10">STATUS: CONNECTED</span>
                    </div>
                </div>

                {/* Connecting Line */}
                <div className="h-24 w-px bg-gradient-to-b from-[#00f3ff] to-transparent mx-auto mt-8"></div>
            </motion.div>
        </section>
    );
};

export default EventCanonical;
