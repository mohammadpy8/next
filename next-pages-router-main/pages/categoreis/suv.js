import carsData from "../../data/carsData";
import CardList from "../../components/template/CarList";

const suv = () => {

    const suvCars = carsData.filter(cars => cars.category === "suv");

    return (
        <CardList data={suvCars} />
    );
};

export default suv;