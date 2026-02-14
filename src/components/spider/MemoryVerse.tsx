import React, { useRef } from 'react';
import { motion } from 'framer-motion';

const MemoryVerse = () => {
    const scrollRef = useRef(null);

    // Placeholder memories - replaced with prompts or actual images later
    const memories = [
        { id: 1, title: "ORIGIN STORY", desc: "Donde todo comenzó...", color: "bg-spider-red" },
        { id: 2, title: "FIRST ALLY", desc: "El día que unimos fuerzas.", color: "bg-spider-blue" },
        { id: 3, title: "EPIC BATTLE", desc: "Superando obstáculos juntos.", color: "bg-purple-600" },
        { id: 4, title: "TO BE CONTINUED", desc: "La historia sigue escribiéndose.", color: "bg-yellow-500" },
    ];

    return (
        <section className="py-20 relative">
            <div className="container mx-auto px-4 mb-8 text-center">
                <h2 className="font-comic text-5xl text-white mb-2 transform -rotate-1 inline-block border-b-4 border-spider-red">
                    THE MULTIVERSE OF MEMORIES
                </h2>
                <p className="font-body text-gray-400">Desliza para explorar las variantes</p>
            </div>

            {/* Comic Strip Scroll Container */}
            <div
                className="flex overflow-x-auto gap-8 px-4 pb-8 snap-x snap-mandatory hide-scrollbar"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {memories.map((memory, index) => (
                    <motion.div
                        key={memory.id}
                        className="flex-shrink-0 w-80 md:w-96 relative snap-center"
                        whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? 1 : -1 }}
                    >
                        {/* Comic Panel Border */}
                        <div className="bg-white p-2 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] border-4 border-black h-96 flex flex-col">
                            {/* Caption Box */}
                            <div className="bg-yellow-300 border-2 border-black p-2 mb-2 self-start transform -rotate-2 shadow-sm">
                                <span className="font-comic text-black text-xl uppercase tracking-wide">
                                    #{memory.id}: {memory.title}
                                </span>
                            </div>

                            {/* Image Placeholder Area */}
                            <div className={`flex-1 ${memory.color} relative overflow-hidden border-2 border-black group`}>
                                {/* Halftone pattern overlay */}
                                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle,black_1px,transparent_1px)] bg-[length:4px_4px]"></div>

                                <div className="absolute inset-0 flex items-center justify-center">
                                    <span className="font-comic text-4xl text-white opacity-50 rotate-12">
                                        PHOTO HERE
                                    </span>
                                </div>
                            </div>

                            {/* Narration Box */}
                            <div className="mt-2 bg-gray-100 p-2 border-t-2 border-black">
                                <p className="font-comic text-black leading-tight">
                                    {memory.desc}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-spider-blue opacity-20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-spider-red opacity-20 rounded-full blur-3xl"></div>
        </section>
    );
};

export default MemoryVerse;
