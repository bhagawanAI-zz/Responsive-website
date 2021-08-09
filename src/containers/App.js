import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Navbar from "../components/Navbar/Navbar";
import HeroBlock from "../components/HeroBlock/HeroBlock";
import FeatureBlock from "../components/FeatureBlock/FeatureBlock";
import OfferBlock from "../components/OfferBlock/OfferBlock";
import SolutionBlock from "../components/SolutionBlock/SolutionBlock";
import Pricing from "../components/Pricing/Pricing";
import Clients from "../components/Clients/Clients";
import Carousel from "../components/Carousel/Carousel";
import AboutUs from "../components/AboutUs/AboutUs";
import Footer from "../components/Footer/Footer";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
	return (
		<div className="App">
			<Container className="mw-100">
				<Row>
					<Navbar />
                    <HeroBlock />
                    <FeatureBlock />
                    <AboutUs />
                    <OfferBlock />
                    <SolutionBlock />
                    <Pricing />
                    <Clients />
                    <Carousel />
                    <Footer />
                </Row>
            </Container>
        </div>
    );
};

export default App;
