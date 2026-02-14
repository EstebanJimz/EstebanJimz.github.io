import React from 'react';
import { motion } from 'framer-motion';
import { storyData } from '../../data/story';
import ComicPanel from './ComicPanel';
import ScoreBoard from './ScoreBoard';
import CertificationBar from './CertificationBar';
import PhotoReveal from './PhotoReveal';
import FutureDateCard from './FutureDateCard';

const StoryTimeline = () => {
    return (
        <div className="relative w-full max-w-4xl mx-auto px-4 py-12">
            {/* Center Line for Timeline */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-spider-red opacity-30 transform -translate-x-1/2 z-0 hidden md:block"></div>

            {/* Floating Scoreboard */}
            <ScoreBoard />

            <div className="space-y-24 relative z-10">
                {storyData.map((beat, index) => {
                    // Render specific components based on type
                    if (beat.type === 'photo') {
                        return <PhotoReveal key={beat.id} data={beat} />;
                    }
                    if (beat.type === 'climax') {
                        return <FutureDateCard key={beat.id} data={beat} />;
                    }
                    if (beat.type === 'conflict') {
                        return (
                            <div key={beat.id} className="flex flex-col items-center space-y-8">
                                <ComicPanel data={beat} index={index} />
                                <CertificationBar />
                            </div>
                        );
                    }

                    // Default Comic Panel
                    return <ComicPanel key={beat.id} data={beat} index={index} />;
                })}
            </div>
        </div>
    );
};

export default StoryTimeline;
