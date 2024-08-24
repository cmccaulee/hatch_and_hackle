import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./views/LandingPage";
import FlyDetails from "./views/FlyDetails";
import AllFlies from "./views/AllFlies";
import Login from "./views/Login";
import Register from "./views/Register";
import { LoggedInUserProvider } from "./context/LoggedInUserContext";

function App() {
    return (
        <>
            <BrowserRouter>
                <LoggedInUserProvider>
                    <Routes>
                        <Route path="/" element={<LandingPage />} />
                        <Route path="/flies/:id" element={<FlyDetails />} />
                        <Route path="/flies" element={<AllFlies />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                    </Routes>
                </LoggedInUserProvider>
            </BrowserRouter>
        </>
    );
}

export default App;
