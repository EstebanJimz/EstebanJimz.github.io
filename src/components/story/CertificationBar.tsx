import React from 'react';
import { motion } from 'framer-motion';

const CertificationBar = () => {
    return (
        <div className="w-full max-w-md mx-auto my-8 bg-black/50 p-4 rounded-xl border border-gray-700 backdrop-blur">
            <div className="flex justify-between items-end mb-2">
                <span className="font-mono text-xs text-blue-400">STATUS: ACQUIRING SUPERPOWERS...</span>
                <span className="font-mono text-xs text-white">98%</span>
            </div>

            <div className="h-4 w-full bg-gray-900 rounded-full overflow-hidden border border-gray-600 relative">
                {/* Progress Bar */}
                <motion.div
                    initial={{ width: "0%" }}
                    whileInView={{ width: "98%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 2, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-blue-600 via-purple-500 to-spider-red relative"
                >
                    {/* Animated Glitch/Shine effect */}
                    <div className="absolute inset-0 bg-white/30 w-full animate-[shimmer_2s_infinite]"></div>
                </motion.div>
            </div>

            <p className="text-center font-comic text-gray-400 text-sm mt-2">
                Mission: "The Certification" <br />
                <span className="text-xs text-gray-500">(ETA: NEXT WEEK)</span>
            </p>
        </div>
    );
};

export default CertificationBar;
