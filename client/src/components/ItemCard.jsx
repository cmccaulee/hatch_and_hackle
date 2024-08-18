const ItemCard = (props) => {
    const { fly } = props;
    return (
        <>
            <div className="drop-shadow-lg">
                <div className="card max-w-xs h-80 rounded-2xl bg-base-100">
                    <img
                        src={fly.image}
                        alt={fly.name}
                        className="h-52 rounded-tr-2xl rounded-tl-2xl"
                    />

                    <div className="mt-8">
                        <h1 className="text-center font-semibold text-lg">
                            {fly.name}
                        </h1>
                        <ul className="flex justify-center gap-4">
                            <li>View</li>
                            <li>|</li>
                            <li>Edit</li>
                            <li>|</li>
                            <li>Delete</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};
export default ItemCard;
