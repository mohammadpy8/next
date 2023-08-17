import Categoreis from "../../components/module/Categoreis";
import CarsPage from "../../components/template/CarsPage";
import carsData from "../../data/carsData";

const Details = () => {
    return (
        <div>
            <Categoreis />
            <CarsPage data={carsData} />
        </div>
    );
};

export default Details;