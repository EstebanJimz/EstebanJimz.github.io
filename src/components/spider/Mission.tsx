import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Mission = () => {
    const message = "En cualquier universo, siempre elegiría pasar San Valentín contigo, Majo.";
    const [text, setText] = useState('');
    const [startTyping, setStartTyping] = useState(false);

    // Intersection Observer trigger could be added here, currently simplified with auto-start on mount/view
    // For simplicity, we'll start typing when component mounts, but ideally use intersection observer

    useEffect(() => {
        const timeout = setTimeout(() => {
            setStartTyping(true);
        }, 1000);
        return () => clearTimeout(timeout);
    }, []);

    useEffect(() => {
        if (startTyping && text.length < message.length) {
            const timeout = setTimeout(() => {
                setText(message.slice(0, text.length + 1));
            }, 50); // Typing speed
            return () => clearTimeout(timeout);
        }
    }, [text, startTyping]);

    return (
        <section className="py-24 px-4 flex flex-col items-center justify-center bg-spider-blue border-t-4 border-black relative">
            <div className="max-w-3xl w-full bg-black border-4 border-gray-700 p-8 rounded-lg shadow-2xl relative">
                {/* HUD Elements */}
                <div className="absolute top-2 left-2 text-xs text-green-500 font-mono">SYSTEM: ONLINE</div>
                <div className="absolute top-2 right-2 text-xs text-green-500 font-mono">BATTERY: 100%</div>
                <div className="absolute bottom-2 right-2 text-xs text-red-500 font-mono animate-pulse">RECORDING...</div>

                <div className="border-b border-gray-700 pb-4 mb-4 flex items-center gap-4">
                    <div className="w-12 h-12 bg-spider-red rounded-full border-2 border-white flex items-center justify-center">
                        <span className="text-2xl">🕸️</span>
                    </div>
                    <div>
                        <h3 className="text-white font-comic text-2xl">INCOMING TRANSMISSION</h3>
                        <p className="text-gray-400 text-sm font-mono">From: Peter Parker (Earth-616)</p>
                    </div>
                </div>

                <div className="font-mono text-green-400 text-lg md:text-xl leading-relaxed min-h-[100px]">
                    {text}
                    <motion.span
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ repeat: Infinity, duration: 0.8 }}
                        className="inline-block w-2 h-5 bg-green-400 ml-1 align-middle"
                    />
                </div>
            </div>
        </section>
    );
};

export default Mission;
