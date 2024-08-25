import { Link } from "react-router-dom";
import UserService from "../../services/users.services";
import { useContext } from "react";
import { LoggedInUserContext } from "../../context/LoggedInUserContext";

const TopNav = () => {
    const { user, setUser, isLoggedIn, setIsLoggedIn } =
        useContext(LoggedInUserContext);

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
                    <li>
                        <Link to={"/flies"}>View All Patterns</Link>
                    </li>
                    {isLoggedIn ? (
                        <>
                            <li> </li>
                            <li>
                                <button onClick={logoutUser}>
                                    Log out of {user.firstName}'s account
                                </button>
                            </li>
                        </>
                    ) : (
                        <li>
                            <Link to={"/login"}>Sign In</Link>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    );
};
export default TopNav;
