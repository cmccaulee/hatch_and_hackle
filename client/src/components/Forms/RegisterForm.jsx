import { useState, useContext } from "react";
import UserService from "../../services/users.services";
import { useNavigate } from "react-router-dom";
import { LoggedInUserContext } from "../../context/LoggedInUserContext";

const RegisterForm = () => {
    const navigate = useNavigate();
    const { setUser, setIsLoggedIn } = useContext(LoggedInUserContext);
    const [errors, setErrors] = useState({});
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
                navigate("/");
            })
            .catch((err) => {
                console.log(err);
                setErrors(err.response.data);
            });
    };

    return (
        <>
            <div className="flex justify-center mt-5">
                <form
                    className="card bg-base-100 w-auto shadow-xl gap-2 px-4 py-8"
                    onSubmit={(e) => submitHandler(e)}>
                    {errors && <p className="text-red-500">{errors.name}</p>}
                    <h2 className="text-2xl ml-6 text-center">Register</h2>
                    <label
                        htmlFor="firstName"
                        className="input input-bordered flex items-center gap-2">
                        First Name:
                        <input
                            type="text"
                            value={user.firstName}
                            name="firstName"
                            id="firstName"
                            onChange={(e) => changeHandler(e)}
                        />
                        {errors.validationErrors && (
                            <p className="text-red-400">
                                {errors.validationErrors.firstName}
                            </p>
                        )}
                    </label>
                    <label
                        htmlFor="lastName"
                        className="input input-bordered flex items-center gap-2">
                        Last Name:
                        <input
                            type="text"
                            value={user.lastName}
                            name="lastName"
                            id="lastName"
                            onChange={(e) => changeHandler(e)}
                        />
                        {errors.validationErrors && (
                            <p className="text-red-400">
                                {errors.validationErrors.lastName}
                            </p>
                        )}
                    </label>
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
                        {errors.validationErrors && (
                            <p className="text-red-400">
                                {errors.validationErrors.email}
                            </p>
                        )}
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
                    <label
                        htmlFor="confirmPassword"
                        className="input input-bordered flex items-center gap-2">
                        Confirm Password:
                        <input
                            type="password"
                            value={user.confirmPassword}
                            name="confirmPassword"
                            id="confirmPassword"
                            onChange={(e) => changeHandler(e)}
                        />
                        {errors.validationErrors && (
                            <p className="text-red-400">
                                {errors.validationErrors.confirmPassword}
                            </p>
                        )}
                    </label>
                    <button className=" btn btn-primary" type="submit">
                        Submit
                    </button>
                </form>
            </div>
        </>
    );
};
export default RegisterForm;
