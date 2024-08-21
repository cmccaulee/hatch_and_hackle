import HeroCard from "../components/HeroCard";
import MatchTheHatch from "../components/MatchTheHatch";
import TopNav from "../components/TopNav";

const LandingPage = () => {
    return (
        <>
            <TopNav />
            <div className="mx-20 flex flex-col justify-center">
                <article className="flex justify-center my-10 mb-15">
                    <HeroCard />
                </article>
                <article className="flex justify-center">
                    <MatchTheHatch />
                </article>
            </div>
        </>
    );
};
export default LandingPage;
