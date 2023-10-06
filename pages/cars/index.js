//data
import carsData from "@/data/carsData";
//components
import CarsPage from "@/components/templates/CarsPage";
import Categories from "@/components/modules/Categories";
import Searchbar from "@/components/modules/Searchbar";

const cars = () => {
  return (
    <div>
      <Searchbar />
      <Categories />
      <CarsPage data={carsData} />
    </div>
  );
};

export default cars;
