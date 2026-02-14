import React from 'react';
import { motion } from 'framer-motion';

const ScoreBoard = () => {
    return (
        <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, type: "spring" }}
            className="fixed top-4 right-4 z-50 pointer-events-none"
        >
            <div className="bg-black/80 backdrop-blur-md border-2 border-spider-red rounded-lg p-3 shadow-[4px_4px_0px_0px_#C0392B] transform rotate-2">
                <h4 className="font-comic text-white text-xs tracking-widest mb-1 text-center border-b border-gray-600 pb-1">VS MODE</h4>
                <div className="flex items-center gap-4 font-mono text-xl">
                    <div className="text-center">
                        <span className="text-gray-400 text-xs block">MAJO</span>
                        <span className="text-green-400 font-bold">02</span>
                    </div>
                    <div className="text-gray-600 text-sm">vs</div>
                    <div className="text-center">
                        <span className="text-gray-400 text-xs block">PETER</span>
                        <span className="text-red-500 font-bold">00</span>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default ScoreBoard;
