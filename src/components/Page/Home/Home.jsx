import About from "../About/About";
import Service from "../Service/Service";
import Banner from "./Banner/Banner";
import Contact from "./Contact/Contact";

const Home = () => {
    return (
        <div className="container mx-auto">
            <Banner></Banner>
            <About></About>
            <Service></Service>
            <Contact></Contact>
        </div>
    );
};

export default Home;