import { useRouter } from "next/router";
import carsData from "../../data/carsData";

import CarsDetail from "../../components/template/CarsDetail";

const CarDetail = () => {

    const router = useRouter();
    const { carsId } = router.query;  

    const carsDetails = carsData[carsId - 1];

    return (
        <CarsDetail detail={carsDetails} /> 
    );
};

export default CarDetail;