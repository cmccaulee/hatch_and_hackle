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
            <div className="flex justify-center mt-5">
                <form
                    onSubmit={(e) => submitHandler(e)}
                    className="card bg-base-100 w-auto shadow-xl gap-2 px-4 py-8">
                    {errors && (
                        <p>
                            {errors.name} {errors.statusCode}
                        </p>
                    )}
                    <h2 className="text-2xl ml-6 text-center">
                        Edit {fly.name}
                    </h2>
                    <label
                        htmlFor="name"
                        className="input input-bordered flex items-center gap-2">
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
                    <select
                        className="select select-bordered w-full"
                        type="option" // May need to adjust this line
                        value={fly.type}
                        name="type"
                        id="type"
                        placeHolder="Pick A Type"
                        onChange={(e) => changeHandler(e)}>
                        <option value={null}>Pick A Type</option>
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
                    <select
                        className="select select-bordered w-full"
                        type="option" // May need to adjust this line
                        value={fly.hatch}
                        name="hatch"
                        id="hatch"
                        placeHolder="Pick A Hatch"
                        onChange={(e) => changeHandler(e)}>
                        <option value={null}>Pick A Hatch</option>
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
                    <label
                        htmlFor="image"
                        className="input input-bordered flex items-center gap-2">
                        Fly Image:
                        <input
                            placeholder="URL only for now"
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

                    <textarea
                        className="textarea textarea-bordered textarea-lg w-full"
                        placeholder="Description"
                        type="textarea"
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
                    <button type="submit" className="btn btn-primary">
                        {" "}
                        Update Fly
                    </button>
                </form>
            </div>
        </>
    );
};
export default EditForm;
