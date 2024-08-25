import { Link } from "react-router-dom";

const HatchCard = (props) => {
    const { hatch, image, tileColor } = props;
    const cardStyle = {
        backgroundColor: tileColor,
    };
    return (
        <>
            <Link
                to={`/flies/hatch/${hatch}`}
                className=" card bg-${tileColor} w-72 shadow-xl"
                style={cardStyle}>
                <div className="card-body">
                    <figure>
                        <img src={image} alt="grasshopper" />
                    </figure>
                    <div className="flex justify-center ">
                        <h2 className="text-2xl pb-5 pt-1 ">{hatch}</h2>
                    </div>
                </div>
            </Link>
        </>
    );
};
export default HatchCard;
