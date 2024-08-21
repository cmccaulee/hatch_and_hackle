import { useState } from "react";
import UserService from "../services/users.services";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const changeHandler = (e) => {
        const { name, value } = e.target;
        setUser((prevUserValue) => ({ ...prevUserValue, [name]: value }));
    };

    const submitHandler = (e) => {
        e.preventDefault();
        UserService.register(user)
            .then((response) => {
                console.log(response);
                navigate("/");
            })
            .catch((error) => {
                console.log(error);
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
