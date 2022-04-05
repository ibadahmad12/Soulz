import HeroSection from './components/hero-section/HeroSection';
import Monogatari from './components/monogatari/Monogatari';
import Navbar from './components/navbar/Navbar';
import Sale from './components/opensea-sale/Sale';
import ReleaseDate from './components/release-date/ReleaseDate';

function App() {
    return (
        <div className="App">
            <Navbar />
            <HeroSection />
            <Sale />
            <Monogatari />
            <ReleaseDate />
        </div>
    );
}

export default App;
