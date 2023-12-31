//data
import carsData from "@/data/carsData";
//components
import CarsPage from "@/components/templates/CarsPage";
import Categories from "@/components/modules/Categories";
import Searchbar from "@/components/modules/Searchbar";
import ShowAllCars from "@/components/modules/ShowAllCars";

const HomePage = () => {
  const slicedList = carsData.slice(0, 3);
  return (
    <div>
      <Searchbar />
      <Categories />
      <ShowAllCars />
      <CarsPage data={slicedList} />
    </div>
  );
};

export default HomePage;
