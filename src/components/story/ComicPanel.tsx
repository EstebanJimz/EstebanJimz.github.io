import React from 'react';
import { motion } from 'framer-motion';
import type { StoryBeat } from '../../data/story';
import { clsx } from 'clsx';

interface Props {
    data: StoryBeat;
    index: number;
}

const ComicPanel = ({ data, index }: Props) => {
    const isLeft = index % 2 === 0;

    return (
        <motion.div
            initial={{ opacity: 0, x: isLeft ? -50 : 50, rotate: isLeft ? -2 : 2 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, type: "spring" }}
            className={clsx(
                "relative bg-white/5 backdrop-blur-sm border-4 rounded-xl p-6 md:p-8 max-w-lg mx-auto shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]",
                data.color,
                // Alignment logic for larger screens
                "md:mx-0",
                isLeft ? "md:mr-auto" : "md:ml-auto"
            )}
        >
            {/* Comic Header with Chapter Number */}
            <div className="absolute -top-4 -left-4 bg-yellow-400 border-2 border-black px-3 py-1 transform -rotate-12 shadow-sm z-20">
                <span className="font-comic text-black font-bold tracking-widest">{data.chapter}</span>
            </div>

            <h3 className="font-comic text-3xl md:text-4xl text-white mb-4 uppercase tracking-wide border-b-2 border-dashed border-gray-500 pb-2">
                {data.title}
            </h3>

            <p className="font-body text-gray-200 text-lg leading-relaxed">
                {data.text}
            </p>

            {/* Halftone Texture Overlay */}
            <div className="absolute inset-0 pointer-events-none opacity-10 bg-[radial-gradient(circle,#000_1px,transparent_1px)] bg-[length:8px_8px] z-0"></div>
        </motion.div>
    );
};

export default ComicPanel;
