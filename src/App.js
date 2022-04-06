import DevelopmentTeam from './components/development-team/DevelopmentTeam';
import HeroSection from './components/hero-section/HeroSection';
import Monogatari from './components/monogatari/Monogatari';
import Navbar from './components/navbar/Navbar';
import Sale from './components/opensea-sale/Sale';
import Orbs from './components/orbs/Orbs';
import RamenShop from './components/ramen-shop/RamenShop';
import ReleaseDate from './components/release-date/ReleaseDate';
import Roadmap from './components/roadmap/Roadmap';
import Community from './components/community/Community';

function App() {
    return (
        <div id="home">
            <Navbar />
            <HeroSection />
            <Sale />
            <Monogatari />
            <ReleaseDate />
            <RamenShop />
            <Orbs />
            <div id="roadmap">
                <Roadmap />
            </div>
            {/* <div id="team">
                <DevelopmentTeam />
            </div>
            <Community /> */}
        </div>
    );
}

export default App;
