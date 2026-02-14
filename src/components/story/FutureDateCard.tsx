import React from 'react';
import { motion } from 'framer-motion';
import type { StoryBeat } from '../../data/story';

interface Props {
    data: StoryBeat;
}

const FutureDateCard = ({ data }: Props) => {
    return (
        <section className="py-12 px-4 relative">
            <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="bg-gray-900 border-4 border-spider-red p-8 rounded-2xl max-w-2xl mx-auto text-center relative overflow-hidden"
            >
                {/* Background Web Pattern */}
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle,theme(colors.spider.red)_1px,transparent_1px)] bg-[length:20px_20px]"></div>

                <h2 className="font-comic text-4xl md:text-6xl text-white mb-6 relative z-10">
                    MISSION: <span className="text-spider-red">NEXT WEEK</span>
                </h2>

                <p className="font-body text-lg md:text-xl text-gray-300 mb-8 leading-relaxed max-w-lg mx-auto relative z-10">
                    {data.text}
                </p>

                {/* Mystery Box Teaser */}
                <motion.div
                    whileHover={{ scale: 1.05, rotate: 1 }}
                    className="bg-black border-2 border-dashed border-gray-600 p-4 rounded-lg inline-block mb-8 relative cursor-help group"
                >
                    <span className="text-4xl block mb-2">🎁</span>
                    <span className="font-mono text-xs text-gray-400">TOP SECRET CARGO</span>
                    <div className="absolute inset-0 bg-spider-red/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center backdrop-blur-sm">
                        <span className="font-comic text-white text-sm">LOCKED UNTIL DATE</span>
                    </div>
                </motion.div>

                <div>
                    <button className="bg-spider-red hover:bg-white hover:text-spider-red text-white font-comic text-xl py-3 px-8 rounded-full transition-all transform hover:scale-110 shadow-lg border-2 border-transparent hover:border-spider-red">
                        ACCEPT MISSION
                    </button>
                </div>
            </motion.div>
        </section>
    );
};

export default FutureDateCard;
