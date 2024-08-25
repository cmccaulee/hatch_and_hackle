import { useEffect, useState } from "react";
import FlyService from "../../services/flies.services";
import ItemCard from "../Cards/ItemCard";

const Flies = () => {
    const [flies, setFlies] = useState([]);

    useEffect(() => {
        FlyService.getAll().then((response) => {
            setFlies(response);
        });
    }, []);

    return (
        <>
            <div className="flex gap-8">
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
