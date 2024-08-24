import { useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import FlyService from "../services/flies.services";
import TagIcon from "./TagIcon";

const HeroCard = () => {
    const navigate = useNavigate();
    const id = "66c8b843ddf3816ebbcfd4b5";
    const [fly, setFly] = useState({});

    useEffect(() => {
        FlyService.getOne(id).then((response) => {
            setFly(response);
        });
    }, [id]);

    return (
        <>
            <div className="bg-primaryGreen rounded-3xl drop-shadow-xl md:max-w-5xl">
                <div className="flex md:flex-row justify-between flex-col">
                    <div className="flex flex-col justify-center py-4 px-8 gap-4">
                        {/* Hero Header ------------------------------- */}
                        <h2 className="lg:text-5xl md:text-4xl text-2xl font-semibold">
                            {fly.name} {fly.type}
                        </h2>
                        {/* Hero Body --------------------------------- */}
                        <p className="pb-4 text-xl">{fly.heroText}</p>
                        {/* Tags ---------------------------------------*/}
                        <div className="flex justify-center gap-10 pb-4">
                            <TagIcon
                                tag={fly.type}
                                icon="https://storage.googleapis.com/hatchandhackleimages/fish-hook.png"
                            />
                            <TagIcon
                                tag={fly.hatch}
                                icon="https://storage.googleapis.com/hatchandhackleimages/feather.png"
                            />
                        </div>
                        {/* Button -------------------------------------*/}
                        <div className="flex justify-center">
                            <Link
                                className="btn btn-secondary btn-glass opacity-75"
                                to={`/flies/66c8b843ddf3816ebbcfd4b5`}>
                                View The Pattern
                            </Link>
                        </div>
                    </div>

                    {/* Image ------------------------------------------*/}
                    <img
                        src={fly.heroImage}
                        alt="image for hero tile"
                        className="md:w-1/2 rounded-tr-3xl rounded-br-3xl"
                    />
                </div>
            </div>
        </>
    );
};
export default HeroCard;
