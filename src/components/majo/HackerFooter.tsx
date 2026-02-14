import React from 'react';

const HackerFooter = () => {
    return (
        <footer className="py-12 border-t border-gray-900 bg-black text-center relative overflow-hidden">
            <div className="absolute inset-0 z-0 bg-grid-pattern opacity-5"></div>

            <div className="relative z-10 space-y-4">
                <div className="font-mono text-xs text-gray-600">
                    STATUS: <span className="text-green-500">SYSTEM_EXIT(0)</span>
                </div>

                <p className="font-mono text-gray-400 text-sm">
                    Desarrollado con café, insomnio y aprecio genuino.
                </p>

                <h3 className="font-comic text-2xl text-[#00f3ff] tracking-widest mt-4">
                    ATTE. EL HACKER SUICIDA
                </h3>
                <p className="font-mono text-[10px] text-gray-700">
                    (Flippermen)
                </p>
            </div>
        </footer>
    );
};

export default HackerFooter;
