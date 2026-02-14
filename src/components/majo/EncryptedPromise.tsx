import React from 'react';
import { motion } from 'framer-motion';

const EncryptedPromise = () => {
    return (
        <section className="py-24 px-4">
            <div className="max-w-3xl mx-auto text-center">
                <div className="mb-12">
                    <h2 className="text-5xl md:text-7xl font-comic text-white mb-4">NEXT MISSION</h2>
                    <p className="font-mono text-[#00f3ff] text-lg">PROTOCOL: RESCHEDULE</p>
                </div>

                {/* Progress Bar */}
                <div className="mb-12 max-w-lg mx-auto">
                    <div className="flex justify-between text-xs font-mono text-gray-500 mb-2">
                        <span>CERTIFICATION PROGRESS</span>
                        <span className="text-white">98%</span>
                    </div>
                    <div className="h-4 bg-gray-900 rounded-full overflow-hidden border border-gray-700">
                        <motion.div
                            initial={{ width: "0%" }}
                            whileInView={{ width: "98%" }}
                            transition={{ duration: 1.5, ease: "circOut" }}
                            className="h-full bg-gradient-to-r from-green-500 to-[#00f3ff] relative"
                        >
                            <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                        </motion.div>
                    </div>
                    <p className="mt-2 text-xs font-mono text-gray-600 text-left">
                        > Compiling final binaries... please wait.
                    </p>
                </div>

                <div className="bg-gradient-to-br from-[#0a0a0a] to-[#111] border border-gray-800 p-8 rounded-2xl relative">
                    <div className="absolute -top-3 left-8 bg-[#0a0a0a] px-2 text-[#00f3ff] text-xs font-mono border border-[#00f3ff]/30">
                        ENCRYPTED_MESSAGE_V2.txt
                    </div>

                    <p className="font-mono text-gray-300 leading-relaxed mb-6">
                        "Esto no es solo código HTML. Es una promesa encriptada. En cuanto termine mi certificación, te confirmaré la fecha y hora. Tengo los detalles físicos guardados (porque lo digital no basta)."
                    </p>

                    <div className="inline-block border-2 border-[#00f3ff] text-[#00f3ff] font-bold px-8 py-3 rounded hover:bg-[#00f3ff] hover:text-black transition-colors cursor-pointer shadow-[0_0_15px_rgba(0,243,255,0.4)]">
                        ACKNOWLEDGE RECEIPT
                    </div>
                </div>

                <p className="mt-12 font-mono text-gray-400 text-sm max-w-md mx-auto">
                    "Espero que tengas un día increíble, Majo. Por favor: descansa, cuídate mucho, no te enfermes y abrígate."
                </p>
            </div>
        </section>
    );
};

export default EncryptedPromise;
