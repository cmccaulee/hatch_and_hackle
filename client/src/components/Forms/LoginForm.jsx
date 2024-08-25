import { useState, useContext } from "react";
import UserService from "../../services/users.services";
import { useNavigate, Link } from "react-router-dom";
import { LoggedInUserContext } from "../../context/LoggedInUserContext";

const LoginForm = () => {
    const navigate = useNavigate();
    const { setUser, setIsLoggedIn } = useContext(LoggedInUserContext);
    const [errors, setErrors] = useState({});
    const [user, setUserState] = useState({ email: "", password: "" });

    const changeHandler = (e) => {
        const { name, value } = e.target;
        setUserState((prevUserValue) => ({ ...prevUserValue, [name]: value }));
    };

    const submitHandler = (e) => {
        e.preventDefault();
        UserService.login(user)
            .then((response) => {
                setIsLoggedIn(true);
                setUser(response.data);
                navigate("/");
            })
            .catch((error) => {
                console.log(error);
                setErrors(error.response.data);
            });
    };

    return (
        <>
            <div className="flex justify-center mt-5">
                <form
                    className="card bg-base-100 w-auto shadow-xl gap-2 px-4 py-8"
                    onSubmit={(e) => submitHandler(e)}>
                    {errors && <p className="text-red-500">{errors.errors}</p>}
                    <h2 className="text-2xl ml-6 text-center">Login</h2>
                    <label
                        htmlFor="email"
                        className="input input-bordered flex items-center gap-2">
                        Email:
                        <input
                            type="email"
                            value={user.email}
                            name="email"
                            id="email"
                            onChange={(e) => changeHandler(e)}
                        />
                    </label>
                    <label
                        htmlFor="password"
                        className="input input-bordered flex items-center gap-2">
                        Password:
                        <input
                            type="password"
                            value={user.password}
                            name="password"
                            id="password"
                            onChange={(e) => changeHandler(e)}
                        />
                        {errors.validationErrors && (
                            <p className="text-red-400">
                                {errors.validationErrors.password}
                            </p>
                        )}
                    </label>
                    <button className="join-item btn btn-primary" type="submit">
                        Login
                    </button>
                    <span>
                        Not a user yet?{" "}
                        <Link className="text-blue-500" to="/register">
                            Register!
                        </Link>{" "}
                    </span>
                </form>
            </div>
        </>
    );
};
export default LoginForm;
