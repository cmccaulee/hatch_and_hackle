const HatchCard = (props) => {
    const { hatch, image, tileColor } = props;
    const cardStyle = {
        backgroundColor: tileColor,
    };
    return (
        <>
            <div
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
            </div>
        </>
    );
};
export default HatchCard;
