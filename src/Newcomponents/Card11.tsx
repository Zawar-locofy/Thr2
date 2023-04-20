import { FunctionComponent } from "react";
import styles from "./Card11.module.css";

type Card11Type = {
  propertyImage?: string;
  car?: string;
  bathtub?: string;
  arrowsOut?: string;
  ellipse1?: string;
  shareNetwork?: string;
  heart?: string;
  plus?: string;
};

const Card11: FunctionComponent<Card11Type> = ({
  propertyImage,
  car,
  bathtub,
  arrowsOut,
  ellipse1,
  shareNetwork,
  heart,
  plus,
}) => {
  return (
    <div className={styles.card1}>
      <img className={styles.propertyImageIcon} alt="" src={propertyImage} />
      <div className={styles.propertyName}>
        <div className={styles.alliumPlaceOrlando}>
          92 ALLIUM PLACE, ORLANDO FL 32827
        </div>
      </div>
      <div className={styles.price}>
        <div className={styles.div}>$ 590,693</div>
      </div>
      <div className={styles.moreDetails}>
        <div className={styles.parking}>
          <img className={styles.carIcon} alt="" src={car} />
          <div className={styles.ft}>4</div>
        </div>
        <div className={styles.parking}>
          <img className={styles.carIcon} alt="" src={bathtub} />
          <div className={styles.ft}>4</div>
        </div>
        <div className={styles.parking}>
          <img className={styles.carIcon} alt="" src={arrowsOut} />
          <div className={styles.ft}>2,096.00 ft</div>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.user}>
          <img className={styles.userChild} alt="" src={ellipse1} />
          <div className={styles.jennyWilson}>Jenny Wilson</div>
        </div>
        <div className={styles.ctas}>
          <div className={styles.share}>
            <img
              className={styles.sharenetworkIcon}
              alt=""
              src={shareNetwork}
            />
          </div>
          <div className={styles.share}>
            <img className={styles.sharenetworkIcon} alt="" src={heart} />
          </div>
          <div className={styles.share}>
            <img className={styles.sharenetworkIcon} alt="" src={plus} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card11;
