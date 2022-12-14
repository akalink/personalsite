import { Route, Routes } from "react-router-dom";
import Art from "../components/Art/Art";
import Bio from "../components/Bio/Bio";
import Portfolio from "../components/Portfolio/Portfolio";
import VR from "../components/VR/VR";
import Game from "../components/Game/Game";
import Intro from "../components/Intro/Intro";

export const AppRouters = () => (
    <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/about" element={<Bio />} />
        <Route path="/art" element={<Art />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="VR" element={<VR />} />
        <Route path="Game" element={<Game />} />
    </Routes>
)