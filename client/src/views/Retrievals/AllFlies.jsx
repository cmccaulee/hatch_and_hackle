import Flies from "../../components/Sections/Flies";
import TopNav from "../../components/Sections/TopNav";
import { Link } from "react-router-dom";
import { LoggedInUserContext } from "../../context/LoggedInUserContext";
import { useContext } from "react";
import HatchFilter from "../../components/Forms/HatchFilter";

const AllFlies = () => {
    const { isLoggedIn } = useContext(LoggedInUserContext);
    return (
        <>
            <TopNav />
            <div className="mx-20 flex flex-col justify-center">
                <div className=" mx-8 mt-8 flex justify-between">
                    <h1 className="text-5xl">Trusted Fly Patterns</h1>
                    <HatchFilter />
                    {isLoggedIn ? (
                        <Link to={"/flies/create"} className="btn btn-primary">
                            Create Your Own
                        </Link>
                    ) : null}
                </div>
                <div className=" mt-8 flex justify-around">
                    <Flies />
                </div>
            </div>
        </>
    );
};
export default AllFlies;
