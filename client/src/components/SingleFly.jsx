// !Would be best to extract the buttons into a separate component

import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import TagIcon from "./TagIcon";
import FlyService from "../services/flies.services";

const SingleFly = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [fly, setFly] = useState({});

    useEffect(() => {
        FlyService.getOne(id).then((response) => {
            setFly(response);
        });
    }, [id]);
    const deleteFly = () => {
        FlyService.delete(id).then(() => {
            navigate("/");
        });
    };

    return (
        <>
            <div className="flex md:flex-row flex-col justify-center gap-x-80 mt-20">
                {/* Card Name */}
                <div className="card bg-white max-w-md">
                    <div className="card-body">
                        <div>
                            <h1 className="text-4xl">{fly.name}</h1>
                        </div>
                        <div className="mt-4">
                            <p>{fly.description}</p>
                            <div className="flex justify-center gap-8 mt-8">
                                <TagIcon
                                    tag={fly.type}
                                    icon="https://storage.googleapis.com/hatchandhackleimages/fish-hook.png"
                                />
                                <TagIcon
                                    tag={fly.hatch}
                                    icon="https://storage.googleapis.com/hatchandhackleimages/feather.png"
                                />
                            </div>
                        </div>
                        <img src={fly.image} alt={fly.name} />
                    </div>
                </div>
                {/* Buttons */}
                <div className="flex justify-center">
                    <div className="flex flex-col gap-8 justify-center mr-20">
                        <button className="btn btn-accent btn-wide drop-shadow-md text-white">
                            Edit Fly
                        </button>
                        <button className="btn btn-accent drop-shadow-md text-white">
                            Delete Fly
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};
export default SingleFly;
