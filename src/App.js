import React, { useEffect } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import DevelopmentTeam from './components/development-team/DevelopmentTeam';
import HeroSection from './components/hero-section/HeroSection';
import Monogatari from './components/monogatari/Monogatari';
import Navbar from './components/navbar/Navbar';
import Sale from './components/opensea-sale/Sale';
import Orbs from './components/orbs/Orbs';
import RamenShop from './components/ramen-shop/RamenShop';
// import ReleaseDate from './components/release-date/ReleaseDate';
import Roadmap from './components/roadmap/Roadmap';
import Community from './components/community/Community';
import ArtTeam from './components/art-team/ArtTeam';
import ModerationTeam from './components/moderation-team/ModerationTeam';
import Footer from './components/footer/Footer';
import Accordion from './components/accordion/Accordion';
import StakingPage from './Pages/StakingPage/StakingPage';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" exact element={<HomeRoutes />} />
                <Route path="/staking" element={<StakingPage />} />
            </Routes>
        </Router>
    );
};

export default App;

const HomeRoutes = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div id="home">
            <Navbar />
            <HeroSection />
            <Sale />
            <Monogatari />
            {/* <ReleaseDate /> */}
            <RamenShop />
            <Orbs />
            <div id="roadmap">
                <Roadmap />
            </div>
            <div id="team">
                <DevelopmentTeam />
            </div>
            <Community />
            <ArtTeam />
            <ModerationTeam />
            <div id="faq">
                <Accordion />
            </div>
            <Footer />
        </div>
    );
};
