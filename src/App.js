/*import logo from './logo.svg';*/
import './App.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
} from "react-router-dom";
import CssBaseline from '@mui/material/CssBaseline';
import { appTheme } from "./components/Theme";



import Home from './components/pages/Home.js';
import About from './components/pages/About.js';
import Impact from './components/pages/Impact.js';
import DreamTeam from './components/pages/DreamTeam.js';
import Programs from './components/pages/Programs.js';
import Partners from './components/pages/Partners.js';
import Services from './components/pages/Services.js';
import Workshops from './components/pages/Workshops.js';
import Consulting from './components/pages/Consulting.js';
import Lending from './components/pages/Lending.js';
import Education from './components/pages/Education.js';
import WomensBiz from './components/pages/WomensBiz.js';
import CoffeeTalk from './components/pages/CoffeeTalk.js';
import EnvisionCenter from './components/pages/EnvisionCenter.js';
import SkillsDev from './components/pages/SkillsDev.js';
import StartSmart from './components/pages/StartSmart.js';
import RiseThrive from './components/pages/RiseThrive.js';
import Youth from './components/pages/Youth.js';
import Volunteer from './components/pages/Volunteer.js';
import Donate from './components/pages/Donate.js';
import Aspire from './components/pages/Aspire.js';
import Contact from './components/pages/Contact.js';






function App() {
   

    return (
        <BrowserRouter>
            <div>
                <ThemeProvider theme={appTheme}>
                <CssBaseline />
                <Routes>
                    {/* console.log("going to home"); */}
                    <Route path={"/"} element={<Home />} />
                    <Route path={"/about"} element={<About />} />
                    <Route path={"/ourimpact"} element={<Impact />} />
                    <Route path={"/dreamteam"} element={<DreamTeam />} />
                    <Route path={"/programs"} element={<Programs />} />
                    <Route path={"/workshops"} element={<Workshops />} />
                    <Route path={"/partnership"} element={<Partners />} />
                    <Route path={"/services"} element={<Services />} />
                    <Route path={"/workshops"} element={<Workshops />} />
                    <Route path={"/consulting"} element={<Consulting />} />
                    <Route path={"/lending"} element={<Lending />} />
                    <Route path={"/education"} element={<Education />} />
                    <Route path={"/womensbiz"} element={<WomensBiz />} />
                    <Route path={"/coffeetalk"} element={<CoffeeTalk />} />
                    <Route path={"/envisioncenter"} element={<EnvisionCenter />} />
                    <Route path={"/skillsdev"} element={<SkillsDev />} />
                    <Route path={"/startsmart"} element={<StartSmart />} />
                    <Route path={"/riseandthrive"} element={<RiseThrive />} />
                    <Route path={"/volunteer"} element={<Volunteer />} />
                    <Route path={"/youthentreprenuership"} element={<Youth />} />
                    <Route path={"/donate"} element={<Donate />} />
                    <Route path={"/aspire"} element={<Aspire />} />
                    <Route path={"/contact"} element={<Contact />} />




                </Routes>
                </ThemeProvider>
            </div>
        </BrowserRouter>
    );
}

export default App;
