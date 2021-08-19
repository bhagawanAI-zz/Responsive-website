import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Landing from "../components/Landing/Landing";
import AboutUs from "../components/AboutUs/AboutUs";
import Services from "../components/Services/Services";
import TnC from "../components/TnC/TnC";
import FAQ from "../components/FAQ/FAQ";
import ContactUs from "../components/ContactUs/ContactUs";
import Career from "../components/Career/Career";
import Investor from "../components/Investor/Investor";
import Footer from "../components/Footer/Footer";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Switch from "react-bootstrap/cjs/Switch";
import ScrollIntoView from "../components/ScrollIntoView";

const App = () => {
	return (
        <BrowserRouter>
            <div>
                <ScrollIntoView>
                    <Switch className="pl-0">
                        <Navbar/>
                        <Route path='/' exact component={Landing} />
                        <Route path='/aboutus' component={AboutUs} />
                        <Route path='/services' component={Services} />
                        <Route path='/t&c' component={TnC} />
                        <Route path='/faq' component={FAQ} />
                        <Route path='/contact' component={ContactUs} />
                        <Route path='/career' component={Career} />
                        <Route path='/investor' component={Investor} />
                        <Footer/>
                    </Switch>
                </ScrollIntoView>
            </div>
        </BrowserRouter>
    );
};

export default App;
