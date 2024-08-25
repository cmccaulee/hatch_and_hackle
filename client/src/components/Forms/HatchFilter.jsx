import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import FlyService from "../../services/flies.services";

const HatchFilter = () => {
    const navigate = useNavigate();
    const [hatch, setHatch] = useState({
        hatch: "",
    });
    const changeHandler = (e) => {
        const { name, value } = e.target;
        setHatch((prevHatchVal) => ({ ...prevHatchVal, [name]: value }));
    };
    const submitHandler = (e) => {
        e.preventDefault();
        FlyService.getAll(hatch.hatch)
            .then(() => {
                {
                    hatch.hatch === ""
                        ? navigate(`/flies`)
                        : navigate(`/flies/hatch/${hatch.hatch}`);
                }
                window.location.reload();
            })
            .catch((err) => {
                setErrors(err.response.data);
            });
    };
    const handleClear = () => {
        navigate("/flies");
    };

    return (
        <>
            <form onSubmit={(e) => submitHandler(e)} className="flex gap-4">
                <select
                    className="select select-bordered w-full"
                    type="option" // May need to adjust this line
                    value={hatch.hatch}
                    name="hatch"
                    id="hatch"
                    placeHolder="Pick A Hatch"
                    onChange={(e) => changeHandler(e)}>
                    <option value="">Pick A Hatch</option>
                    <option value="Caddis">Caddis</option>
                    <option value="Mayfly">Mayfly</option>
                    <option value="Stonefly">Stonefly</option>
                    <option value="Midge">Midges</option>
                    <option value="Terrestrial">Terrestrials</option>
                    <option value="Baitfish">Baitfish</option>
                    <option value="Attractor">Attractor</option>
                    <option value="Other">Other</option>
                </select>
                <button className="btn btn-primary" type="submit">
                    Submit
                </button>
                <button
                    onClick={handleClear}
                    className="btn btn-primary"
                    type="submit">
                    Clear
                </button>
            </form>
        </>
    );
};
export default HatchFilter;
