import { Route, Routes } from "react-router-dom";
import Art from "../components/Art/Art";
import Bio from "../components/Bio/Bio";
import Portfolio from "../components/Portfolio/Portfolio";

export const AppRouters = () => (
    <Routes>
        <Route path="/" element={<Bio />} />
        <Route path="/art" element={<Art />} />
        <Route path="/portfolio" element={<Portfolio />} />
    </Routes>
)