import styles from "./CarsDetail.module.css";
import Company from "../icons/Company";
import Model from "../icons/Model";
import Location from "../icons/Location";
import Money from "../icons/Money";
import Road from "../icons/Road";
import Calender from "../icons/Calender";

const CarsDetail = ({ detail }) => {
  const {
    id,
    name,
    model,
    year,
    distance,
    location,
    image,
    price,
    description,
  } = detail;

  return (
    <div className={styles.container}>
      <img src={image} alt="car" className={styles.image} />
      <h3 className={styles.header}>
        {name} {model}
      </h3>
      <div className={styles.details}>
        <div>
          <Company />
          <p>Company</p>
          <span>{name}</span>
        </div>
        <div>
          <Model />
          <p>Model</p>
          <span>{model}</span>
        </div>
        <div>
          <Calender />
          <p>First Register</p>
          <span>{year}</span>
        </div>
        <div>
          <Road />
          <p>Kms driven</p>
          <span>{distance}</span>
        </div>
      </div>
      <div className={styles.details}>
        <div>
          <Location />
          <p>Location</p>
          <span>{location}</span>
        </div>
      </div>
      <div className={styles.details}>
        <p className={styles.descriptionTitle}>Extra Informations</p>
        <p className={styles.descriptionText}>{description}</p>
      </div>
      <div className={styles.details}>
        <div className={styles.price}>
          <Money />
          <p>price: </p>
          <span>$ {price}</span>
        </div>
          </div>
          <button className={styles.button}>Add to Cart</button>
    </div>
  );
};

export default CarsDetail;
