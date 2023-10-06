import { useState } from "react";
import styles from "./Searchbar.module.css";
import { useRouter } from "next/router";

const Searchbar = () => {
  const [min, setMin] = useState();
  const [max, setMax] = useState();

  const router = useRouter();

  const searchHandler = () => {
    if (min && max && min < max) {
      router.push(`/filter/${min}/${max}`);
    } else {
      alert("Please enter min and max price correctly!");
    }
  };

  return (
    <div className={styles.container}>
      <div>
        <input
          type="number"
          placeholder="Enter min-price"
          value={min}
          onChange={(e) => setMin(e.target.value)}
        />
        <input
          type="number"
          placeholder="Enter max-price"
          value={max}
          onChange={(e) => setMax(e.target.value)}
        />
      </div>
      <button onClick={searchHandler}>Filter</button>
    </div>
  );
};

export default Searchbar;
