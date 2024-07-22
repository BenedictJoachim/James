import BodyShape from "../components/fitness/BodyShape";
import Header from "../components/fitness/Header";
import Program from "../components/fitness/Program";
import Progress from "../components/fitness/Progress";
import Services from "../components/fitness/Services";
import Trainer from "../components/fitness/Trainer";
import Footer from "../components/fitness/Footer";

const Fitness = () => {
    return (
        <div>
            <Header />
            <Program />
            <BodyShape />
            <Trainer />
            <Progress />
            <Services />
            <Footer />
        </div>
    );
};

export default Fitness