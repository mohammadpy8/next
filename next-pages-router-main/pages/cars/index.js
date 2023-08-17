import Categoreis from "../../components/module/Categoreis";
import SearchBar from "../../components/module/SearchBar";
import CarsPage from "../../components/template/CarsPage";
import carsData from "../../data/carsData";

const Details = () => {
    return (
        <div>
            <SearchBar />
            <Categoreis />
            <CarsPage data={carsData} />
        </div>
    );
};

export default Details;