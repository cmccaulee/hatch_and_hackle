import { Link } from "react-router-dom";
import UserService from "../services/users.services";
import { useEffect, useState } from "react";

const TopNav = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState(null);

    useEffect(() => {
        UserService.getCurrentUser()
            .then((res) => {
                if (res.data) {
                    setIsLoggedIn(true);
                    setUser(res.data);
                }
            })
            .catch((err) => {
                setIsLoggedIn(false);
                setUser(null);
            });
    }, []);

    const logoutUser = () => {
        UserService.logoutUser()
            .then(() => {
                setIsLoggedIn(false);
                setUser(null);
            })
            .catch((err) => console.log(err));
    };
    return (
        <div className="navbar bg-base-100 drop-shadow-md p-6">
            <div className="flex-1">
                <Link to={"/"} className="btn btn-ghost text-3xl font-rocksalt">
                    Hatch & Hackle
                </Link>
            </div>

            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <Link to={"/"}>Home</Link>
                    </li>
                    {isLoggedIn ? (
                        <>
                            <li> {user.firstName}</li>
                            <li>
                                <button onClick={logoutUser}>Logout</button>
                            </li>
                        </>
                    ) : (
                        <li>
                            <Link to={"/login"}>Sign In</Link>
                        </li>
                    )}

                    <li>
                        <details>
                            <summary>Patterns</summary>
                            <ul className="bg-base-100 rounded-t-none p-2">
                                <li>
                                    <a>Dry Flies</a>
                                </li>
                                <li>
                                    <a>Nymphs</a>
                                </li>
                                <li>
                                    <a>Streamers</a>
                                </li>
                                <li>
                                    <a>Stillwater Flies</a>
                                </li>
                            </ul>
                        </details>
                    </li>
                </ul>
            </div>
        </div>
    );
};
export default TopNav;
