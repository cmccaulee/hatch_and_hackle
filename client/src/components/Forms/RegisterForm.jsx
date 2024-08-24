import { useState, useContext } from "react";
import UserService from "../../services/users.services";
import { useNavigate } from "react-router-dom";
import { LoggedInUserContext } from "../../context/LoggedInUserContext";

const RegisterForm = () => {
    const navigate = useNavigate();
    const { setUser, setIsLoggedIn } = useContext(LoggedInUserContext);
    const [user, setUserState] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const changeHandler = (e) => {
        const { name, value } = e.target;
        setUserState((prevUserValue) => ({ ...prevUserValue, [name]: value }));
    };

    const submitHandler = (e) => {
        e.preventDefault();
        UserService.register(user)
            .then((response) => {
                setIsLoggedIn(true);
                setUser(response.data);
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
                navigate("/");
            })
            .finally(() => {
                navigate("/");
            });
    };

    return (
        <>
            <h2>Register</h2>
            <form onSubmit={submitHandler}>
                <div>
                    <label htmlFor="firstName">
                        First Name:
                        <input
                            type="text"
                            value={user.firstName}
                            name="firstName"
                            id="firstName"
                            onChange={(e) => changeHandler(e)}
                        />
                    </label>

                    <label htmlFor="lastName">
                        Last Name:
                        <input
                            type="text"
                            value={user.lastName}
                            name="lastName"
                            id="lastName"
                            onChange={(e) => changeHandler(e)}
                        />
                    </label>
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
                    <label htmlFor="confirmPassword">
                        Confirm Password:
                        <input
                            type="password"
                            value={user.confirmPassword}
                            name="confirmPassword"
                            id="confirmPassword"
                            onChange={(e) => changeHandler(e)}
                        />
                    </label>
                </div>
                <button className="btn btn-primary" type="submit">
                    Submit
                </button>
            </form>
        </>
    );
};
export default RegisterForm;
