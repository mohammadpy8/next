import carsData from "../../data/carsData";
import CardList from "../../components/template/CarList";

const sedan = () => {

    const sedanCars = carsData.filter(cars => cars.category === "sedan");

    return (
        <CardList data={sedanCars} />
    );
};

export default sedan;