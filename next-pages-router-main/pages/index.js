import SearchBar from "../components/module/SearchBar";
import Categoreis from "../components/module/Categoreis";
import AllButton from "../components/module/AllButton";
import CardPage from "../components/template/CarsPage";
import carsData from "../data/carsData";

const Home = () => {

    const homeCars = carsData.slice(0, 3);

    return (
        <>
            <SearchBar />
            <Categoreis />
            <AllButton />
            <CardPage data={homeCars} />
        </>
    );
};

export default Home;