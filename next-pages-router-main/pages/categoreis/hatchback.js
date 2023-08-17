import carsData from "../../data/carsData";
import CarList from "../../components/template/CarList";

const hatchback = () => {

  const hatchbackCars = carsData.filter((cars) => cars.category === "hatchback");

    return <CarList data={hatchbackCars} />;
};

export default hatchback;
