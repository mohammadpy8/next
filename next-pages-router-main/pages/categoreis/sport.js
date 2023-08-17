import carsData from "../../data/carsData";
import CardList from "../../components/template/CarList";

const sport = () => {

    const sportCars = carsData.filter(cars => cars.category === "sport");

    return (
        <CardList data={sportCars}/>
    );
};

export default sport;