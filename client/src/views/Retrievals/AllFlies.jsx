import Flies from "../../components/Sections/Flies";
import TopNav from "../../components/Sections/TopNav";
import { Link } from "react-router-dom";

const AllFlies = () => {
    return (
        <>
            <TopNav />{" "}
            <div className="container mx-8 mt-8 flex justify-between">
                <h1 className="text-5xl">Trusted Fly Patterns</h1>
                <Link to={"/flies/create"} className="btn btn-primary">
                    Create Your Own
                </Link>
            </div>
            <div className="mx-8 mt-8">
                <Flies />
            </div>
        </>
    );
};
export default AllFlies;
