import BodyShape from "../components/fitness/BodyShape";
import Header from "../components/fitness/Header";
import Program from "../components/fitness/Program";
import Progress from "../components/fitness/Progress";
import Services from "../components/fitness/Services";
import Trainer from "../components/fitness/Trainer";
import Hero from "../components/fitness/Hero";

const Fitness = () => {
    return (
        <div>
            <Header />
            <Hero />
            <Program />
            <BodyShape />
            <Trainer />
            <Progress />
            <Services />
        </div>
    );
};

export default Fitness