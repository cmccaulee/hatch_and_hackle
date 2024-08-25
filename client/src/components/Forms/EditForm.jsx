import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import FlyService from "../../services/flies.services";

const EditForm = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [fly, setFly] = useState({});
    const [errors, setErrors] = useState({});

    useEffect(() => {
        FlyService.getOne(id).then((res) => {
            setFly(res);
        });
    }, []);

    const changeHandler = (e) => {
        const { name, value } = e.target;
        setFly((prevFlyValue) => ({ ...prevFlyValue, [name]: value }));
    };

    const submitHandler = (e) => {
        e.preventDefault();
        FlyService.update(id, fly)
            .then(() => {
                navigate("/flies");
            })
            .catch((err) => {
                setErrors(err.response.data);
            });
    };

    return (
        <>
            <h2>{fly.name}</h2>
            <form onSubmit={(e) => submitHandler(e)}>
                {errors && (
                    <p>
                        {errors.name} {errors.statusCode}
                    </p>
                )}
                <label htmlFor="name">
                    Fly Name:
                    <input
                        type="text"
                        value={fly.name}
                        name="name"
                        id="name"
                        onChange={(e) => changeHandler(e)}
                    />
                    {errors.validationErrors && (
                        <p className="text-red-400">
                            {errors.validationErrors.name}
                        </p>
                    )}
                </label>
                <label htmlFor="type">
                    Fly Type:
                    <select
                        type="option" // May need to adjust this line
                        value={fly.type}
                        name="type"
                        id="type"
                        onChange={(e) => changeHandler(e)}>
                        <option selected>Pick A Hatch</option>
                        <option value="Dry">Dry</option>
                        <option value="Wet">Wet</option>
                        <option value="Nymph">Nymph</option>
                        <option value="Streamer">Streamer</option>
                        <option value="Stillwater">Stillwater</option>
                        <option value="Other">Other</option>
                    </select>
                    {errors.validationErrors && (
                        <p className="text-red-400">
                            {errors.validationErrors.type}
                        </p>
                    )}
                </label>
                <label htmlFor="hatch">
                    Hatch:
                    <select
                        type="option" // May need to adjust this line
                        value={fly.hatch}
                        name="hatch"
                        id="hatch"
                        onChange={(e) => changeHandler(e)}>
                        <option selected>Pick A Hatch</option>
                        <option value="Caddis">Caddis</option>
                        <option value="Mayfly">Mayfly</option>
                        <option value="Stonefly">Stonefly</option>
                        <option value="Midge">Midges</option>
                        <option value="Terrestrial">Terrestrials</option>
                        <option value="Baitfish">Baitfish</option>
                        <option value="Attractor">Attractor</option>
                        <option value="Other">Other</option>
                    </select>
                    {errors.validationErrors && (
                        <p className="text-red-400">
                            {errors.validationErrors.hatch}
                        </p>
                    )}
                </label>
                <label htmlFor="description">
                    Fly Description:
                    <input
                        type="text"
                        value={fly.description}
                        name="description"
                        id="description"
                        onChange={(e) => changeHandler(e)}
                    />
                    {errors.validationErrors && (
                        <p className="text-red-400">
                            {errors.validationErrors.description}
                        </p>
                    )}
                </label>
                <label htmlFor="image">
                    Fly Image:
                    <input
                        type="text"
                        value={fly.image}
                        name="image"
                        id="image"
                        onChange={(e) => changeHandler(e)}
                    />
                    {errors.validationErrors && (
                        <p className="text-red-400">
                            {errors.validationErrors.image}
                        </p>
                    )}
                </label>
                <button type="submit" className="btn btn-primary">
                    {" "}
                    Update Fly
                </button>
            </form>
        </>
    );
};
export default EditForm;
