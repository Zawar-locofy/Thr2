import { FunctionComponent } from "react";
import styles from "./Card1.module.css";

type Card1Type = {
  newYprk?: string;
};

const Card1: FunctionComponent<Card1Type> = ({ newYprk }) => {
  return (
    <div className={styles.card1}>
      <div className={styles.text}>
        <div className={styles.newYprk}>{newYprk}</div>
        <div className={styles.listings}>25 listings</div>
      </div>
    </div>
  );
};

export default Card1;
