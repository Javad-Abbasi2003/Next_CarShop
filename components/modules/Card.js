import Link from "next/link";
//components
import Location from "../icons/Location";
//styles
import styles from "./Card.module.css";

const Card = (props) => {
  const { id, name, model, year, distance, location, image, price } = props;

  return (
    <Link href={`/cars/${id}`}>
      <div className={styles.container}>
        <img className={styles.image} src={image} />
        <h4 className={styles.title}>{`${name} ${model}`}</h4>
        <p className={styles.details}>{`${year} | ${distance}Km`}</p>
        <div className={styles.footer}>
          <p>$ {price}</p>
          <div className={styles.location}>
            <p>{location}</p>
            <Location />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
