import SingleFly from "../../components/Sections/SingleFly";
import TopNav from "../../components/Sections/TopNav";

const FlyDetails = () => {
    return (
        <>
            <div className="min-h-screen">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage:
                            "url('https://storage.googleapis.com/hatchandhackleimages/trout_looking.png')",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",

                        filter: "blur(2px)",
                        zIndex: "-1",
                    }}></div>
                <div
                    className="absolute inset-0 bg-black opacity-50"
                    style={{
                        zIndex: "-1",
                    }}></div>
                <TopNav />
                <SingleFly />
            </div>
        </>
    );
};
export default FlyDetails;
