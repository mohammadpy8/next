import styles from "./Categoreis.module.css";
import Link from "next/link";
import Sedan from "../icons/Sedan";
import Sport from "../icons/Sport";
import Suv from "../icons/Suv";
import Hatchback from "../icons/Hatchback";

const Categoreis = () => {
  return (
    <div className={styles.container}>
      <div>
        <p>Sedan</p>
        <Sedan />
      </div>
      <div>
        <p>Sport</p>
        <Sport />
      </div>
      <div>
        <p>Suv</p>
        <Suv />
      </div>
      <div>
        <p>Hatchback</p>
        <Hatchback />
      </div>
    </div>
  );
};

export default Categoreis;
