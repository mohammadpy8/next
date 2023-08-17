import styles from "./Categoreis.module.css";
import Link from "next/link";
import Sedan from "../icons/Sedan";
import Sport from "../icons/Sport";
import Suv from "../icons/Suv";
import Hatchback from "../icons/Hatchback";

const Categoreis = () => {
  return (
    <div className={styles.container}>
      <Link href="/categoreis/sedan">
        <div>
          <p>Sedan</p>
          <Sedan />
        </div>
      </Link>
      <Link href="/categoreis/sport">
        <div>
          <p>Sport</p>
          <Sport />
        </div>
      </Link>
      <Link href="/categoreis/suv">
        <div>
          <p>Suv</p>
          <Suv />
        </div>
      </Link>
      <Link href="/categoreis/hatchback">
        <div>
          <p>Hatchback</p>
          <Hatchback />
        </div>
      </Link>
    </div>
  );
};

export default Categoreis;
