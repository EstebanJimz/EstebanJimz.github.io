import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden p-4 text-center">
            {/* Background Spidey Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-10 left-10 w-32 h-32 border-4 border-spider-red rounded-full opacity-20 blur-sm"></div>
                <div className="absolute bottom-20 right-20 w-48 h-48 border-4 border-blue-500 rounded-full opacity-20 blur-sm"></div>
            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="z-10 relative"
            >
                <div className="bg-spider-red text-white font-comic text-xl md:text-2xl px-4 py-1 transform -rotate-2 inline-block mb-4 shadow-[4px_4px_0px_0px_#000]">
                    ALERT: SPIDER-SENSE TINGLING
                </div>

                <h1 className="font-comic text-6xl md:text-9xl text-white mb-6 tracking-wider glitch-text" data-text="HELLO MAJO">
                    HELLO MAJO
                </h1>

                <p className="font-body text-lg md:text-2xl max-w-2xl mx-auto text-gray-200 leading-relaxed">
                    "Mi sentido arácnido me dice que hoy es un día especial para alguien especial..."
                </p>

                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="mt-12"
                >
                    <div className="animate-bounce text-spider-red text-4xl">
                        ⬇
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
