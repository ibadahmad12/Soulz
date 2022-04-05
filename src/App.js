import HeroSection from './components/hero-section/HeroSection';
import Monogatari from './components/monogatari/Monogatari';
import Navbar from './components/navbar/Navbar';
import Sale from './components/opensea-sale/Sale';
import RamenShop from './components/ramen-shop/RamenShop';
import ReleaseDate from './components/release-date/ReleaseDate';

function App() {
    return (
        <div className="App">
            <Navbar />
            <HeroSection />
            <Sale />
            <Monogatari />
            <ReleaseDate />
            <RamenShop />
        </div>
    );
}

export default App;
