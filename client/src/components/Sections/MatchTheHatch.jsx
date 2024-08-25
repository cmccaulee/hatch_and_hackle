import { Link } from "react-router-dom";
import HatchCard from "../Cards/HatchCard";
const MatchTheHatch = () => {
    return (
        <>
            <section className="md:max-w-5xl">
                <div className="flex sm:flex-row justify-between flex-col">
                    <h2 className="lg:text-5xl md:text-4xl text-2xl font-semibold">
                        Match The Hatch
                    </h2>
                    <Link to={"/flies"} className="btn btn-primary">
                        View All Patterns
                    </Link>
                </div>
                <div className="flex justify-center my-8">
                    <div className="flex sm:flex-row justify-between flex-col gap-10 md:max-w-5xl">
                        <HatchCard
                            hatch="Terrestrial"
                            image="https://storage.googleapis.com/hatchandhackleimages/grasshopper.png"
                            tileColor="#FCCFB1"
                        />
                        <HatchCard
                            hatch="Caddis"
                            image="https://storage.googleapis.com/hatchandhackleimages/caddisfly.png"
                            tileColor="#D3A771"
                        />
                        <HatchCard
                            hatch="Mayfly"
                            image="https://storage.googleapis.com/hatchandhackleimages/mayflie.png"
                            tileColor="#E2E1B2"
                        />
                        <HatchCard
                            hatch="Baitfish"
                            image="https://storage.googleapis.com/hatchandhackleimages/sculpin.png"
                            tileColor="#5292A3"
                        />
                    </div>
                </div>
            </section>
        </>
    );
};
export default MatchTheHatch;
