import CarsList from "@/components/templates/CarsList";
import carsData from "@/data/carsData";
import { useRouter } from "next/router";

const FilteredCars = () => {
  const router = useRouter();

  const [min, max] = router.query.slug || [];
  const filteredList = carsData.filter(
    (car) => car.price >= min && car.price <= max
  );

  return <CarsList data={filteredList} />;
};

export default FilteredCars;
