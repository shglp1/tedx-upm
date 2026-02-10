import React, { Suspense } from 'react';
import Hero from '../components/Hero';

// Lazy load below-the-fold components
const AboutTEDxUPM = React.lazy(() => import('./AboutTEDxUPM'));
const Speakers = React.lazy(() => import('./Speakers'));
const Schedule = React.lazy(() => import('./Schedule'));
const Contact = React.lazy(() => import('./Contact'));
const Sponsors = React.lazy(() => import('../components/Sponsors'));
const AboutTEDx = React.lazy(() => import('./AboutTEDx'));

const LoadingFallback = () => (
    <div className="w-full h-32 flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-tedx-red border-t-transparent rounded-full animate-spin"></div>
    </div>
);

const Home = () => {
    return (
        <div className="overflow-x-hidden">
            <Hero />

            <Suspense fallback={<LoadingFallback />}>
                {/* AboutTEDxUPM has internal id="about-upm" */}
                <AboutTEDxUPM />

                {/* Speakers has internal id="speakers" */}
                <Speakers />

                <section id="schedule">
                    <Schedule />
                </section>

                <section id="contact">
                    <Contact />
                </section>

                <Sponsors />

                <section id="about-tedx">
                    <AboutTEDx />
                </section>
            </Suspense>
        </div>
    );
};

export default Home;
