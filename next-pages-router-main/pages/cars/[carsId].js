import { useRouter } from "next/router";
import carsData from "../../data/carsData";

const CarDetail = () => {

    const router = useRouter();
    const { carsId } = router.query;  

    const carsDetails = carsData[carsId - 1];

    return (
        <div>
            
        </div>
    );
};

export default CarDetail;