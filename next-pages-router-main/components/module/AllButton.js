import styles from "./AllButton.module.css";
import Link from "next/link";

const AllButton = () => {
  return (
    <div>
      <div className={styles.container}>
        <Link href="/cars">See all cars</Link>
      </div>
    </div>
  );
};

export default AllButton;
