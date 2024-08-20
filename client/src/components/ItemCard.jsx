import { Link, useNavigate } from "react-router-dom";

const ItemCard = (props) => {
    const { fly } = props;

    return (
        <>
            <div className="drop-shadow-lg">
                <div className="card max-w-xs h-80 rounded-2xl bg-base-100">
                    <Link to={`/flies/${fly._id}`}>
                        <img
                            src={fly.image}
                            alt={fly.name}
                            className="h-52 rounded-tr-2xl rounded-tl-2xl"
                        />
                    </Link>

                    <div className="mt-8">
                        <h1 className="text-center font-semibold text-lg">
                            {fly.name}
                        </h1>
                        <ul className="flex justify-center gap-4">
                            <Link to={`/flies/${fly._id}`}>View</Link>
                            <li>|</li>
                            <Link to={`/flies/update/${fly._id}`}>Edit</Link>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};
export default ItemCard;
