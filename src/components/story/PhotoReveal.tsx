import React from 'react';
import { motion } from 'framer-motion';
import type { StoryBeat } from '../../data/story';

interface Props {
    data: StoryBeat;
}

const PhotoReveal = ({ data }: Props) => {
    return (
        <div className="py-12 relative flex justify-center">
            <motion.div
                initial={{ opacity: 0, scale: 0.9, filter: "grayscale(100%) blur(5px)" }}
                whileInView={{ opacity: 1, scale: 1, filter: "grayscale(0%) blur(0px)" }}
                viewport={{ once: true, margin: "-20%" }}
                transition={{ duration: 1.5 }}
                className="relative p-4 bg-white transform rotate-2 shadow-2xl max-w-sm"
            >
                {/* Tape Effect */}
                <div className="absolute -top-4 left-1/2 w-32 h-8 bg-yellow-200/80 transform -translate-x-1/2 -rotate-2 z-10 shadow-sm"></div>

                <div className="border-4 border-black p-2">
                    {/* Placeholder for the ONE photo */}
                    <div className="aspect-[3/4] bg-gray-200 overflow-hidden relative group">
                        {data.image ? (
                            <img
                                src={data.image}
                                alt="Us at bowling"
                                className="w-full h-full object-cover"
                            />
                        ) : (
                            <div className="w-full h-full flex items-center justify-center bg-gray-800 text-white font-comic text-center p-4">
                                [INSERT HOLY GRAIL PHOTO HERE]
                            </div>
                        )}

                        {/* Flash effect on reveal */}
                        <motion.div
                            initial={{ opacity: 1 }}
                            whileInView={{ opacity: 0 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            className="absolute inset-0 bg-white pointer-events-none"
                        />
                    </div>
                </div>

                <div className="mt-4 font-handwriting text-center">
                    <p className="font-comic text-xl text-black">{data.title}</p>
                    <p className="font-body text-xs text-gray-600">{data.text}</p>
                </div>
            </motion.div>
        </div>
    );
};

export default PhotoReveal;
