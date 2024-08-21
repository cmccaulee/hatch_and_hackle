import { Link } from "react-router-dom";
import UserService from "../services/users.services";

const TopNav = () => {
    const logoutUser = () => {
        UserService.logoutUser();
        console.log("User has logged out");
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
                    <li>
                        <Link to={"/login"}>Sign In</Link>
                    </li>
                    <li>
                        <button onClick={logoutUser}>Logout</button>
                    </li>
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
