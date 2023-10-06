import { useRouter } from "next/router";
import carsData from "@/data/carsData";

import CarsList from "@/components/templates/CarsList";

const Category = () => {
  const router = useRouter();
  const { category } = router.query;

  const filteredCars = carsData.filter(car=> car.category === category);

  return (
    <CarsList data={filteredCars} />
  );
};

export default Category;