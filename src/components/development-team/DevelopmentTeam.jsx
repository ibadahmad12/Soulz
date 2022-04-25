import img1 from '../../assets/hope.jpg';
import img2 from '../../assets/IMG_6233.jpg';
import img3 from '../../assets/IMG_6231.jpg';
import './development-team.scss';

const DevelopmentTeam = () => {
    return (
        <div className="dev-team-wrap">
            <h1 data-aos="fade">
                Development <br />
                team.
            </h1>
            <div className="dev-team-cards-wrap">
                <div className="single-dev-card" data-aos="fade">
                    <img src={img1} alt="temm member 1 img" />
                    <p>HoPEium: Co-Founder, Project Lead, Director of Design and Fault Finder</p>
                </div>
                <div className="single-dev-card" data-aos="fade">
                    <img src={img2} alt="temm member 2 img" />
                    <p>Dylan: Co-Founder, Project Growth, Marketing Director and Emoji King</p>
                </div>
                <div className="single-dev-card" data-aos="fade">
                    <img src={img3} alt="temm member 3 img" />
                    <p>Sashy: Co-Founder, Development Director. Meme Generation specialist</p>
                </div>
            </div>
        </div>
    );
};

export default DevelopmentTeam;
