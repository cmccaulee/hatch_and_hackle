import Flies from "../components/Flies";
import TopNav from "../components/TopNav";

const AllFlies = () => {
    return (
        <>
            <TopNav />{" "}
            <div className="container mx-8 mt-8">
                <h1 className="text-5xl">Trusted Fly Patterns</h1>
            </div>
            <div className="mx-8 mt-8">
                <Flies />
            </div>
        </>
    );
};
export default AllFlies;
