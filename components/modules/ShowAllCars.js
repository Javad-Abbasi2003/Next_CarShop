import Link from "next/link";
import styles from "./ShowAllCars.module.css"

const ShowAllCars = () => {
  return (
    <div className={styles.container}>
      <Link href="/cars">Show All Cars</Link>
    </div>
  );
};

export default ShowAllCars;