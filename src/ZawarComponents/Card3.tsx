import { FunctionComponent } from "react";
import styles from "./Card3.module.css";
const Card3: FunctionComponent = () => {
  return (
    <div className={styles.card3}>
      <div className={styles.text}>
        <div className={styles.miami}>Miami</div>
        <div className={styles.listings}>25 listings</div>
      </div>
    </div>
  );
};

export default Card3;
