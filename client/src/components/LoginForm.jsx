import { useState } from "react";
import UserService from "../services/users.services";
import { useNavigate, Link } from "react-router-dom";

const LoginForm = () => {
    const navigate = useNavigate();

    const [user, setUser] = useState({
        email: "",
        password: "",
    });

    const changeHandler = (e) => {
        const { name, value } = e.target;
        setUser((prevUserValue) => ({ ...prevUserValue, [name]: value }));
    };

    const submitHandler = (e) => {
        e.preventDefault();
        UserService.login(user)
            .then((response) => {
                console.log(response);
                navigate("/");
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <form onSubmit={submitHandler}>
            <h2>Login</h2>
            <div>
                <label htmlFor="email">
                    Email:
                    <input
                        type="email"
                        value={user.email}
                        name="email"
                        id="email"
                        onChange={(e) => changeHandler(e)}
                    />
                </label>
                <label htmlFor="password">
                    Password:
                    <input
                        type="password"
                        value={user.password}
                        name="password"
                        id="password"
                        onChange={(e) => changeHandler(e)}
                    />
                </label>
            </div>
            <button className="btn btn-primary" type="submit">
                Login
            </button>
            <span>
                Not a user yet?{" "}
                <Link className="text-blue-500" to="/register">
                    Register!
                </Link>{" "}
            </span>
        </form>
    );
};
export default LoginForm;
