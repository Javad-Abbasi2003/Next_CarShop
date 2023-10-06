import { useRouter } from "next/router";
import carsData from "@/data/carsData";

import CarDetails from "@/components/templates/CarDetails";

const carDetails = () => {
  const router = useRouter();
  const { carId } = router.query;
  const carData = carsData[carId - 1];

  return <CarDetails {...carData} />;
};

export default carDetails;
