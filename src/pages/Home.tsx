import Hero from '../components/Hero';
import AboutTEDx from './AboutTEDx';
import AboutTEDxUPM from './AboutTEDxUPM';
import Speakers from './Speakers';
import Schedule from './Schedule';
import Sponsors from '../components/Sponsors';
import Contact from './Contact';

const Home = () => {
    return (
        <div className="overflow-x-hidden">
            <Hero />


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
        </div>
    );
};

export default Home;
