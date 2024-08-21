import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./views/LandingPage";
import FlyDetails from "./views/FlyDetails";
import AllFlies from "./views/AllFlies";
import Login from "./views/Login";
import Register from "./views/Register";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/flies/:id" element={<FlyDetails />} />
                    <Route path="/flies" element={<AllFlies />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
