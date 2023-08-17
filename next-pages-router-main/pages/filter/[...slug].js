import carsData from "../../data/carsData";
import { useRouter } from "next/router";
import CarList from "../../components/template/CarList";

const filter = () => {

    const router = useRouter();

    const [min, max] = router.query.slug || [];
    const filtredCars = carsData.filter(cars => cars.price > min && cars.price < max);

    if (!filtredCars.length) return <h3>Not Found</h3>;

    return (
        <CarList data={filtredCars} />
    );
};

export default filter;