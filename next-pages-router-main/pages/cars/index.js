import CarsPage from "../../components/template/CarsPage";
import carsData from "../../data/carsData";

const Details = () => {
    return (
        <div>
            <CarsPage data={carsData} />
        </div>
    );
};

export default Details;