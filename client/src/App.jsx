import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./views/Retrievals/LandingPage";
import FlyDetails from "./views/Retrievals/FlyDetails";
import AllFlies from "./views/Retrievals/AllFlies";
import Login from "./views/Forms/Login";
import Register from "./views/Forms/Register";
import { LoggedInUserProvider } from "./context/LoggedInUserContext";
import CreateFly from "./views/Forms/CreateFly";
import UpdateFly from "./views/Forms/UpdateFly";

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
                        <Route path="/flies/create" element={<CreateFly />} />
                        <Route
                            path="/flies/update/:id"
                            element={<UpdateFly />}
                        />
                        <Route
                            path="/flies/hatch/:hatch"
                            element={<AllFlies />}
                        />
                    </Routes>
                </LoggedInUserProvider>
            </BrowserRouter>
        </>
    );
}

export default App;
