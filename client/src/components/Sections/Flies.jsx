import { useEffect, useState } from "react";
import FlyService from "../../services/flies.services";
import ItemCard from "../Cards/ItemCard";
import { useParams } from "react-router-dom";

const Flies = () => {
    const [flies, setFlies] = useState([]);
    const { hatch } = useParams();

    useEffect(() => {
        FlyService.getAll(hatch).then((response) => {
            setFlies(response);
        });
    }, []);

    return (
        <>
            <div className="flex gap-8 flex-wrap">
                {flies.map((fly, index) => (
                    <div key={index}>
                        <ItemCard fly={fly} />
                    </div>
                ))}
            </div>
        </>
    );
};
export default Flies;
