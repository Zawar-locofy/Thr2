import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./Card5.module.css";

type Card5Type = {
  nevada?: string;

  /** Style props */
  card5BackgroundImage?: Property.BackgroundImage;
};

const Card5: FunctionComponent<Card5Type> = ({
  card5BackgroundImage,
  nevada,
}) => {
  const card5Style: CSS.Properties = useMemo(() => {
    return {
      backgroundImage: card5BackgroundImage,
    };
  }, [card5BackgroundImage]);

  return (
    <div className={styles.card5} style={card5Style}>
      <div className={styles.text}>
        <div className={styles.nevada}>{nevada}</div>
        <div className={styles.listings}>25 listings</div>
      </div>
    </div>
  );
};

export default Card5;
