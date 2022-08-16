import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Landing from "../components/Landing/Landing";
import AboutUs from "../components/AboutUs/AboutUs";
import ContactUs from "../components/ContactUs/ContactUs";
import Career from "../components/Career/Career";
import Solutions from "../components/Solutions/Solutions";
import Footer from "../components/Footer/Footer";
import ArtificialIntelligence from "../components/ArtificialIntelligence/ArtificialIntelligence";
import DigitalTwin from "../components/DigitalTwin/DigitalTwin";
import EdgeComputing from "../components/EdgeComputing/EdgeComputing";
import Robotics from "../components/Robotics/Robotics";
import AdvancedAi from "../components/AdvancedAi/AdvancedAi";
import SmartSolarEnergy from "../components/SmartSolarEnergy/SmartSolarEnergy";
import PredictiveMaintenance from "../components/PredictiveMaintenance/PredictiveMaintenance";
import Signin from "../components/Signin/Signin";
import Signup from "../components/Signup/Signup";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Switch from "react-bootstrap/cjs/Switch";
import ScrollIntoView from "../components/ScrollIntoView";
import Products from "../components/Products/Products";
import ForgotPassword from "../components/ForgotPassword/ForgotPassword";
import VerifyOtp from "../components/VerifyOtp/VerifyOtp";
import ResetPassword from "../components/ResetPassword/ResetPassword";
import MyProfile from "../components/MyProfile/MyProfile";

const App = () => {
	return (
        <BrowserRouter>
            <div>
                <ScrollIntoView>
                    <Switch className="pl-0">
                        <Navbar/>
                        <Route path='/' exact component={Landing} />
                        <Route path='/signin' exact component={Signin} />
                        <Route path='/signup' exact component={Signup} />
                        <Route path='/forgot-password' exact component={ForgotPassword} />
                        <Route path='/reset-password' exact component={ResetPassword} />
                        <Route path='/verify-otp' exact component={VerifyOtp} />
                        <Route path='/aboutus' component={AboutUs} />
                        <Route path='/contact' component={ContactUs} />
                        <Route path='/career' component={Career} />
                        <Route path='/solutions' component={Solutions} />
                        <Route path='/products' component={Products} />
                        <Route path='/ai-details' component={ArtificialIntelligence} />
                        <Route path='/digital-twin' component={DigitalTwin} />
                        <Route path='/edge-computing' component={EdgeComputing} />
                        <Route path='/robotics' component={Robotics} />
                        <Route path='/advanced-ai' component={AdvancedAi} />
                        <Route path='/smart-solar' component={SmartSolarEnergy} />
                        <Route path='/predictive' component={PredictiveMaintenance} />
                        <Route path='/my-profile' component={MyProfile} />
                        <Footer/>
                    </Switch>
                </ScrollIntoView>
            </div>
        </BrowserRouter>
    );
};

export default App;
