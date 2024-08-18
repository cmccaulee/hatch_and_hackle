import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./views/LandingPage";
import FlyDetails from "./views/FlyDetails";
import AllFlies from "./views/AllFlies";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/flies/:id" element={<FlyDetails />} />
                    <Route path="/flies" element={<AllFlies />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
